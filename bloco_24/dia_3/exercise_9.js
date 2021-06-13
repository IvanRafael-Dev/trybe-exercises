db.movies.updateOne(
    { title: "Godzilla" },
    { 
      $set: { "category.1": "thriller"  },
      $max: { imdbRating: 8.5 }
     }
  );