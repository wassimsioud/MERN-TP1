const express = require('express'); // 1. charger la biblioth èque Express
const app = express(); // 2. créer l’ application : c’est notre serveur
const PORT = 3000;
app.use(express.json());
// 3. une route : quand un client demande GET / , Express exé cute cette fonction
const articleRoutes = require('./routes/articleRoutes');
const userRoutes = require('./routes/userRoutes');


app.use('/api/articles', articleRoutes);
app.use('/api/users', userRoutes);


app.get('/', (req, res) => {
  res.json({ message: " Bonjour , je suis l'API du blog " });
});


app.listen(PORT, () => {
  console.log(`Serveur disponible sur http://localhost:${PORT}`);
});