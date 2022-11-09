import { useState } from 'react';
//import AddIngredient from './AddIngredient';

const AddNote = ({ handleAddNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	const [ingredientText, setIngredientText] = useState('');

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleIngredientChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setIngredientText(event.target.value);
		}
	};

	const AddIngredient = ({ handleAddIngredient }) => {
		const [ingredientText, setIngredientText] = useState('');
	}

	const handleSaveClick = () => {
		handleAddNote(recipeText);
		setNoteText('');
		setIngredientText('');
	};
//This is the main to create a new not having the placeholder and showing you how much text you have left.
//Also where you can have the button to save the note which then adds the note
	return (
		<div>
			<div className='ingredients new'>
			<textarea
					rows='9'
					cols='10'
					placeholder='Type to add ingredients...'
					value={ingredientText}
					onChange={handleIngredientChange}
				></textarea>
			</div>
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
					<button className='save' onClick={() => {
						handleSaveClick();
						}}>
						Save Recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddNote;
