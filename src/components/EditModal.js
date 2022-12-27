import React, { useContext, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

function EditModal(props) {

    const ref = useRef();

    const { updateNote } = useContext(NoteContext);

    const note = props.note;

    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = () => {

        if (window.confirm("Are you sure you want to update?")) {
            const newNote = {
                "notesId": note.notesId,
                "title": title,
                "description": description
            }
            ref.current.click();
            updateNote(newNote);
        }

    }
    return (
        <>
            <button ref={ref} className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target={`#editexampleModal${note.notesId}`}>Edit <i className="fa-solid fa-pen-to-square mx-1"></i></button>
            <div className="modal fade" id={`editexampleModal${note.notesId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`editexampleModalLabel${note.notesId}`}>{note.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleTitleChange} value={title} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleDescriptionChange} value={description}></textarea>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" type="button" onClick={handleSubmit}>Save</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditModal