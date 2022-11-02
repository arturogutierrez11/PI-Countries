const axios = require("axios");
const { Country, Activity } = require("../db");
require('dotenv').config()



const prechargeCountries = async () => {
    try {
      let apiCountries = await axios.get("https://restcountries.com/v3/all");
  
      apiCountries = apiCountries.data.map((country) => {
        return {
          name: country.name.common,
          id: country.cca3,
          flags: country.flags[0],
          continents: country.continents[0],
          capital: country.capital ? country.capital[0] : " ",
          subregion: country.subregion,
          area: country.area,
          population: country.population,
          currencies: country.currencies.map((el) => {
              el.name 
          }
                 
          
           
          )
        };
      });
      await Country.bulkCreate(apiCountries); 
    } catch (error) {
      console.log(error);
    }
  };

  
  


  
  
  
  
  
  
  
  const getAll = async (name) => {
    const where = {};
    if (name) {
      where[name] = { [Op.iLike]: name };
    }
    let countries = await Country.findAll({
      where: where,
      include: {
        model: Activity,
        attributes: ["id","name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    if (!name && !countries.length) {
      await prechargeCountries();
      countries = await Country.findAll({
        where: where,
        include: {
          model: Activity,
          attributes: ["id","name", "difficulty", "duration", "season"],
          through: {
            attributes: [],
          },
        },
      });
    }
    return countries;
  };




module.exports ={
   
     getAll,

};