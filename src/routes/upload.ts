import { Router } from 'express';
import { getFile } from '../controllers/upload';
import multerMiddleware from '../middlewares/file';

const router = Router();

router.post('/', multerMiddleware.single('myfile'), getFile);

export { router };
