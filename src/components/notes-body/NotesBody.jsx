import React from "react";
import NotesList from "../notes-item/NotesList";

function NotesBody({ activeNotes, archivedNotes, onDelete, onArchive }) {
  return (
    <div className="note-app__body"> 
      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? (
        <NotesList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NotesList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
    </div>
  )
}

export default NotesBody;