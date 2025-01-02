import React from 'react';

function formatDate(dateString) {
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', options);  // id-ID untuk format Indonesia
}

function NotesItemDate({ createdAt }) {
  return <p className='note-item__date'>{ formatDate(createdAt) }</p>;
}

export default NotesItemDate;