import * as dotenv from 'dotenv';
import express from 'express';
import router from './router';

dotenv.config();

const app = express();
router(app);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Express server app listening on port ${port}!`);
});
