import React , { useState } from 'react'
import NoteService from '../../services/NoteService'
import Button from 'react-bootstrap/Button'

const Note = ({ notes, setNotes, note }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [updatedNoteContent, setUpdatedNoteContent] = useState(note.content);

    const deleteHandler = (e) => {
        setNotes(notes.filter((el) => el.id !== note.id));
        NoteService.deleteNoteById(note.id);
        e.preventDefault();
    }

    const editSubmitHandler = (e) => {
        setIsEdit(!isEdit);
        if (!isEdit) {
            return;
        }
    
        /*
        let updatedNoteContent = {
            notes[updatedNoteContentIndex]
        }; */

        const newNotes = notes.map((currNote) => {
            if (currNote.id === note.id) {
              return {
                id: note.id,
                content: updatedNoteContent,
              };
            } else {
              return currNote;
            }
          });
       
          setNotes(newNotes);

        NoteService.updateNoteContentById(note.id, updatedNoteContent);
        e.preventDefault();
    }

    const updatingNoteHandler = (e) => {
        setUpdatedNoteContent(e.target.value);
        e.preventDefault();
    }

    return (
        <div>
            <li className="noteItem">
                {isEdit ? 
                    <textarea value={updatedNoteContent} onChange={updatingNoteHandler}>{note.content}</textarea>
                    : note.content}
            </li>
            <Button variant="danger" onClick={deleteHandler} size="sm">Delete</Button>{' '}
            <Button variant="success"  onClick={editSubmitHandler} size="sm">{isEdit ? "Save" : "Edit"}</Button>{' '}
        </div>
    )

}

export default Note;
