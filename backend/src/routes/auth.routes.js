import {Router} from 'express';
const router = Router()
import verifySignUp from '../middlewares/verifySinUp';

import * as authCltrl from '../controllers/auth.controller'



router.post('/signUp', authCltrl.SignUp )
router.post('/signin', authCltrl.Signin)


export default router;