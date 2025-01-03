import React from 'react';

function NotesArchiveButton({ id, onArchive, isArchived, isArchiveLoadingId }) {
  // Cek apakah tombol ini sedang dalam status loading
  const isLoading = isArchiveLoadingId === id;

  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchive(id)}
      disabled={isLoading}
    >
      {isLoading
        ? "processing..."
        : isArchived
        ? "Unarchive"
        : "Archive"}
    </button>
  );
}

export default NotesArchiveButton;
