import { Router } from 'express';
import { readdirSync } from 'fs';
import { logHttpMiddleware } from '../middlewares/log';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

// log middleware
router.use(logHttpMiddleware)

const cleanFileName = (fileName: string) => {
  const file = fileName.split('.').shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName != 'index') {
    import(`./${cleanName}`)
      .then((moduleRouter) => {
        console.log(`Se esta cargando la ruta... /${cleanName}`);
        router.use(`/${cleanName}`, moduleRouter.router);
        console.log(`Ruta: /${cleanName} ===> Carga completa.`);
      })
      .catch(err => console.error(`Error cargando la ruta: /${cleanName}, ${err}`));
  }
});

export { router };
