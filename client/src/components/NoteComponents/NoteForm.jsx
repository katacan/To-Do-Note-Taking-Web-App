import React from 'react'
import NoteService from '../../services/NoteService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NoteForm = ({inputNoteText, setNoteText, notes, setNotes}) => {


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("note : " + inputNoteText);
        NoteService.addNote(inputNoteText).then((res) => {
            console.log(res.data);
            /* setNotes([...notes,
                {
                    id: res.data.id,
                    content : res.data.content
                }]);  */  
        }); 
        setNotes([...notes,
            {
                content : inputNoteText
            }]); 
            
        setNoteText("");
    }

    const inputNoteTextHandler = (e) => {
        setNoteText(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>
            <Form.Control className="noteInput" as="textarea" rows={3}
             value={inputNoteText} onChange={inputNoteTextHandler}
             placeholder="Write your note here" />
            <br></br>
            <Button variant="primary" onClick={submitHandler} size="sm">Submit</Button>
        </div>
        
    )
}

export default NoteForm;