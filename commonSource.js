// Cette fonction effectue un prétraitement sur le message entrant
const preprocessingMiddleware = async (event, next) => {
  const { text } = event.payload; // Récupère le texte du message

  // Effectuez ici vos opérations de prétraitement, comme la détection de mots clés, etc.
  // Par exemple, vous pouvez vérifier si le message contient un mot clé spécifique
  if (text.includes('Acte de constitution de droit de superficie Notaire Société anonyme Eiffage Development Statuts Société de développement pour la région de Bruxelles-Capitale Signature Délégation de signature Réception Date Adresse Numéro entreprise Mission légale Procuration authentique Comparants Intérêts contradictoires Propriétaire foncier Résidence Vandergoten Conseil administration Numéro de TVA Directeur Siège social Taxe sur la valeur ajoutée Bureau des hypothèques Permis urbanisme Permis environnement Copropriété Syndic Charges Assemblée générale Règlement de copropriété')) {
    console.log('Acte de constitution de droit de superficie Notaire Société anonyme Eiffage Development Statuts Société de développement pour la région de Bruxelles-Capitale Signature Délégation de signature Réception Date Adresse Numéro entreprise Mission légale Procuration authentique Comparants Intérêts contradictoires Propriétaire foncier Résidence Vandergoten Conseil administration Numéro de TVA Directeur Siège social Taxe sur la valeur ajoutée Bureau des hypothèques Permis urbanisme Permis environnement Copropriété Syndic Charges Assemblée générale Règlement de copropriété"');
    // Effectuez ici les actions appropriées pour ce mot clé
  }

  // Passez au prochain middleware
  await next();
};

// Hook before_incoming_middleware
event.middleware.register('before_incoming_middleware', preprocessingMiddleware);

// Exportez la fonction du middleware de prétraitement
module.exports = preprocessingMiddleware;
