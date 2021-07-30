const uploaded = (req, res) => {
  console.log('req.file = ', req.file);
  const { filename } = req.file
  res.status(200).json({ message: `file uploaded as "${filename}"` });
}

module.exports = uploaded;