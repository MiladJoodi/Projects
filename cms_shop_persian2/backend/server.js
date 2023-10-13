const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productsRouter = require('./routes/productsRoutes')
const commentsRouter = require('./routes/commentsRoutes')
const usersRouter = require('./routes/usersRoutes')
const ordersRouter = require('./routes/ordersRoutes')
const offsRouter = require('./routes/offsRoutes')
const adminsRouter = require('./routes/adminsRoutes')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productsRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/users', usersRouter)
app.use('/api/orders', ordersRouter)
app.use('/api/offs', offsRouter)
app.use('/api/admins', adminsRouter)

app.listen(8000, () => console.log('Server Run On 8000 Port'));
