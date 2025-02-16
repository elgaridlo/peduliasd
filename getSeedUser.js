const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Auths = require('./backend/models/authModel')
const Users = require('./backend/models/userModel')
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('DB Connection Successfull'));

const importData = async () => {
    try {
        // const dataAuth = await Auths.find();
        const dataUsers = await Users.find();
        const user = dataUsers.map((item) => {
            console.log(item)
            return {
                fullname: item.fullname,
                phone: item.phone,
                address: item.address
            }
        })
        // const artics = dataAuth.map((item) => ({
        //     role: item.role,
        //     email: item.email,
        //     active: 'active',
        //     password: item.email.substring(0,4) + `1234`
        // }))

        await fs.writeFileSync('users.json', JSON.stringify(user), 'utf8',
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