import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'

function NoteForm() {
    const { addNote } = useContext(NoteContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = () => {
        const note = {
            "title": title,
            "description": description
        }
        addNote(note);
    }
    return (
        <div style={{ "width": "78rem" }}>
            <h2 className="text-center my-3">Add Note</h2>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleTitleChange} value={title} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleDescriptionChange} value={description}></textarea>
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Submit Note</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NoteForm