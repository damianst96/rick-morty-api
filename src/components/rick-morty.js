import { useEffect, useState } from 'react';
/* import axios from 'axios'; */

function RickMorty(){
	const [characters, setCharacters] = useState([]);
	
	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then(response => {
				return response.json();
			})
			.then(data => {
				setCharacters(data.results);
			})
	}, []);
	
	console.log(characters);
	
	return (
		<div>
			<h3>Personajes Rick & Morty</h3>
			{characters.map((name) => {
				return <div>
					<p>{name.id}</p>
					<li>{name.name}</li>
					<li>{name.status}</li>
					
				</div>
				
			})}
		
		</div>
	)
}

export default RickMorty;
