const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

const encouragement = [
  {
    "id": 1,
    "name": "Laura",
    "message": "You can do this!"
  },
  {
    "id": 2,
    "name": "Juno",
    "message": "Bark bark!"
  },
  {
    "id": 3,
    "name": "Laura",
    "message": "Don't forget to breath"
  }
]
// let id = 4;

const badThoughts = [
  {
    "id": 1,
    "message": "Get out while you can"
  },
  {
    "id": 2,
    "message": "This was a bad idea"
  },
  {
    "id": 3,
    "message": "I never do anything right"
  }
];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/compliment/", (req, res) => {
  const fortunes = ["A lifetime of happiness lies ahead of you.",
      "A smile is your personal welcome mat.",
      "Adventure can be real happiness.",
      "Believe in yourself and others will too.",
      "Everyday in your life is a special occasion."
  ];

  let randomInd = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomInd];

  res.status(200).send(console.log(randomFortune));
  
});

app.post("/api/compliment", (req, res) => {
  const { name, message } = req.body;
  let newMessage = {
    id,
    name,
    message
  }
    
  encouragement.push(newMessage)
  res.status(200).send(encouragement)
  id++
});

app.delete("/api/compliment/:id", (req, res) => {

  const { id } = req.params;

  const tgtIndex = badThoughts.findIndex(function(badThoughtsObj) {
    return badThoughtsObj.id === parseInt(id);
  })
  if (tgtIndex === -1) {
    res.status(404).send('No bad thoughts here!')
  } else {
    badThoughts.splice(tgtIndex, 1);
    res.status(200).send(badThoughts);
  }

})

app.listen(4000, () => console.log("Server running on 4000"));
