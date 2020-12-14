class GithubApi {
    private hostPath: string = 'https://api.github.com/search/repositories';
    private maxItemPerPage: number = 10;

    public async search ( term: string ) {
        const data = await this.get(term)
        return this.parserData(data);
    }

    private async get ( term: string ) {
        const response = await fetch(this.getUrl(term))
        const json = await response.json();
        return json.items;
    }

    private parserData(items: any[]) {
        return items.map((item: any) => ({ name: item.name, url: item.html_url }));
    }

    private getUrl (term: string) {
        return `${this.hostPath}?q=${term}&page=1&per_page=${this.maxItemPerPage}&sort=stars&order=desc`;
    }
}

export default GithubApi; 