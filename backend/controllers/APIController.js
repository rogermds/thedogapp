const axios = require("axios");
const { Breeds } = require("../models");

const APIController = {
	getAPI: async (req, res) => {axios.get("https://api.thedogapi.com/v1/breeds?api_key=ab4848c2-0c76-46f0-965e-5faf35377084")
        .then(async (response) => {
            for (i=0; i < response.data.length; i++) {
                await Breeds.create({
                    weight_metric: response.data[i].weight.metric,
                    height_metric: response.data[i].height.metric,
                    name: response.data[i].name,
                    bred_for: response.data[i].bred_for,
                    breed_group: response.data[i].breed_group,
                    life_span: response.data[i].life_span,
                    temperament: response.data[i].temperament,
                    origin: response.data[i].origin,
                    image_url: response.data[i].image.url,
                });
            }
            res.send("API consumida!")
                }).catch(
                    res.send("Verifique o Banco para confirmar se a API foi consumida")
            )
        },
    showAPI: async (req, res) => {
        let breedList = await Breeds.findAll();
        res.send(breedList)
    }  
};

module.exports = APIController;
