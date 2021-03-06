import React from 'react';
import GithubApi from '../../../services/Api/Github';
import Loading from '../../atoms/Loading';
import Search from '../../molecules/Search';
import DynamicTable from '../../molecules/DynamicTable';
import './Dashboard.styles.less';

interface Props {}

interface State {
    items: any[];
    loading: boolean;
}

class Dashboard extends React.Component<Props, State> {
    private githubApi: GithubApi;

    private minCharsToSearch: number;

    constructor(props: Props) {
        super(props);
        this.state = {
            items: [],
            loading: false,
        };
        this.githubApi = new GithubApi();
        this.minCharsToSearch = 3;
    }

    private onChangeValueToSearch = (term: string) => {
        this.setState({ loading: true });
        this.githubApi.search(term).then((items) => this.setState({ items, loading: false }));
    };

    private renderSearch(): React.ReactElement {
        const { loading } = this.state;

        return (
            <div className="dashboard-header">
                <div className="dashboard-loading">
                    <Loading width={15} hidden={!loading} />
                </div>
                <Search value="" onChange={this.onChangeValueToSearch} />
            </div>
        );
    }

    private renderDynamicTable(): React.ReactElement {
        const { items } = this.state;

        return (
            <div className="dashboard-body">
                <DynamicTable headers={['Name', 'Url']} items={items} />
            </div>
        );
    }

    public render(): React.ReactElement {
        return (
            <div className="dashboard">
                {this.renderSearch()}
                {this.renderDynamicTable()}
            </div>
        );
    }
}
export default Dashboard;
