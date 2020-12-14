import React from "react";
import GithubApi from "./services/GithubApi/GithubApi";
import Search from "./components/molecules/Search";

interface Props {}
interface State {
  term: string;
}

class App extends React.Component<Props, State> {
  private gitGithubApi: GithubApi;

  constructor(props: Props) {
    super(props);
    this.state = {
      term: "",
    };
    this.gitGithubApi = new GithubApi();
  }
  render() {
    const onChange = (term: string) => {
      this.setState({ term });
      if (term.length > 3) {
        // this.gitGithubApi
        //   .search(term)
        //   .then((response) => console.log("response", response));
        this.gitGithubApi
          .search(term)
          .then((response) => response.json())
          .then((response) => console.log("response", response));
      }
    };

    return (
      <div>
        <Search value={this.state.term} onChange={onChange} />
        ---{this.state.term}---
      </div>
    );
  }
}
export default App;
