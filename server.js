const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const connectDB = require('./backend/config/db')
const userRoute = require('./backend/routers/userRoutes')
const kidRoute = require('./backend/routers/kidRoutes')
const workshopRoute = require('./backend/routers/workshopRoutes')
const articleRoute = require('./backend/routers/articleRoutes')
const assesmentRoute = require('./backend/routers/assesmentRoute')
const productRoute = require('./backend/routers/productRoutes')
const uploadRoute = require('./backend/routers/uploadRoutes')
const educationprogramRoute = require('./backend/routers/educationProgramRoutes')
const errorHandler = require('./backend/controllers/errorController')
const appError = require('./backend/utils/appError')


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/kid', kidRoute)
app.use('/api/workshop', workshopRoute)
app.use('/api/article', articleRoute)
app.use('/api/assesment', assesmentRoute)
app.use('/api/educationprogram', educationprogramRoute)
app.use('/api/product', productRoute)
app.use('/api/upload', uploadRoute)

app.use('/uploads', express.static(path.join(process.cwd(), '/uploads')))
// const __dirname = path.resolve()
if(process.env.NODE_ENV ==='production') {
    app.use(express.static(path.join(process.cwd(), '/peduliasd/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(process.cwd(), 'peduliasd', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

app.all('*', (req, res, next) => {
    next(
        new appError(`Cannot find this url ${req.originalUrl} on this server!`, 404)
    );
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))