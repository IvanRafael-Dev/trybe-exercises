db.xmen.updateMany(
  {
  $or: [
      { occupation: "Senior Staff", power: { $gt: 100 } },
      { occupation: "Junior Staff", power: { $gt: 200 } },
    ],
  },
  {
    $currentDate: { lastUpdate: { $type: "timestamp" } },
    $set: { areas: ["Students Room"] },
  },
);