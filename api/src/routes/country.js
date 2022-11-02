const { Router } = require("express");
const { getAll}= require("../Controllers/index")
const { Country, Activity } = require("../db");
const router = Router();






router.get("/", async (req, res) => {
    const {name} = req.query;
    const countriesTotal = await getAll();
    if (name) {
      try{
      const countriesName = await countriesTotal.filter((el) =>
        el.name.toLowerCase() === (name.toLowerCase())
      );
      countriesName.length
        ? res.status(200).send(countriesName)
        : res.status(404).send("No se encontro el pais");
      }catch(error){
      
      res.status(404).send("No se encontro el pais");
      }     
    } else {
      try{
      
      res.status(200).send(countriesTotal);
      }catch(error){
      
      res.status(404).send("No se encontro el pais");
    }
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const allId = await getAll();
    const countryId = allId.find(
      (el) => el.id.toUpperCase() === id.toUpperCase()
    );
    countryId
      ? res.status(200).json(countryId)
      : res.status(404).send("No se encontro el pais");
  } catch (error) {
    res.send(error);
  }
});













module.exports = router