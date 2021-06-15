db.movies.updateOne(
  { 
    $and: [
      {
      title: "Home Alone"
      },
      {
        "cast.actor": "Daniel Stern"
      }
    ]
  },
  {
    $set: { "cast.$.character": "Marv" }
  }
);