const findTheOldest = function (people) {

    people.map(a =>{
        if(a.yearOfDeath==undefined){
            return a.name;
        }
    })
  people.sort((a, b) => {
    if(a.yearOfDeath!=undefined || b.yearOfDeath!=undefined){

        if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
            return -1;
        } else {
            return 1;
        }
    }
  });
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
