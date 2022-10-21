import {Router} from 'express';
const router = Router()

import * as DocumentClrtl from '../controllers/excel.controller'

router.get('/', DocumentClrtl.download )

export default router;