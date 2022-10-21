import app from './app'
import db from './database';
import authJwt from './middlewares/authjwt'
import verifySignUp from './middlewares/verifySinUp';

const Role = db.role;

db.sequelize.sync();

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

module.exports = {
  authJwt,
  verifySignUp
}

app.listen(4000)
console.log ('Server listen on port', 4000)