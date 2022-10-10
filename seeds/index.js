const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelper');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
})

const sample = array => array[Math.floor(Math.random() * array.length)];



const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '60be6eb92729e835e8ab0e63',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, magnam quam esse eius quo pariatur? Odio eos quibusdam quos, in placeat, veniam minus dolorum laboriosam debitis suscipit doloribus! Eos, cum.',
            price: price,
            geometry: {
                type: 'Point',
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/daa3jb89u/image/upload/v1623175139/YelpCamp/ahpsitwcwffaogsamgbg.jpg',
                    filename: 'YelpCamp/ahpsitwcwffaogsamgbg'
                },
                {
                    url: 'https://res.cloudinary.com/daa3jb89u/image/upload/v1623175141/YelpCamp/crmo4q9zd8xcy6d2urlj.jpg',
                    filename: 'YelpCamp/crmo4q9zd8xcy6d2urlj'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})