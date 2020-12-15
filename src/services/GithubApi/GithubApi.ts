class GithubApi {
    private hostPath: string;

    private maxItemPerPage;

    public constructor() {
        this.hostPath = 'https://api.github.com/search/repositories';
        this.maxItemPerPage = 10;
    }

    public async search(term: string): Promise<any> {
        const data = await this.get(term);
        return this.parserData(data);
    }

    private async get(term: string): Promise<any[]> {
        const response = await fetch(this.getUrl(term));
        const json = await response.json();
        return json.items;
    }

    // eslint-disable-next-line class-methods-use-this
    private parserData(items: any[]): any[] {
        return items.map((item: any) => ({ name: item.name, url: item.html_url }));
    }

    private getUrl(term: string): string {
        return `${this.hostPath}?q=${term}&page=1&per_page=${this.maxItemPerPage}&sort=stars&order=desc`;
    }
}

export default GithubApi;
