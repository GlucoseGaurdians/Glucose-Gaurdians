let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/blood_sugar", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let bloodSugarSeed = [
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 9),
                glucose: 120,
                comment: "After Dinner test"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 8),
                glucose: 75,
                comment: "Feeling light headed"

            }
        ]
    },
    
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 7),
                glucose: 155,
                comment: "After breakfast test"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 6),
                glucose: 200,
                comment: "Had a big lunch, going to take insulin"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 5),
                glucose: 100,
                comment: "First test of the day"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 4),
                glucose: 210,
                comment: "Last test before bed"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 3),
                glucose: 90,
                comment: "Before lunch test"

            }
        ]
    },
    {
        test: [
            {
                day: new Date().setDate(new Date().getDate() - 2),
                glucose: 135,
                comment: "Had a snack, took insulin"

            }
        ]
    }
];

db.BloodSugar.deleteMany({})
    .then(() => db.BloodSugar.collection.insertMany(bloodSugarSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
