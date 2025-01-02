import React from "react";

class NotesSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    const search = event.target.value
    this.setState({ search });
    this.props.onSearch(search);
  }

  render() {
    return (
      <form>
        <input type="search" placeholder="Cari catatan..." value={this.state.search} onChange={this.onSearchChangeEventHandler} />
      </form>
    );
  }
}

export default NotesSearch;