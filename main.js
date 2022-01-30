const firstName = "Krystian";
const age = 20;
const road = "country road";

const volvo = {
  year: 2005,
  driving: (road) => {                                  // arrow function 
    console.log(`volvo is driving on the ${road} `)
  },
  horsePower: 136,
  color: "gray",
  engine: 2.0,
}


const heading = document.querySelector('.main-header--js');
console.log(heading);

function hello(firstName, age) {                                                  
  console.log(`Cześć nazwyam się ${firstName} i mam ${age} lat `);
}

hello(firstName, age);
volvo.driving(road);
console.log(volvo['year']);

const myProperty = 'color'; 


const showMeProperty = (myProperty) => {
  console.log (volvo[myProperty]);
}

showMeProperty('horsePower');