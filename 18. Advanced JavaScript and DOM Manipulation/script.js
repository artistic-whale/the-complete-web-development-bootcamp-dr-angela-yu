'use strict'

// ************ 140. A Deeper Understanding of JavaScript Objects ************
// One way of using an object in JavaScript
var houseKeeper1 = {
    name: "Cinderella",
    age: 25,
    yearsOfExperience: 5,
    hotelsWorkedAt: ["Buckingham Palace Hotel", "Royal Place Hotel"],
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
};

// Another way of using an object in JavaScript
// Through the usage of a <b>constructor</b>
function HouseKeeper(name, age, yearsOfExperience, hotelsWorkedAt, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.hotelsWorkedAt = hotelsWorkedAt;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    };
}

let houseKeeper2 = new HouseKeeper("Jane", 21, 1, ["Palace Park"], ["bedroom", "lobby desk"]);
let houseKeeper3 = new HouseKeeper("Rose", 30, 7, ["Royal Place Hotel"], ["bathroom, bedroom, lobby, staircase, elevator"]);
houseKeeper3.clean();