/*
* Project Name: Recipe App
* Authors: Luke Allevato, Bryce Greenleaf, Taylor Lee, Brooklynn Silva
* Last modified: December 5th, 2022
* Desc: An app for keeping track of food recipes with functions to adjust the serving size.
* To run, navigate to directory containing App.js. From a command line, npm install, then npm start.
*/


import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		
	]);

	const [searchText] = useState('');

//Darkmode setting
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

//Add note button
	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
	
//Delete button filters out recipe with id of the pressed delete button
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	
	//Main app structure, starting with the header and ending with the notelist.
	return (
		
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
