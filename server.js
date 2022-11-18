import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`Server executando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
