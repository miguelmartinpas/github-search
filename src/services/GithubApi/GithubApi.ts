class GithubApi {
    private hostPath: string = 'https://api.github.com/search/repositories';

    public search ( term: string ) {
        // const response = await fetch(this.getUrl(term));
        // return response;
        return fetch(this.getUrl(term));
    }

    private getUrl (term: string) {
        return `${this.hostPath}?q=${term}&page=1&per_page=100&sort=stars&order=desc`;
    }
}

export default GithubApi; 