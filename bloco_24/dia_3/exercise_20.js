db.xmen.updateMany(
  { areas: { $exists: false }, occupation: "Junior Staff" },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Outside"] },
  },
);