//"Note" and "recipe" are used interchangeably in this code.

import Note from './Note';
import { AddNote } from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	
	//Note list has AddRecipe button as the first item in the grid, thereby anchoring the button.
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
