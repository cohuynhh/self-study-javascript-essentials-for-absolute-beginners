const users = [
    {
        "name": "Name 1",
        "age": 10
    },
    {
        "name": "Name 2",
        "age": 12
    },
    {
        "name": "Name 3",
        "age": 13
    },
    {
        "name": "Name 4",
        "age": 14
    },
];

const userNames = users.map(x => x.name);
const userAges = users.map(x => x.age);

console.log(userNames);
console.log(userAges);
