
"use strict";

var cars = [
  { brand: "Honda", price: 13000 },
  { brand: "Rolls-Royce", price: 120000 },
];

var carInfo = (car) => {
    return `Price of my new ${car.brand} is ${car.price} and it is a ${car.price <= 20000 ? 'cheap' : 'expensive'} car.`;
};

cars.forEach((car) => console.log(carInfo(car)));
/* Price of my new Honda is 13000$
 and it is cheap car. */

/* Price of my new Rolls-Royce
 is 120000$ and it is expensive car. */
