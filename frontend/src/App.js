import React, { useState, useEffect } from "react";
import Select from "./components/Select";
import Card from "./components/Card";
import getDog from "./helpers/getDog";

const initialDog = {
	image: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
	breed: {
		id: 1,
		name: "Affenpinscher",
	},
};

function App() {
	const [dog, setDog] = useState(initialDog);

	useEffect(() => {
		updateDog(0);
	}, []);

	const updateDog = (breedId) => {
		getDog(breedId).then((newDog) => {
			setDog(newDog);
		});
	};

	return (
		<div className='App'>
			<Select updateDog={updateDog} />
			<Card dog={dog} />
		</div>
	);
}

export default App;
