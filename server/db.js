const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/fooodieee';

const mongoDB = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
        const db = mongoose.connection.db;
        const fetch_data = db.collection('food_item');
        fetch_data.find({}).toArray(function (err, data) {
            const foodCategory = mongoose.connection.db.collection('Categories');
            foodCategory.find({}).toArray(function (err, catData) {
                if (err) console.log(err);
                else {
                    global.foodItem = data;
                    global.foodCategory = catData
                
                }
            })
            // if (err) console.log(err);
            // else {
            //     global.Menu = data;
                
            // }
        });
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoDB;
