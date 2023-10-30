# Tutoriel ReactJS
Démarrer un projet ReactJS

## Prérequis
- Avoir Node.js et npm installés et accessibles dans le PATH.

## Créer le projet
- Créer un dépôt sur GitHub et le cloner localement
- Dans le répertoire Git, exécutez la commande `npx create-react-app .`
- Supprimez les éléments inutiles : `logo.svg`, `App.test.js`
- Videz le contenu des fichiers `App.css`, `App.js`, `index.css`

### Cloner un projet déjà existant
- Clonez le dépôt Git localement
- Exécutez `npm install` pour réinstaller les dépendances

## Configurer ESLint
- ESLint est déjà installé avec create-react-app, il suffit d'ajouter la configuration de Google
- Exécutez `npm install eslint-config-google --save-dev`
- Dans le fichier `package.json`, sous la section `eslintConfig/extends`, ajoutez "google"
  ```json
  "eslintConfig": {
      "extends": [
        "react-app",
        "google",
        "react-app/jest"
      ]
    }
```
- Pour ajouter l'autofix on save, créez le fichier `.vscode/settings.json`
- Ajoutez le contenu suivant dans le fichier `settings.json`
```
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
  }
```
