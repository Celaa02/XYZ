import {Router} from 'express';
const router = Router()
import authJwt from '../middlewares/authjwt';

import * as userCltrl from '../controllers/user.controller'

router.get('/', userCltrl.getUser )
router.get('/:userId', [authJwt.isAdmin, authJwt.isModerator], userCltrl.getUserById )
router.post('/', [authJwt.isAdmin, authJwt.isModerator], userCltrl.createUser )
router.put('/:userId', [authJwt.isAdmin], userCltrl.updateUserById )
router.delete('/:userId',  [authJwt.isAdmin], userCltrl.deleteUserById)

export default router;