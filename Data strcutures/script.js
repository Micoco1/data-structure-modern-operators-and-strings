'use strict';

// Data needed for a later exercise
//const flights =
  //'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and 
//       ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   }, 

  
  
// };

/*
// Logical Assignment Operator ////////////////////////
const rest1 = {
  name : 'Capri',
  // numGuest : 20,
  numGuest : 0,
}

const rest2 = {
  name : 'La Piazza',
  owner: "Giovanni Rossi",
}

//OR assignment operatoro

// rest2.numGuest = rest2.numGuest || 10
// rest1.numGuest = rest1.numGuest || 10
// rest1.numGuest ||= 10
// rest2.numGuest ||= 10


//nullish assignment operator (null or undefined)
rest1.numGuest ??= 10
rest2.numGuest ??= 10


//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>' ;
// rest2.owner = rest2.owner && '<ANONYMOUS>' ;
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/


/*
//The Nullish Coalescing Operator (??) ////////////////////////////

restaurant.numGuests = 0;  
const guest = restaurant.numGuests || 10
console.log(guest);

//Nullish : null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/


/*
// Short cicuiting (&& and ||) ////////////////////////////////////
console.log('----- OR -----');
// Use ANY data typpe, Reutnr Any data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonax');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || 'Hello' || 23 || null);


//restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guest1);

const guest2 = restaurant.numGuests || 20
console.log(guest2);

console.log('----- AND -----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

//Practical example
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}


restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');
*/
/*
//Spread Operator///////////////////////////////////////////////

// 1. Destructuring ///////////////////////////////////////////////
//Spread, Because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]

// REST,  because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [x, , y, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(x, y, otherFood);

//Objects

const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays);

// 2. Functions ////////////////////////////////////////////////////
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const z = [23, 5, 7];
add(...z);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/
/*
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// Spread Operator (...) /////////////////////////////////////////////
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join 2 Arrays or more

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//Iterable: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 's.' ];
console.log(letters);
console.log(...str);


//Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?")
];
console.log(ingredients);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {foundedIn: 1998, ...restaurant,
  founder: 'Guiseppe'};
  console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours, 
  categories: tags } = restaurant;
console.log(restaurant, hours, tags);

//Default values
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating a variable
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c:14};
({a, b} = obj);
console.log(a, b);

//Nested Objects
const {fri: {open: o, close: c} } = openingHours;
console.log(o, c);






/*
/////////////////////////////////////////////////////////////
const arr = [2, 3 ,4]; 
const a = arr[0]; 
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; 
console.log (x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
 console.log(starter, mainCourse);

 //Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] =  nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p,q,r);
*/
/*
// Looping Arrays : The for-of Loop ////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menu);
for (const item of menu) console.log(item);

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

for(const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

//console.log([...menu.entries()]);
*/

////////////////////// Enhance Object literal //////////////////////////

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //ES6 enhance objecy literal 
  openingHours,



  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  }, 
};


/*

if (restaurant.openingHours && restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//WITH optional chaining ///////////////////////////////////////////
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 
  'closed'
  console.log(`On ${day} we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

//Arrays
const users =  [
  {name: 'Jonas', email: 'hello@jonax'.io}
];

console.log(users[0]?.name ?? 'User array empty');
*/
/*
/////// Looping Objects: Object Keys, Values, and Entries ////////

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`


for (const day of properties) { 
  openStr += `${day}, `
}
console.log(openStr);

//Property VALUES
const values =  Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
//console.log(entries);

//[key, value]
for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close ${close}`);
};
*/

///////////////////// SETS /////////////////////////
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza', 
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'])
  console.log(ordersSet);

  console.log(new Set('Jonas'));

  console.log(ordersSet.size);
  console.log(ordersSet.has('Bread')); //false
  console.log(ordersSet.has('Pizza')); //true
  
  ordersSet.add('Garlic Bread;')
  ordersSet.add('Garlic Bread;')
  ordersSet.delete('Risotto')
  //ordersSet.clear()
  console.log(ordersSet);

for(const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 
  'Chef', 'Waiter']).size
  );

  console.log(new Set('MichaelAngeloSOrinion').size);
