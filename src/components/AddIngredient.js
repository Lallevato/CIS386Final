import { useState } from 'react';

const AddIngredient = ({ handleAddIngredient }) => {
	const [ingredientText, setIngredientText] = useState('');

	const handleIngredientChange = (event) => {
		setIngredientText(event.target.value);
	};

	const handleSaveClickIngredient = () => {
		if (ingredientText.trim().length > 0) {
			handleAddIngredient(ingredientText);
			setIngredientText('');
		}
	}
};

export default AddIngredient;