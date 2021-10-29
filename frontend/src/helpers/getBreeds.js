const getBreeds = async () => {
    const url = "http://localhost:8000/showAPI";
    const res = await fetch(url);
    const breeds = await res.json();

    return breeds

}

export default getBreeds