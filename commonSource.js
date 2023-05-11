// Cette fonction effectue un prétraitement sur le message entrant
const preprocessingMiddleware = async (event, next) => {
  const { text } = event.payload; // Récupère le texte du message

  // Effectuez ici vos opérations de prétraitement, comme la détection de mots clés, etc.
  // Par exemple, vous pouvez vérifier si le message contient un mot clé spécifique
  if (text.includes('bonjour')) {
    console.log('Le message contient le mot-clé "bonjour"');
    // Effectuez ici les actions appropriées pour ce mot clé
  }

  // Passez au prochain middleware
  await next();
};

// Hook before_incoming_middleware
event.middleware.register('before_incoming_middleware', preprocessingMiddleware);

// Exportez la fonction du middleware de prétraitement
module.exports = preprocessingMiddleware;
