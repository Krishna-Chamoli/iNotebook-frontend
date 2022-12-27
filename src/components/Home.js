import React from 'react'
import NoteForm from './NoteForm'
import Notes from './Notes'

function Home() {
    return (
        <div className="d-flex">
            <Notes />
            <div className="d-flex" style={{ "height": "auto" }}>
                <div className="vr" style={{ "opacity": "1.25" }}></div>
            </div>
            <NoteForm />
        </div>
    )
}

export default Home