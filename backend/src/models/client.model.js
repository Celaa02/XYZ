module.exports = (sequelize, Sequelize) => {
    const client = sequelize.define("client", {
      TypeID: {
        type: Sequelize.STRING
      },
      NumId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },

      adress: {
        type: Sequelize.STRING
      },
      cell:{
        type: Sequelize.STRING

      }
    });
  
    return client;
  };