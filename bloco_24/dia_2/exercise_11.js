db.movies.updateOne(
  { "cast.character": "Batman" },
  {
    $push: {
      "cast.$.actor": "Christian Bale"
    }
  }
);

