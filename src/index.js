const PORT = process.env.PORT ?? 3000;

const express = require('express');

const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(cors())
    .use(routes)
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
});