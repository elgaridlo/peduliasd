const fs = require('fs');
const mongoose = require('mongoose');
const { promisify } = require('util');

const Articles = require('../backend/models/articleModel');
const environment = require('../environtment');

const unlinkAsync = promisify(fs.unlink)

mongoose.connect(environment.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection Successfull'));


const deleteUploadArticles = async () => {
    try {
        const articles = await fs.readdirSync('./uploads/article')

        const articlesDB = await (await Articles.find().select('poster -_id')).flatMap((item) => item.poster.split('/')[3])

        const results = articles.map((item) => {
            return !articlesDB.includes(item) ? item : null
        }).filter((item) => item)

        console.log('results:', results)
        // await Promise.all(results.map(async(shouldDelete) => {
        //     try {
        //         if(fs.existsSync(`./uploads/article/${shouldDelete}`)) {
        //             console.log('ada kah ? ', shouldDelete)
        //             fs.unlink(`./uploads/article/${shouldDelete}`.substring(0, `./uploads/article/${shouldDelete}`.length),
        //             )
        //             console.log(`berhasil menghapus file ${shouldDelete}`)
        //         }
        //     } catch (error) {
        //         console.log('gagal delete')
        //     }

        // }))

    } catch (error) {
        console.log('error read db = ', error);
    }
    process.exit();
}

if (process.argv[2] === '--article') {
    deleteUploadArticles();
}