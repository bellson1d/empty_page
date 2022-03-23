export default function handler(req, res) {
  res.status(200).json({
    content:
      Array(10).fill(1).map((v, i) =>
        ({ title: 'title-' + i, content: 'blabla'.repeat(100) }))
  })
}
