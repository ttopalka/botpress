const { NluManager } = require('node-nlp');
const nluManager = new NluManager();

// Ajoutez ici votre code de configuration du modèle Rasa NLU
// Par exemple, vous pouvez ajouter des intentions et des expressions régulières

// Exemple d'ajout d'une intention
nluManager.addDocument('fr', 'Bonjour', 'salutation');

// Exemple d'ajout d'une expression régulière
nluManager.addRegexEntity('fr', '([0-9]{4})', 'année', 'yyyy');

module.exports = async (event, next) => {
  const { text } = event.payload;
  const response = await nluManager.process('fr', text);
  const intent = response.intent;
  const entities = response.entities;

  // Utilisez les intentions et les entités extraites pour prendre des décisions dans votre bot
  // Par exemple, vous pouvez déclencher des actions en fonction de l'intention détectée

  event.state.intent = intent;

  await next();
};
