import React from 'react';

function NotesDeleteButton({ id, onDelete, isDeleteLoadingId }) {
  const isLoading = isDeleteLoadingId === id; // Cek apakah tombol ini sedang loading

  return (
    <button
      className="note-item__delete-button"
      onClick={() => onDelete(id)}
      disabled={isLoading} // Nonaktifkan tombol saat loading
    >
      {isLoading ? "Deleting..." : "Delete"}
    </button>
  );
}

export default NotesDeleteButton;