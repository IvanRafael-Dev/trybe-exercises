db.xmen.updateMany(
  {
    class: "gama"
  },
  {
    $currentDate: {
      lastUpdate: {
        $type: "timestamp"
      }
    },
    $min: {
      power: 300
    }
  }
);