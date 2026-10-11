const { estNonVide, estEmailValide } = require('../utils/validators');

let users = [
  { id: 1, nom: 'wassim', email: 'wassim@gmail.com' },
  { id: 2, nom: 'Aya', email: 'aya@gmail.com' },
  { id: 3, nom: 'ali', email: 'ali@gmail.com' }
];

const getAllUsers = (req, res) => {
  const { nom } = req.query;  

  let resultat = users;
  if (nom) {                   
    resultat = users.filter(a => a.nom === nom);
  }
  res.json({users: resultat });
};

const getUserById = (req, res) => {
  const id = Number(req.params.id); // "2" -> 2
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: `User ${id} introuvable` });
  }
  res.json(user);
}

const createUser = (req, res) => {
  const { nom, email } = req.body; 
  
  if (!estNonVide(nom) || !estEmailValide(email)) {
    console.log("aaa");
    return res.status(400).json({ error: "Le nom est obligatoire et l'email est invalide" });
  }
  res.status(201).json({ message: "User created" });
};

const deleteUser = (req, res) => {
    const id = Number(req.params.id);
    const userExiste = users.some(u => u.id === id);


    if (!userExiste) {
        return res.status(404).json({
            error: `Impossible de supprimer : user ${id} introuvable`
        });
    }

    // On filtre pour ne garder que les users ayant un ID différent


    res.status(200).json({
        message: `User ${id} supprimé avec succès`
    });
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser
};