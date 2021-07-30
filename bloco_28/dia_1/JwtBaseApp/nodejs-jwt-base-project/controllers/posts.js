const mockPosts = [
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
  {
    title: 'título fake',
    content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
  },
];

module.exports = (req, res, next) => {
  console.log(req.user);
  res.status(200).json({ mockPosts });
};
