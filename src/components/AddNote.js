import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText);
			setNoteText('');
		}
	};
//This is the main to create a new not having the placeholder and showing you how much text you have left.
//Also where you can have the button to save the note which then adds the note
	return (
		<div className='note new'>
			<textarea
				rows='9'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<small>
					{characterLimit - noteText.length} Remaining Characters
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save Note
				</button>
			</div>
		</div>
	);
};

export default AddNote;
