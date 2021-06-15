db.movies.updateOne(
  { "cast.character": "Coringa" },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Joaquin Phoenix", "Jack Nicholson"]
      }
    }
  }
);

db.movies.updateOne(
  { "cast.character": "Batman" },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton" , "Val Kilmer", "George Clooney"]
      }
    }
  }
);
