// // push() ushift()
// const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

// superheroes.push("Wonder Woman");
// // => 4

// superheroes;
// // => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

// const cities = ["New York", "San Francisco"];

// cities.unshift("Boston", "Chicago");
// // => 4

// cities;
// // => ["Boston", "Chicago", "New York", "San Francisco"]




// spread operator
// const coolCities = ["New York", "San Francisco"];

// const copyOfCoolCities = [...coolCities];

// copyOfCoolCities;
// //=> ["New York", "San Francisco"]



// pop() shift()
// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// days.pop();
// // => "Sun"

// days;
// // => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// // The .shift() method removes the first element in an Array:

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// days.shift();
// // => "Mon"

// days;
// // => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]




// slice() 0 args
// const primes = [2, 3, 5, 7];

// const copyOfPrimes = primes.slice();

// primes;
// // => [2, 3, 5, 7]

// copyOfPrimes;
// // => [2, 3, 5, 7]


// slice 2 args
// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// days.slice(2, 5);
// // => ["Wed", "Thu", "Fri"]



// splice

// With a Single Argument
// array.splice(start);


// With Two Arguments
// array.splice(start, deleteCount);

// With 3 Arguments
// array.splice(start, deleteCount, item1, item2, ...);



//slicing and spreading
// const menu = [
//     "Jalapeno Poppers",
//     "Cheeseburger",
//     "Fish and Chips",
//     "French Fries",
//     "Onion Rings",
//   ];

//   const newMenu = [
//     ...menu.slice(0, 1),
//     "Veggie Burger",
//     "House Salad",
//     "Teriyaki Tofu",
//     ...menu.slice(3),
//   ];

//   menu;
//   // => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]

//   newMenu;
//   // => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]











