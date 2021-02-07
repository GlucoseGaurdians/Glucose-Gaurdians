
db.collection('bloodsugar').aggregate
    // db.bloodsugar.aggregate
    ([
        {
            totalTests: { $sum: "$tests" };
            totalBloodSugar: {$sum: "$bloodSugar"};
            $addFields: {
                avgBloodSugar: { $divide: totalBloodSugar, totalTests },
            }
        }

    ]).then((dbbloodsugars) => { res.json(dbbloodsugars); })
        .catch((err) => { res.json(err); });