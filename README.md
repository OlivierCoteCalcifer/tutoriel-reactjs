# tutoriel-reactjs
Démarrer un projet reactjs

## pré-requis
- Avoir nodeJs et npm d'installé et d'accessible dans le path.

## Créer le projet
- Créer un dépôt sur github et cloner le localement
- Dans le répertoire git exécuté la commande `npx create-react-app .`
- Supprimer les éléments inutiles: logo.svg App.test.js 
- Vider le contenu des fichiers App.css App.js index.css

### Cloner un projet déjà existant
- Cloner le dépôt git localement
- `npm install` pour réinstaller les dépendances

## Configurer eslint
- Eslint est déjà installé avec create-react-app il suffit d'ajouter la configuration de Google.
- npm install eslint-config-google --save-dev
- Dans le fichier package.json section eslintConfig/extends, ajouter "google"
  ```
  "eslintConfig": {
      "extends": [
        "react-app",
        "google",
        "react-app/jest"
      ]
    },
  ```
- Pour ajouter le autofix on save.  Créer le fichier .vscode/settings.json
- Ajouter le contenu suivant dans le fichier settings.json.
```
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
  }
```
