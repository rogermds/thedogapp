import React, { useState, useEffect } from "react";
import getBreeds from "../helpers/getBreeds";

const initialBreeds = [
	{
		id: 1,
		name: "Boxer",
	},
	{
		id: 2,
		name: "Husky",
	},
	{
		id: 3,
		name: "Pintscher",
	},
];

const Select = ({ updateDog }) => {
	const [breeds, setBreeds] = useState(initialBreeds);

	useEffect(() => {
		updateBreeds();
	}, []);

	const updateBreeds = () => {
		getBreeds()
			.then((newBreeds) => {
				setBreeds(newBreeds);
			})
			.catch(console.log("Erro updateBreed"));
	};

	return (
		<>
		<h1>THE DOG APP</h1>
		<label>Select a breed:</label>
		<select onChange={(e) => updateDog(e.target.value - 1)}>
			
			{breeds.map((breed) => (
				<option value={breed.id}>{breed.name}</option>
			))}
		</select>
		</>
	);
};

export default Select;
