import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const AddNote = ({ id, handleAddNote, date, handleDeleteNote }) => {
	const [noteText, setNoteText] = useState('');
	

	const handleSaveClick = () => {
		handleAddNote(noteText);
	};
//This is the main to create a new not having the placeholder and showing you how much text you have left.
//Also where you can have the button to save the note which then adds the note
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
