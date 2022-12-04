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

	//this is the doubling fucntion. When this works, triple is just a matter of copy and paste.
	const doubleIngredients = (setIngredientText) => {
		return setIngredientText.toString().replace(regex, regex * 2);
		//below is test to see if integers will be deleted
		//return ingredientText.toString().replace(regex, '');
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
				<button
					onClick={() => doubleIngredients()}
				>Double</button>
			</div>

			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
		</div>
	);
};

export default Note;
