import db from "../database";

const Roles = db.ROLES;
const User = db.user;


const DuplicateUserOrEmail = (req, rest, next) => {
    //VerifyUser
    User.findOne(
        {
            where:{
                username: req.body.username
            }
        }
    ).then(user => {
        if(user){
            rest.status(400).send({
                message: "Failed! Username is already in use!"
            })
            return;
        }
        //VerifyEmail
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if(user){
                rest.status(400).send({
                    message: "Failed!! Email is already in used!"
                })
                return;
            }

            next();
        });
    });
};

const VerifyRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for (let i = 0; i< req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                res.status(400).send({
                    message: "Failed! Roles does not exist = " + req.body.roles[i]
                })
                return;
            }
        }
    }

    next();
}


const verifySignUp = {
    checkDuplicateUsernameOrEmail: DuplicateUserOrEmail,
    checkRolesExisted: VerifyRolesExisted
  };

  export default verifySignUp;