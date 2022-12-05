import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([

	]);

	const [searchText, setSearchText] = useState('');

//Just a darkmode setting
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

//This is the add note button that gets the date and everything
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
	
//This is the code to delete the notes
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};


	//This code down below does a couple of things. First we have the darkmode toggle
	//after that we have the search bar to find specific notes
	//Also we have the add notes and the delete notes
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
