"use strict";
// Problem 1:
Object.defineProperty(exports, "__esModule", { value: true });
const formatValue = (value) => {
    if (typeof value === "string") {
        const formatValue = value.toUpperCase();
        console.log(formatValue);
    }
    else if (typeof value === "number") {
        // return value * 10;
        const formatValue = value * 10;
        console.log(formatValue);
    }
    else {
        // return !value;
        const formatValue = !value;
        console.log(formatValue);
    }
};
// formatValue("hello");
// formatValue(5);
// formatValue(true);
// Problem 2:
const getLength = (value) => {
    if (typeof value === "string") {
        const getLength = value.length;
        console.log(getLength);
    }
    if (Array.isArray(value)) {
        const getLength = value.length;
        console.log(getLength);
    }
};
// getLength("typescript");     
// getLength([10, 20, 30, 40]);
//  Problem 3:
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
function filterByRating(value) {
    return value.filter(value => value.rating >= 4);
}
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
const filteredBooks = filterByRating(books);
const filterActiveUsers = (users) => {
    return users.filter(user => user.isActive);
};
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
const printBookDetails = (book) => {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
};
const myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
// printBookDetails(myBook)
// Problem 7:
function getUniqueValues(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(arr2[i]);
        }
    }
    return result;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function calculateTotalPrice(products) {
    return products.reduce((total, product) => {
        const productTotal = product.price * product.quantity;
        return total + productTotal;
    }, 0);
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
// console.log(calculateTotalPrice(products)); 
//# sourceMappingURL=solution.js.map