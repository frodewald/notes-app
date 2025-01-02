import React from 'react';
import NotesInputForm from './NotesInputForm';

class NotesInputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleLength: 0,
      maxLengthTitle: 50
    }

    this.onTitleLengthChangeEventHanlder = this.onTitleLengthChangeEventHanlder.bind(this);
  }

  onTitleLengthChangeEventHanlder(titleLength) {
    this.setState(() => {
      return {
        titleLength
      }
    })
  }
  
  render() {
    return (
      <div className='note-input'>
        <h1 className='note-input__title'>Buat Catatan</h1>
        <h2 className='note-input__title__char-limit'>Sisa Karakter: {this.state.maxLengthTitle - this.state.titleLength}</h2>
        <NotesInputForm addNotes={this.props.addNotes} onTitleLengthChange={this.onTitleLengthChangeEventHanlder} />
      </div>
    )
  }
}


export default NotesInputComponent;