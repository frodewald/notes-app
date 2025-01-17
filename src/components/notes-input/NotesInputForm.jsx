import React from 'react';

class NotesInputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      isLoading: false
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    if(title.length <= 50) {
      this.setState({ title });
      this.props.onTitleLengthChange(title.length);
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    });
  }

  async onSubmitEventHandler(event) {
    event.preventDefault();

    this.setState({ isLoading: true });

    await this.props.addNotes(this.state);

    this.setState({
      title: "",
      body: "",
      isLoading: false,
    });

    this.props.onTitleLengthChange(0);
  }

  render() {
    return (
      <form className='note-input-form' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
        <textarea type="text" placeholder='Isi' value={this.state.body} onChange={this.onBodyChangeEventHandler} required/>
        <button type="submit" disabled={this.state.isLoading}>
          {this.state.isLoading ? (
            <span className="loading-icon">Menambahkan...</span>
          ) : (
            "Tambah Catatan"
          )}
        </button>
      </form>
    )
  }
}

export default NotesInputForm;