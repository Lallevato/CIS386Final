import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const AddNote = ({ id, handleAddNote, date, handleDeleteNote }) => {
	const [noteText, setNoteText] = useState('');
	

	const handleSaveClick = () => {
		handleAddNote(noteText);
	};
//NewRecipe button creates a new, blank recipe.
	return (
		<div>
			<div className='NewRecipe'>
			<button className='plusButton' onClick={() => {
			handleSaveClick();
			}}>
			+
		</button>

			</div>
		</div>
	);
};

export  {AddNote};
