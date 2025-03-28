const express = require("express");
const cors = require("cors");
const app = express();
let unicorns = require("./data.js");

app.use(cors());

app.use(express.static("public"));
app.use(express.json());

app.get("/unicorns", (req, res) => {
 const { name, loves, gender} = req.query;
 const weight = req.query.weight ? parseFloat(req.query.weight) : null;
 const vampires = req.query.vampires ? parseInt(req.query.vampires) : null;

  const vaccinated = req.query.vaccinated === "true";
  const vampiresExist = req.query.vampiresExist === "true";
  let result = unicorns;
  if (name) {
    result = result.filter((aUnicorn) => aUnicorn.name === name);
  }
  if (loves) {
    result = result.filter(
      (aUnicorn) => aUnicorn.loves && aUnicorn.loves.includes(loves)
    );
  }
  if (weight !== null && !isNaN(weight)) {
    result = result.filter((aUnicorn) => aUnicorn.weight > weight);
  }
  result = result.filter((aUnicorn) => aUnicorn.gender === gender);
  if (vampires !== null && !isNaN(vampires)) {
    result = result.filter((aUnicorn) => aUnicorn.vampires > vampires);
  }
  result = result.filter((aUnicorn) => aUnicorn.vaccinated === vaccinated);
  result = result.filter((aUnicorn) =>
    vampiresExist
      ? aUnicorn.vampires !== undefined
      : aUnicorn.vampires === undefined
  );
  res.json(result);
});

app.use(express.json());
app.post("/unicorns", async (req, res) => {
  try {
    const { name, dob, loves, weight, gender, vaccinated } = req.body;
    const newUnicorn = { name, dob, loves, weight, gender, vaccinated };
    unicorns.push(newUnicorn);
    res.send(`${newUnicorn} was succcesfully added to unicorns.`);
  } catch (error) {
    console.log("Error: ", error);
  }
});

app.put("/unicorns/:name", async (req, res) => {
  let unicornFound = false;
  unicornName = req.params.name;
  const { name, dob, loves, weight, gender, vampires, vaccinated } = req.body;
  unicorns = unicorns.map((aUnicorn) => {
    if (aUnicorn.name === unicornName) {
      unicornFound = true;
      const updatedUnicorn = { ...aUnicorn };
      if (name !== undefined) updatedUnicorn.name = name;
      if (dob !== undefined) updatedUnicorn.dob = dob;
      if (loves !== undefined) updatedUnicorn.loves = loves;
      if (weight !== undefined) updatedUnicorn.weight = weight;
      if (gender !== undefined) updatedUnicorn.gender = gender;
      if (vampires !== undefined) updatedUnicorn.vampires = vampires;

      if (vaccinated !== undefined) updatedUnicorn.vaccinated = vaccinated;

      return updatedUnicorn;
    }
    return aUnicorn;
  });

  if (!unicornFound) {
    return res.status(400).json({ error: "Unicorn not found!" });
  }
  console.log(unicorns);
  res.send(`${unicornName} was succcesfully updated`);
});

app.delete("/unicorns/:name", (req, res) => {
  const unicornName = req.params.name;
  const initialLength = unicorns.length;

  unicorns = unicorns.filter((aUnicorn) => aUnicorn.name !== unicornName);

  if (unicorns.length === initialLength) {
    return res.status(404).json({ error: "Unicorn not found" });
  }

  res.send(`${unicornName} was successfully deleted.`);
});

app.listen(8000, () => {
  console.log("Server is running on port 3344");
});
