db.books.find(
    { status: 'MEAP'},
    { _id:1 , title:1, authors:1, status:1 })
    .limit(10)
    .skip(5);