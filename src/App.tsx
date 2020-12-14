import React from "react";
import { ProgressPlugin } from "webpack";

import Search from "./components/molecules/Search";

interface Props {}
interface State {
  term: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  render() {
    const onChange = (term: string) => {
      this.setState({ term });
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
