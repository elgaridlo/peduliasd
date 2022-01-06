const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const connectDB = require('./config/db')
const userRoute = require('./routers/userRoutes')
const kidRoute = require('./routers/kidRoutes')
const workshopRoute = require('./routers/workshopRoutes')
const articleRoute = require('./routers/articleRoutes')
const uploadRoute = require('./routers/uploadRoutes')
const educationprogramRoute = require('./routers/educationProgramRoutes')
const errorHandler = require('./controllers/errorController')
const appError = require('./utils/appError')


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoute)
app.use('/api/kid', kidRoute)
app.use('/api/workshop', workshopRoute)
app.use('/api/article', articleRoute)
app.use('/api/educationprogram', educationprogramRoute)
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

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))