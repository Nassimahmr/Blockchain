const fs = require('fs');

module.exports = async function (deployer, network, accounts) {
    // 1. Déploiement des contrats simples (exercices 1 à 6)
    await deployer.deploy(artifacts.require("./Exercice1.sol:Addition"));
    await deployer.deploy(artifacts.require("./Exercice2.sol:Conversion"));
    await deployer.deploy(artifacts.require("./Exercice3.sol:GestionChaines"));
    await deployer.deploy(artifacts.require("./Exercice4.sol:Positif"));
    await deployer.deploy(artifacts.require("./Exercice5.sol:Parite"));
    await deployer.deploy(artifacts.require("./Exercice6.sol:GestionTableau"));

    // 2. Déploiement des contrats avec paramètres (exercices 7 et 8)
    await deployer.deploy(
        artifacts.require("./Exercice7.sol:Rectangle"),
        10, 20, 30, 40 // x, y, longueur, largeur
    );

    await deployer.deploy(
        artifacts.require("./Exercice8.sol:Payment"),
        accounts[0] // Prend automatiquement le 1er compte Ganache
    );

    // 3. Optionnel : Export des adresses dans un fichier JSON
    const addresses = {
        Addition: (await artifacts.require("./Exercice1.sol:Addition").deployed()).address,
        Payment: (await artifacts.require("./Exercice8.sol:Payment").deployed()).address
        // Ajouter d'autres contrats si besoin...
    };
    fs.writeFileSync('./client/src/contracts/addresses.json', JSON.stringify(addresses, null, 2));
};