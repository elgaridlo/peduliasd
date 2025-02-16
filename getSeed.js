const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Articles = require('./backend/models/articleModel')
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection Successfull'));

const importData = async () => {
    try {
        const dataArticle = await Articles.find().sort('-createdAt');
        const artics = dataArticle.map((item) => ({
            publish: item.publish,
            title: item.title,
            poster: item.poster,
            content: item.content,
            urlTitle: item.urlTitle
        }))

        await fs.writeFileSync('articles.json', JSON.stringify(artics), 'utf8',
            function (err) {
                if (err) throw err;
                console.log('complete');
            });

        console.log('data successfuly loaded!');
    } catch (err) {
        console.log('error read db = ', err);
    }
    // it use for aggresively to stop the app
    process.exit();
};

if (process.argv[2] === '--import') {
    importData();
}