import React from 'react';
//This is the header where you can change all of the text to the title of the webpage.
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Bryce Greenleaf Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
