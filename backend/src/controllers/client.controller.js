import db from "../database";

const Client = db.client

export const createClient = (req, res) => {

    Client.create({
        TypeID: req.body.TypeID,
        NumId: req.body.NumId,
        name: req.body.name,
        city: req.body.city,
        adress: req.body.adress,
        cell: req.body.cell
    }).then (client => {
        res.send ("The Client was created with successfully")
       
    })
    .catch(err =>{
        res.status(500).send({message: err.message});
    })

}
export const getClient = (req, res) => {
    Client.findAll().then (client =>{
        res.json(client)
    }).catch((err) => {
        res.status(500).send({message: err.message});
    })
    
}

export const getClientById = (req, res) => {

    let num = req.params.id

    Client.findOne({
        where: {
            id : num
        }
    }).then(client =>{
        res.json(client)
    }).catch((err) => {
        res.status(500).send({message: err.message});
    })
    
}
export const updateClientById = (req, res) => {

    let num = req.params.id

    Client.update(
        {
            TypeID: 'CC'
        },
        {
             where: { id: num } 
            }
    ).then(count =>{
        res.json('Rows updated ' + count)
    }).catch((err) => {
        res.status(500).send({message: err.message});
    })

    
}
export const deleteClientById = (req, res) => {

    let num = req.params.id

    Client.destroy({
        where: {
          id: num
        }
    }).then(() => {
        res.json("Successfully deleted record.")
    }).catch((error) => {
        res.status(500).send({message: err.message});
    });
    
}