*/
/*
/////////////// Maps : Fundamentals //////////////

const rest = new Map ();
rest.set('name', 'Classico Italiano');
rest.set(1, 'France Italy');
console.log(rest.set(2, "Lisbon, Portugal"))

rest
.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('Open', 11)
.set ('Close', 23)
.set (true, 'We are open :D')
.set (false, 'We are closed :(')


console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('Open') &&
time < rest.get('Close')));
 
console.log(rest.has('categories'));
rest.delete(2)
console.log(rest);
// rest.clear();
 
const arr = [1, 2]
rest.set(arr, 'Test')
 
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
///////////////// Maps : Iteration /////////////////////////////

const question = new Map ([
  ['question', 'What is the best programming langauge in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map (Object.entries(openingHours))
console.log(hoursMap);

//Quiz Map
//Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === 3));

//Conver Map to Array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

///////////////////////// Strings Prt 1 //////////////////////////////
/*
const airline = 'TAP Air Portugal';
const plane = 'A 320';

console.log(plane[0]); //'A'
console.log(plane[1]); //' '
console.log(plane[2]) // '3'
console.log('B737'[0]); //'B'

console.log(airline.length); //16
console.log('B737'.length); //6

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('Portugal')); // 8

// Slice method
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // 'Portugal'

console.log(airline.slice(-2)); // 'al;
console.log(airline.slice(1, -1)); // 'AP Air Portuga'

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') {
    console.log('You got he middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B'); // 'You got he middle seat'
checkMiddleSeat('23C'); // 'You got lucky'
checkMiddleSeat('3E'); // 'You got he middle seat'

console.log(new String('jonas')); // String {'jonas}
console.log(typeof new String('jonas')); // object

console.log(typeof new String('jonas').slice(1)); // string

//////////////// PRT 2 /////////////// 

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

//Fix capitalization in Name
const passenger = 'jonAs' // it should look Jonas
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()
+ passengerLower.slice(1);

console.log(passengerCorrect); // Jonas

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);


//Replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.')
console.log(priceUS);

const announcement = 'All passengers come to barding door 23. Boarding door 23'

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); 

// Booleans
const planes = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // flase
console.log(plane.startsWith('Air')); // true

if(planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practce Exercise
const checkBaggage = function (items) {
  const baggage = items.toLocaleLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
}
checkBaggage('I have a laptop,Food and a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snaks and a gun for protection')
*/
////////////// Prt 3 //////////////////
/*
//split
console.log('a+very+nice+string'.split('+'));
console.log('Michael Orinion'.split(' '));

const [firstName, lastName] = 'Michael Orinion'.split(' ');

//join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// function
const capitalizedName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    //namesUpper.push (n[0].toUpperCase() + n.slice(1)); OR
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '));
}


capitalizedName('jessica and smith davis')
capitalizedName('michael Orinion')

//padding a string
const message = 'Gp to gate 23!'
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Mico'.padStart(25, '+').padEnd(30, '+'));

///
const maskCrediCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCrediCard(127361783183131));
console.log(maskCrediCard('192687146487178684512'));

//Reapeat 
const message2 = 'Bad weather... All Departures Delayed... '
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`Ther are ${n} planes in line`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12)




/////////////////////// Coding Challenge #1 ////////////////////////

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and '
    players2')
2. The first player in any player array is the goalkeeper and the
  others are field players. For Bayern Munich (team 1) create one 
  variable ('gk') with the goalkeeper's name, and one array 
  ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams 
  (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players.
 So create a new array ('players1Final') containing all the original
  team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd 
  (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number 
  of player names (NOT an array) and prints each of them to the console,
  along with the number of goals that were scored in total
  (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the 
  console which team is more likely to win, WITHOUT using an if/else 
  statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 
'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
 */
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],

  

  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
//Destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
//Use REST Operator
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldplayers);

// 3.
//Use Spread Operator
const allPlayers = [...players1, ...players2]
console.log(allPlayers);

// 4.
// Use Spread operator to select all element then add the 3 new members at the end of array
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']
console.log(players1Final);

// 5.
const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller',);
printGoals(...game.scored)


// 7.
//Use logical operator
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');
*/


////////////////////// Coding Challenge 2 //////////////////////////////
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],

  

  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Print Goal to everyone who scored
for (const item of Object.entries(game.scored) ) {
  console.log(`Goal ${Number(item[0]) + 1}: ${item[1]}`);
};

// or best solution 
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}


// 2. calc avr oof odd
const odds = Object.values(game.odds);

let average = 0;

for (const odd of odds) average += odd;
  average /= odds.length
 console.log(average);

// 3. Print the content of the object to the console
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
};

*/


///////////////////////// Coding Challenge 3 ////////////////////////

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened 
(no duplicates)
2. After the game has finished, it was found that the yellow card from 
minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, 
on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether 
it's in the first half or second half (after 45 min) of the game,
 like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. 
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);
console.log(gameEvents);

//3.
const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on average, every 
${ time / gameEvents.size} minutes`);


//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

////////////////////// Coding Challenge #4 ////////////////////////////

/* 
Write a program that receives a list of variable names written in 
underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM 
(see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2
        words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after 
        you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the 
        solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  
  for (const [i, row] of rows.entries()) {
   const[first, second] = row.toLocaleLowerCase().trim().split('_');
   
   const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
    )}`
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)} `);
  }
});
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')}${getCode(from)} ${getCode(to)} (${time.replace(';', 'h')})`.padStart(36)
  console.log(output);
}
*/