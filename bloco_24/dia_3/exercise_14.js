db.xmen.updateMany(
    { class: "unknown" },
    {
      $currentDate: { lastUpdate: { $type: "timestamp" } },
      $unset: { class: "" },
    },
  );