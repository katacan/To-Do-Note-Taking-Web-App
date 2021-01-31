import React, { useState, useEffect } from 'react'
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import NoteService from '../../services/NoteService'

const NotePage = () => {

    const[inputNoteText, setNoteText] = useState('');
    const[notes, setNotes] = useState([]);

    useEffect(() => {
        NoteService.getNotes().then((res) => {
            console.log("notes useEffect works");
            setNotes(res.data);
        })
    },[])

    return (
        <div>
            <NoteForm notes={notes} setNotes={setNotes}
                 inputNoteText={inputNoteText} setNoteText={setNoteText}>            
            </NoteForm>
            <NoteList notes={notes} setNotes={setNotes}></NoteList>
        </div>
        
    )

}

export default NotePage;
