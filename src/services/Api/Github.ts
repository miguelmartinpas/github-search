export const HOST = 'https://api.github.com';
export const PATH = '/search/repositories';

class Github {
    private hostPath: string;

    private maxItemPerPage;

    public constructor() {
        this.hostPath = `${HOST}${PATH}`;
        this.maxItemPerPage = 10;
    }

    // Main method
    public async search(term: string): Promise<any> {
        const data = await this.getData(term);
        return this.parserData(data);
    }

    // Try to connect to github service
    private async getData(term: string): Promise<any[]> {
        try {
            const response = await fetch(this.getUrl(term));
            const json = await response.json();
            return json.items;
        } catch (error) {
            console.error('Error when try to connecto to github API');
            return [];
        }
    }

    // Parser: try to return only the necessary data
    // eslint-disable-next-line class-methods-use-this
    private parserData(items: any[]): any[] {
        return items.map((item: any) => ({ key: item.name, url: item.html_url }));
    }

    // get url of github API
    private getUrl(term: string): string {
        return `${this.hostPath}?q=${term}&page=1&per_page=${this.maxItemPerPage}&sort=stars&order=desc`;
    }
}

export default Github;
