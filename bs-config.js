module.exports = {
  files: ["*.html", "*.mjml"], // Les fichiers à surveiller pour le rechargement
  server: {
    baseDir: "./", // Répertoire racine de votre projet
  },
  open: true, // Désactive l'ouverture automatique du navigateur
  port: 3000, // Port sur lequel BrowserSync écoutera
};
