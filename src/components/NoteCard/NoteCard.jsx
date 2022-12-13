export default function NoteCard({ note }) {
    const date = new Date(note.createdAt)
    return (
        <p>
            {note.text}
            <span className="written-on"> Written on {date.toLocaleDateString('en-us')}</span>
        </p>
    )
}