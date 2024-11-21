// index.js
import express from 'express';
import cors from 'cors';
import router from './sangbog/router.js';

const app = express();
const PORT = 2705;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
