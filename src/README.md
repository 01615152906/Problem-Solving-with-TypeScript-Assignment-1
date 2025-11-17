




 { Interview Questions - Blog Task; }


1. What are some differences between interfaces and types in TypeScript?  

টাইপস্ক্রিপ্টে ইন্টারফেস এবং প্রকারের মধ্যে কিছু পার্থক্য কী?


উত্তোর =:

Interface আর Type এর মূল পার্থক্য ---

Interface মূলত 'object structure' লেখার জন্য

মানে—কোনো অবজেক্ট কেমন হবে, তার রূপটা interface দিয়ে ঠিক করা হয়।


যেমন : __

1-:

Type অনেক কিছুই ধরে রাখতে পারে-

string

number

union

tuple

function

2-: Interface বাড়ানো যায় extends করা যায়,


interface User {
  name: string;
}

interface User {
  age: number;
}




এটা Type-এ করা যায় না।





 2. : What is the use of the keyof keyword in TypeScript? Provide an example.


  keyof কী?

keyof হলো TypeScript-এর একটা কিওয়ার্ড, যা কোনো object-এর সবগুলো key-এর টাইপ বের করে আনে।
মানে, তুমি যদি একটা object টাইপ দাও, তাহলে keyof সেই object-এর property গুলোর নামকে union টাইপ হিসেবে রিটার্ন করবে।



নিচে একটি উদাহরণ দেওয়া হলো  -:


type Person = {
  name: string;
  age: number;
  city: string;
};


type PersonKeys = keyof Person;

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}


const p = { name: "Rasel", age: 25, city: "Dhaka" };

console.log(getValue(p, "name"));
console.log(getValue(p, "age"));  
