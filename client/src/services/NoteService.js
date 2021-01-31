import axios from 'axios';

const GET_NOTES_URL = "http://localhost:8081/notes/all";
const ADD_NOTE_URL = 'http://localhost:8081/notes/add';
// Specific element  action URLs
// {id} is passed in the function as a parameter
const NOTE_URL ='http://localhost:8081/notes/';

class NoteService {

    getNotes() {
        return axios.get(GET_NOTES_URL);
    }

    addNote(content) {
        return axios.post(ADD_NOTE_URL, {
            content: content
        });
    }

    updateNoteContentById(id, newContent) {
        return axios.post(ADD_NOTE_URL, {
            id: id,
            content: newContent
        });
    }

    deleteNoteById(id) {
        return axios.delete(NOTE_URL + id);
    }
}

export default new NoteService();