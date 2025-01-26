import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

/*getting the img and recipie of cocktail */
app.get("/", async (req, res) => {
  try {
    let result = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    console.log(result.data.drinks[0]);
    res.render("index.ejs", {
      drink: JSON.stringify(result.data.drinks[0]),
    }); /*JSON.parse(content).drinks[0] */
  } catch (error) {
    res.status(500).render("index.ejs");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
