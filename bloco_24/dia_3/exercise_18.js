db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $inc: { power: -100 },
  },
);
