// Cette fonction effectue un prétraitement sur le message entrant
const preprocessingMiddleware = async (event, next) => {
  const { text } = event.payload; // Récupère le texte du message

  // Effectuez ici vos opérations de prétraitement sur le texte du message
  // Par exemple, vous pouvez normaliser le texte, supprimer les balises HTML, convertir en minuscules, etc.

  // Passez au prochain middleware
  await next();
};

// Exportez la fonction du middleware de prétraitement
module.exports = preprocessingMiddleware;
