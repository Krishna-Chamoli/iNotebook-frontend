import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'

function Notes() {
    const { notes, fetchNotes } = useContext(NoteContext);

    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchNotes();
        } else {
            navigate("/login");
        }
    }, [])

    return (
        <div className="mx-2" style={{ "height": "35rem", "width": "20rem", "overflow": "wrap" }}>
            <h2 className="text-center my-3">Your Notes</h2>
            <div>
                {notes.map((note) => {
                    return <NoteItem key={note.notesId} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes