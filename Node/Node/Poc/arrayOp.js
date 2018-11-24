// What you have
var officers = [
    { id: 20, name: "Captain Piett" },
    { id: 24, name: "General Veers" },
    { id: 56, name: "Admiral Ozzel" },
    { id: 88, name: "Commander Jerjerrod" }
];

const officersIds = officers.map(officer => officer.id);

console.log(
    `%c${JSON.stringify(officersIds)}`,
    "color: green; background: yellow: font-size: 30px"
);

var pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22
    }
];

const totalYears = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log(totalYears);

const mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
console.log(mostExpPilot);


var personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

const totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);

console.log(totalJediScore);