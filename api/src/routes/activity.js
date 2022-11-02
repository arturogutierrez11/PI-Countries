const { Router } = require("express");

const { Country, Activity } = require("../db");
const router = Router();
 

router.post("/", async (req, res, next) => {
  const {
          name,
          difficulty,
          duration,
          season,
          countries
        }= req.body;
 
  try {
    let activity = await Activity.create({name,difficulty,duration,season ,countries,
    });
    await activity.setCountries(countries);

    let activityWithCountry = await Activity.findOne({
      where: { name: name },
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    res.json(activityWithCountry);
  } catch (error) {
    next(error);
  }
})

  
  





  router.get("/", async (req, res) => {
    try {
      const activities = await Activity.findAll({
        attributes: ["name", "difficulty", "duration", "season"],
        include: Country,
      });
     
      res.status(200).json(activities);
    } catch (error) {
      console.log(error);
    }
  });
  
  
 
  
  
  
module.exports = router
