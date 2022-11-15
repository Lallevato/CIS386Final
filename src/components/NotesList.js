import Note from './Note';
import { AddNote } from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			<AddNote className="addRecipe" handleAddNote={handleAddNote} />
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			
		</div>
	);
};

<div className='ingredients new'>
	
</div>
export default NotesList;
