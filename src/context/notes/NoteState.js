import { useContext, useState } from "react";
import AlertContext from "../alert/AlertContext";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const { showAlert } = useContext(AlertContext);

    const [notes, setNotes] = useState([]);

    const header = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        'Content-type': 'application/json'
    }

    const fetchNotes = async () => {

        const response = await fetch("http://localhost:8080/api/notes/getnotes", {
            method: 'GET',
            headers: header
        });

        response.json().then(data => {
            setNotes(data);
        });
    }

    const addNote = async (note) => {
        const response = await fetch("http://localhost:8080/api/notes/addnote", {
            method: 'POST',
            headers: header,
            body: JSON.stringify(note)
        });

        if (response.status === 201) {
            showAlert("success", "Note Added Successfully");
        } else {
            showAlert("error", "Some Error Occured");
        }

        fetchNotes();
    }

    const deleteNote = async (noteId) => {
        const response = await fetch(`http://localhost:8080/api/notes/deletenote?noteId=${noteId}`, {
            method: 'DELETE',
            headers: header
        });
        if (response.status === 200) {
            showAlert("success", "Note Deleted Successfully");
        } else {
            showAlert("error", "Some Error Occured");
        }

        fetchNotes();
    }

    const updateNote = async (note) => {
        const response = await fetch(`http://localhost:8080/api/notes/updatenote`, {
            method: 'PUT',
            headers: header,
            body: JSON.stringify(note)
        });

        if (response.status === 201) {
            showAlert("success", "Note Updated Successfully");
        } else {
            showAlert("error", "Some Error Occured");
        }

        fetchNotes();
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote, fetchNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;