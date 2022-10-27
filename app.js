import { listUTCTime } from "./util/listUTCTime.js";
import express from 'express';

const app = express();
app.get("/", (_, res) => {
    res.send(listUTCTime());
});

const port = 3001;
app.listen(port, () => {
    console.log(`Express listening at http://0.0.0.0:${port}`);
});