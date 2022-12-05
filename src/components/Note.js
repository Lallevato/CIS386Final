import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, date, handleDeleteNote }) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 1000;
	const regex = /([+-]?([0-9][.])?[0-9]+)/g;


	const [ingredientText, setIngredientText] = useState('');

	const [titleText, setTitleText] = useState('New Recipe');

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

	const handleTitleChange = (event) => {
		if (30 - event.target.value.length >= 0) {
			setTitleText(event.target.value);
		}
	};

	// This constart is used to triple all of the integers in the ingredients.
	const doubleIngredients = (event) => {
		// This is the function used to double all the integers. It works by replacing any integers found by the same number multiplied by 2.
		setIngredientText(ingredientText.toString().replace(regex, function(match){
			return match * 2;
		}));
	};

	// This constant is used to half all of the integers in the ingredients.
	const halfIngredients = (event) => {
		// This is the function used to half all the integers. It works by replacing any integers found by the same number divided by 2.
		setIngredientText(ingredientText.toString().replace(regex, function(match){
			return match / 2;
		}));
	};

	return (
		
		<div className='note'>
			<div className='titlearea'>
				<textarea
					type="title"
					rows='2'
					cols='10'
					maxlength='30'
					placeholder='Title'
					value={titleText}
					onChange={handleTitleChange}>	
				</textarea>
			</div>
			<div><br></br></div>
			<div className='ingredients new'>
			 <textarea
			    type='ingredient'
	 			rows='9'
	 			cols='10'
	 			placeholder='Type to add ingredients...'
	 			value={ingredientText}
	 			onChange={handleIngredientChange}
	 		></textarea>
	 		</div>
			<div><br></br></div>
			<div className='note new'>
			 <textarea
			 	type='recipe'
	 			rows='9'
	 			cols='10'
	 			placeholder='Type to add recipe text...'
	 			value={noteText}
	 			onChange={handleChange}
	 		></textarea>
			<div className='note-footer'>
				<small>{date}</small>
				<button
					onClick={() => doubleIngredients()}
					className='doublebutton'
				><strong>Double</strong></button>
			<div className='note-footer'>
				<button
					onClick={() => halfIngredients()}
					className='halfbutton'
				><strong>Half</strong></button>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
			</div>
			</div>
		</div>
	);
};

export default Note;
