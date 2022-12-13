import { useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";

export default function MyNotesList({ notes, setNotes, addNote }) {
  const noteCards = notes.map((n, idx) => <NoteCard note={n} key={idx} />)
  const [noteInfo, setNoteInfo] = useState({
    text: '',
  });

  function handleChange(evt) {
    setNoteInfo({ text: evt.target.value })
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(noteInfo);
    setNoteInfo({text: ''})
  }
  return (
    <>
    {notes.length ?
        <>
            <h2>Your Notes</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>{noteCards}</div>
            <br />
            <label className="flex-ctr-ctr">Add another Note</label>
            <form className='flex-ctr-ctr' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New Note"
                    value={noteInfo.text}
                    name="text"
                    onChange={handleChange}
                    required
                />
                <button>Add Note</button>
            </form>
        </>
        :
        <>
            <p>No Notes Yet!</p>
            <label className="flex-ctr-ctr">Add a Note</label>
            <form className='flex-ctr-ctr' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New Note"
                    value={noteInfo.text} name="text"
                    onChange={handleChange}
                    required
                />
                <button>Add Note</button>
            </form>
        </>
    }
</>
 )
}

