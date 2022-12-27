import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import EditModal from './EditModal';
import Modal from './Modal';
function NoteItem(props) {
    let note = props.note;

    const description = note.description.length > 150 ? note.description.slice(0, 150) + "....." : note.description;

    const title = note.title.length > 23 ? note.title.slice(0, 23) + ".." : note.title;

    const { deleteNote } = useContext(NoteContext);

    const handleDeleteButton = () => {

        if (window.confirm("Are you sure you want to delete?")) {
            deleteNote(note.notesId);
        }
    }

    const date = new Date(note.date);

    return (
        <div className="card mx-auto my-2 border-dark" >

            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{title} </h5>
                    <Modal note={note} />
                </div>
                <p className="card-text">{description} </p>
                <p className="card-text"><small className="text-muted"> {date.toLocaleString('default', { day: "numeric", month: "long" })}</small></p>
                <div className="d-flex justify-content-between">
                    <EditModal note={note} />
                    <button className="btn btn-danger" onClick={handleDeleteButton}>Delete  <i className="fa-solid fa-trash-can mx-1"></i> </button>
                </div>
            </div>
        </div>
    )
}

export default NoteItem