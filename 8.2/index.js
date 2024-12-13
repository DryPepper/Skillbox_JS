const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

function filterAndSortUsers(users) {
    return users.filter(array => array[1] > 25)
                .filter(array => array[2] == true)
                .sort((a, b) => a[1] - b[1])
                .map(array => array[0])
}

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25);