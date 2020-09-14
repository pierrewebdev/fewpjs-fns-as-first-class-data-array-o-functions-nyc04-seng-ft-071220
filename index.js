function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
    console.log(`leash ${dogName} the ${dogBreed}`);
    return`leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
    return `Walk ${dogName} the ${dogBreed}to the park`;
}


function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw a Frisbee to ${dogName} the ${dogBreed}`);
    return `Throw a Frisbee to ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
    console.log(`unleash ${dogName} the ${dogBreed}`);
    return `unleash ${dogName} the ${dogBreed}`;
}

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName,dogBreed){
    routine.forEach(fn => fn(dogName,dogBreed));
}



