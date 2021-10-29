import React from "react";

const Card = ({dog}) => {
    return (
			<>
				<div className='main'>
					<div className='card'>
						<img src={dog.image} alt='dog' />
					</div>
					<div className='infocard'>
						<p>Breed: {dog.breed.name}</p>
                        { !dog.breed.origin ? "" : <p> Origin: {dog.breed.origin} </p> }
						<p>Weight in metric: {dog.breed.weight_metric}</p>
						<p>Height in metric: {dog.breed.weight_metric}</p>
                        { !dog.breed.breed_group ? "" : <p> Breed group: {dog.breed.breed_group} </p> }
                        { !dog.breed.bred_for ? "" : <p> Bred for: {dog.breed.bred_for} </p> }
						{ !dog.breed.temperament ? "" : <p> Temperament: {dog.breed.temperament} </p> }
						<p>Life span: {dog.breed.life_span}</p>
					</div>
				</div>
			</>
		);
}

export default Card;
