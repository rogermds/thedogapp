const getDog = async (breedId) => {

    

    const url = "http://localhost:8000/showAPI";
    const res = await fetch(url);
    const data = await res.json();
    
    const dog = {
			image: data[breedId].image_url,
			breed: {
				id: data[breedId].id,
				name: data[breedId].name,
				origin: data[breedId].origin,
				weight_metric: data[breedId].weight_metric,
				height_metric: data[breedId].height_metric,
				breed_group: data[breedId].breed_group,
				bred_for: data[breedId].bred_for,
				temperament: data[breedId].temperament,
				life_span: data[breedId].life_span,
			},
		};
    return dog
}

export default getDog;