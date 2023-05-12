// Cette fonction effectue un prétraitement sur le message entrant
const preprocessingMiddleware = async (event, next) => {
  const { text } = event.payload; // Récupère le texte du message

  // Effectuez ici vos opérations de prétraitement, comme la détection de mots clés, etc.
  // Par exemple, vous pouvez vérifier si le message contient un mot clé spécifique
  if (text.includes('Acte de constitution de droit de superficie Notaire Société anonyme Eiffage Development Statuts Société de développement pour la région de Bruxelles-Capitale Signature Délégation de signature Réception Date Adresse Numéro entreprise Mission légale Procuration authentique Comparants Intérêts contradictoires Propriétaire foncier Résidence Vandergoten Conseil administration Numéro de TVA Directeur Siège social Taxe sur la valeur ajoutée Bureau des hypothèques Permis urbanisme Permis environnement Copropriété Syndic Charges Assemblée générale Règlement de copropriétéRègles relatives aux balcons et terrasses, Règles relatives aux parties communes spéciales, Règles relatives aux parties privatives spéciales, Règles relatives à la modification de la répartition des charges, Règles relatives à la modification de l'affectation des lots, Règles relatives à la cession de parties communes, Règles relatives à la cession de parties privatives, Règles relatives à la location des parties communes, Règles relatives à la location des parties privatives, Règles relatives au droit de préemption, Règles relatives au droit de priorité, Règles relatives au droit de jouissance exclusive, Règles relatives au droit d'usage exclusif, Règles relatives aux servitudes réelles, Règles relatives aux servitudes personnelles, Procédure en cas d'impayés de charges, Procédure en cas d'impayés de travaux, Procédure en cas d'impayés de pénalités, Procédure en cas d'impayés de frais judiciaires, Procédure en cas d'impayés divers, Sanctions applicables en cas d'inobservation du règlement d'ordre intérieur, Répartition des charges entre les copropriétaires, Répartition des charges entre les lots privatifs et les parties communes, Répartition des charges entre les copropriétaires et le syndicat des copropriétaires, Répartition des charges entre les copropriétaires et les tiers, Répartition des charges entre les copropriétaires et les locataires, Répartition des charges entre les copropriétaires et les occupants à titre gratuit, Répartition des charges entre les copropriétaires et les occupants à titre onéreux, Répartition des charges entre les copropriétaires et les propriétaires successifs, Répartition des charges entre les copropriétaires et les usufruitiers, Répartition des charges entre les copropriétaires et les nu-propriétaires, Répartition des charges entre plusieurs syndicats de copropriété, Frais de chauffage et d'eau chaude, Frais d'ascenseur, Frais de nettoyage, Frais d'assurance, Frais de sécurité, Frais de jardinage, Frais de conciergerie, Frais de comptabilité, Frais juridiques, Honoraires du syndic, Contrat du syndic, Durée du contrat du syndic, Rémunération du syndic, Responsabilité civile professionnelle du syndic, Obligations légales du syndic, Pouvoirs et missions du syndic, Convocation à l'assemblée générale, Ordre du jour de l'assemblée générale, Procès-verbal de l'assemblée générale, Notification des décisions prises en assemblée générale, Comptes bancaires séparés pour les copropriétés, Comptabilité séparée pour les copropriétés, Compte bancaire séparé pour chaque copropriétaire, Copropriété à usage mixte, Copropriété commerciale, Copropriété résidentielle, Copropriété touristique, Copropriété industrielle, Copropriété agricole, Règlement d'ordre intérieur, Règles relatives aux animaux domestiques, Règles relatives au bruit et')) {
    console.log('Acte de constitution de droit de superficie Notaire Société anonyme Eiffage Development Statuts Société de développement pour la région de Bruxelles-Capitale Signature Délégation de signature Réception Date Adresse Numéro entreprise Mission légale Procuration authentique Comparants Intérêts contradictoires Propriétaire foncier Résidence Vandergoten Conseil administration Numéro de TVA Directeur Siège social Taxe sur la valeur ajoutée Bureau des hypothèques Permis urbanisme Permis environnement Copropriété Syndic Charges Assemblée générale Règlement de copropriété Règles relatives aux balcons et terrasses, Règles relatives aux parties communes spéciales, Règles relatives aux parties privatives spéciales, Règles relatives à la modification de la répartition des charges, Règles relatives à la modification de l'affectation des lots, Règles relatives à la cession de parties communes, Règles relatives à la cession de parties privatives, Règles relatives à la location des parties communes, Règles relatives à la location des parties privatives, Règles relatives au droit de préemption, Règles relatives au droit de priorité, Règles relatives au droit de jouissance exclusive, Règles relatives au droit d'usage exclusif, Règles relatives aux servitudes réelles, Règles relatives aux servitudes personnelles, Procédure en cas d'impayés de charges, Procédure en cas d'impayés de travaux, Procédure en cas d'impayés de pénalités, Procédure en cas d'impayés de frais judiciaires, Procédure en cas d'impayés divers, Sanctions applicables en cas d'inobservation du règlement d'ordre intérieur, Répartition des charges entre les copropriétaires, Répartition des charges entre les lots privatifs et les parties communes, Répartition des charges entre les copropriétaires et le syndicat des copropriétaires, Répartition des charges entre les copropriétaires et les tiers, Répartition des charges entre les copropriétaires et les locataires, Répartition des charges entre les copropriétaires et les occupants à titre gratuit, Répartition des charges entre les copropriétaires et les occupants à titre onéreux, Répartition des charges entre les copropriétaires et les propriétaires successifs, Répartition des charges entre les copropriétaires et les usufruitiers, Répartition des charges entre les copropriétaires et les nu-propriétaires, Répartition des charges entre plusieurs syndicats de copropriété, Frais de chauffage et d'eau chaude, Frais d'ascenseur, Frais de nettoyage, Frais d'assurance, Frais de sécurité, Frais de jardinage, Frais de conciergerie, Frais de comptabilité, Frais juridiques, Honoraires du syndic, Contrat du syndic, Durée du contrat du syndic, Rémunération du syndic, Responsabilité civile professionnelle du syndic, Obligations légales du syndic, Pouvoirs et missions du syndic, Convocation à l'assemblée générale, Ordre du jour de l'assemblée générale, Procès-verbal de l'assemblée générale, Notification des décisions prises en assemblée générale, Comptes bancaires séparés pour les copropriétés, Comptabilité séparée pour les copropriétés, Compte bancaire séparé pour chaque copropriétaire, Copropriété à usage mixte, Copropriété commerciale, Copropriété résidentielle, Copropriété touristique, Copropriété industrielle, Copropriété agricole, Règlement d'ordre intérieur, Règles relatives aux animaux domestiques, Règles relatives au bruit et"');
    // Effectuez ici les actions appropriées pour ce mot clé
  }

  // Passez au prochain middleware
  await next();
};

// Hook before_incoming_middleware
event.middleware.register('before_incoming_middleware', preprocessingMiddleware);

// Exportez la fonction du middleware de prétraitement
module.exports = preprocessingMiddleware;
