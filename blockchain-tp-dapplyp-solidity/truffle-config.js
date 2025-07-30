module.exports = {
    contracts_build_directory: "./client/src/contracts",
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,   // Port par défaut de Ganache
            network_id: "*"
        }
    },
    compilers: {
        solc: {
            version: "0.8.0",  // Doit matcher vos contrats
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200
                }
            }
        }
    }
};