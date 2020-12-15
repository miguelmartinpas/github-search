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

    constructor(props: Props) {
        super(props);
        this.state = {
            term: '',
            items: [],
        };
        this.gitGithubApi = new GithubApi();
    }

    public render(): React.ReactElement {
        const onChange = (term: string) => {
            this.setState({ term });
            if (term.length > 3) {
                this.gitGithubApi.search(term).then((items) => this.setState({ items }));
            }
        };

        const { term, items } = this.state;

        return (
            <div>
                <Search value={term} onChange={onChange} />
                <Table items={items} />
            </div>
        );
    }
}
export default App;
