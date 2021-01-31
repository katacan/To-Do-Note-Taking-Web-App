import React from 'react'
import Note from './Note'
import ListGroup from 'react-bootstrap/ListGroup'

const NoteList = ({ notes, setNotes }) => {

    return (
        <ul className="noteList">
            <ListGroup as="ul">
                {notes.map((note) =>
                    <Note key={note.id} note={note} notes= {notes} setNotes={setNotes}></Note>
                )}
            </ListGroup>
            
        </ul>
    );

};

export default NoteList;