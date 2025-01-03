import React from 'react';
import { client } from '../sanity/client';
import { writeClient } from '../sanity/write-client';
import { GET_NOTES } from '../sanity/queries';
import NotesInputComponent from './notes-input/NotesInputComponent';
import NotesNavbar from './navbar/NotesNavbar';
import NotesBody from './notes-body/NotesBody';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: [],
      activeNotes: [],
      archivedNotes: [],
      search: "",
      isArchiveLoadingId: null,
      isDeleteLoadingId: null
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  async fetchNotes() {
    try {
      const notes = await client.fetch(GET_NOTES);
      this.setState({ allNotes: notes }, this.updateNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  componentDidMount() {
    this.fetchNotes();
  }

  updateNotes() {
    const { allNotes, search } = this.state;

    const filteredActiveNotes = allNotes
      .filter(note => !note.archived)
      .filter(note => note.title.toLowerCase().includes(search.toLowerCase()));

    const filteredArchivedNotes = allNotes
      .filter(note => note.archived)
      .filter(note => note.title.toLowerCase().includes(search.toLowerCase()));

    this.setState({
      activeNotes: filteredActiveNotes,
      archivedNotes: filteredArchivedNotes,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.allNotes !== this.state.allNotes ||
      prevState.search !== this.state.search
    ) {
      this.updateNotes();
    }
  }

  async onAddNotesHandler({ title, body }) {
    if (!title.trim() || !body.trim()) {
      alert("Title dan Body tidak boleh kosong.");
      return;
    }
    try {
      const newNote = {
        _type: 'notes-post',
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      const createdNote = await writeClient.create(newNote);
      this.setState((prevState) => ({
        allNotes: [...prevState.allNotes, createdNote],
      }));
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }

  async onDeleteHandler(id) {
    try {
      this.setState({ isDeleteLoadingId: id });
      await writeClient.delete(id);
      this.setState((prevState) => ({
        allNotes: prevState.allNotes.filter(note => note._id !== id),
        isDeleteLoadingId: null,
      }));
    } catch (error) {
      console.error('Error deleting note:', error);
      this.setState({ isDeleteLoadingId: null });
    }
  }

  async onArchiveHandler(id) {
    try {
      this.setState({ isArchiveLoadingId: id });
      const noteToUpdate = this.state.allNotes.find(note => note._id === id);
      const updatedNote = await writeClient
        .patch(id)
        .set({ archived: !noteToUpdate.archived })
        .commit();
      this.setState((prevState) => ({
        allNotes: prevState.allNotes.map(note =>
          note._id === id ? updatedNote : note,
        ),
        isArchiveLoadingId: null,
      }));
    } catch (error) {
      this.setState({ isArchiveLoadingId: null });
      console.error('Error archiving note:', error);
    }
  }

  onSearchEventHandler(search) {
    this.setState({ search });
  }

  render() {
    return (
      <div className="notes-app">
        <NotesNavbar onSearch={this.onSearchEventHandler} />
        <NotesInputComponent addNotes={this.onAddNotesHandler} />
        <NotesBody
          activeNotes={this.state.activeNotes}
          archivedNotes={this.state.archivedNotes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          isArchiveLoadingId={this.state.isArchiveLoadingId}
          isDeleteLoadingId={this.state.isDeleteLoadingId}
        />
      </div>
    );
  }
}

export default NotesApp;