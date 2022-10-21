import {Router} from 'express';
const router = Router()
import authjt from '../middlewares/authjwt'

import * as ClientCtrl from '../controllers/client.controller'


router.get('/', ClientCtrl.getClient )
router.get('/:id', ClientCtrl.getClientById )
router.post('/', ClientCtrl.createClient )
router.put('/:id', ClientCtrl.updateClientById )
router.delete('/:id', ClientCtrl.deleteClientById)

export default router;