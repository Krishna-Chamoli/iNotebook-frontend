import React from 'react'

function Modal(props) {

    const note = props.note;
    return (
        <>
            <i className="fa-regular fa-eye" data-bs-toggle="modal" data-bs-target={`#exampleModal${note.notesId}`}></i>
            <div className="modal fade" id={`exampleModal${note.notesId}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`exampleModalLabel${note.notesId}`}>{note.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {note.description}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal