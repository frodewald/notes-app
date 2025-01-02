import React from 'react';
 
function NotesArchiveButton({ id, onArchive, isArchived }) {
  return <button className='note-item__archive-button' onClick={() => onArchive(id)}>
    {isArchived ? 'Unarchive' : 'Archive'}
  </button>
}

export default NotesArchiveButton;