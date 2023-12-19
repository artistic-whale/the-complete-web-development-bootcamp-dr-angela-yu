function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

function lifeInWeeks(age) {
    const maximumAge = 90;
    const maximumAgeInDays = 90 * 365;
    const maximumAgeInweeks = 90 * 52;
    const maximumAgeInMonths = 90 * 12;

    let lifeInDays = maximumAgeInDays - (age * 365);
    let lifeInWeeks = maximumAgeInweeks - (age * 52);
    let lifeInMonths = maximumAgeInMonths - (age * 12);

    console.log("You have " + lifeInDays + " days, " + lifeInWeeks + " weeks, and " + lifeInMonths + " months left.")
}

lifeInWeeks(23);