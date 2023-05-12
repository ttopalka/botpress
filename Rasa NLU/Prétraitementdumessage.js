const { exec } = require('child_process');

const installDependencies = () => {
  exec('pip install -r requirements.txt', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de l'installation des dépendances : ${error.message}`);
      return;
    }
    console.log('Dépendances installées avec succès');
  });
};

const trainRasaNLU = () => {
  exec('rasa train nlu', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de l'entraînement du modèle Rasa NLU : ${error.message}`);
      return;
    }
    console.log('Modèle Rasa NLU entraîné avec succès');
  });
};

// Hook after_incoming_message
event.middleware.register('after_incoming_message', () => {
  installDependencies();
  trainRasaNLU();
});
