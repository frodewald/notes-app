import React from "react";
import NotesItemTitle from "./NotesItemTitle";
import NotesItemDate from "./NotesItemDate";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeleteButton";
import NotesArchiveButton from "./NotesArchiveButton";

function NotesItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <NotesItemTitle title={title} />
        <NotesItemDate createdAt={createdAt} />
        <NotesItemBody body={body} />
      </div>
      <div className="note-item__action">
        <NotesDeleteButton id={id} onDelete={onDelete} />
        <NotesArchiveButton id={id} isArchived={archived} onArchive={onArchive} />
      </div>
    </div>
  )
}

export default NotesItem;