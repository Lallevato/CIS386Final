import React from 'react';

//This is the header where you can change all of the text to the title of the webpage. Also includes darkmode toggle.
const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>My Recipes</h1>
			<button
				type="toggle"
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
