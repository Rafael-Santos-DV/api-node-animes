import App from '../app';

App.listen(process.env.PORT || 3333, () => console.log(`rodando na porta ${process.env.PORT || 3333}`));
