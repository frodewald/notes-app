import React from 'react';
import NotesItem from './NotesItem';
 
function NotesList({ notes, onDelete, onArchive }) {
 return (
   <div className="notes-list">
     {
        notes.map((note) => (
          <NotesItem 
          key={note._id}
          id={note._id}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note} />
        ))
      }
   </div>
 );
}
 
export default NotesList;