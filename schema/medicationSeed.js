// Lantus is long acting injectable insulin taken once a day
meds: [{
    name: "Lantus",
    type: {
        type: "injecatable insulin",
    },
    doses: [{
        date: {
            type: Date,
            default: Date.now
        },
        amount: "30 units"
    }]

}],
// Humolog is mealtime, short acting injected insulin
meds: [{
    name: "Humolog",
    type: {
        type: "injectable insulin",
    },
    doses: [{
        date: {
            type: Date,
            default: Date.now
        },
        amount: "5 units"
    }]

}],

// Glucofage is an oral tablet that helps the body use insulin for T2 Diabetics
meds: [{
    name: "Glucofage",
    type: {
        type: "oral medication",
    },
    doses: [{
        date: {
            type: Date,
            default: Date.now
        },
        amount: "500mg"
    }]

}],

// Tanzeum increases B-cell growth and how much insulin your body uses. They decrease your appetite and how much glucagon your body uses. They also slow stomach emptying.
meds: [{
    name: "Tanzeum",
    type: {
        type: "injectable medication",
    },
    doses: [{
        date: {
            type: Date,
            default: Date.now
        },
        amount: "10 units"
    }]

}],

// Avandia works by decreasing glucose in your liver. They also help your fat cells use insulin better.
meds: [{
    name: "Avandia",
    type: {
        type: "oral medication",
    },
    doses: [{
        date: {
            type: Date,
            default: Date.now
        },
        amount: "2mg"
    }]

}],