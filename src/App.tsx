import React from 'react';
import GithubApi from './services/GithubApi/GithubApi';
import Search from './components/molecules/Search';
import Table, { Iitem } from './components/molecules/Table';

interface Props {}

interface State {
    term: string;
    items: Iitem[];
}

class App extends React.Component<Props, State> {
    private gitGithubApi: GithubApi;

    private minCharsToSearch: number;

    constructor(props: Props) {
        super(props);
        this.state = {
            term: '',
            items: [],
        };
        this.gitGithubApi = new GithubApi();
        this.minCharsToSearch = 3;
    }

    private onChangeValueToSearch = (term: string) => {
        this.setState({ term });
        if (this.hasMinimumCharsToSearch(term)) {
            this.gitGithubApi.search(term).then((items) => this.setState({ items }));
        }
    };

    private hasMinimumCharsToSearch = (term: string): boolean => {
        return term.length > this.minCharsToSearch;
    };

    public render(): React.ReactElement {
        const { term, items } = this.state;
        return (
            <div>
                <Search value={term} onChange={this.onChangeValueToSearch} />
                <Table items={items} />
            </div>
        );
    }
}
export default App;
