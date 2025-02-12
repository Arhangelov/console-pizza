type User = {
    id: number
    username: string
    role: "contributor" | "member" | "admin"
}

type UpdateUser = Partial<User>
let nextUserId = 1

const users: User[] = [
    { id: nextUserId++, username: "john_doe", role: "member" },
    { id: nextUserId++, username: "jane_smith", role: "contributor" },
];

function updateUser(id: number, updates: UpdateUser) {
    const foundUser = users.find(user => user.id === id);
    if(!foundUser) {
        console.error(`There if not a user with ID ${id}.`);
        return
    } else {
        Object.assign(foundUser, updates);
    }
}

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user);
    return user
}

addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users);


// function fetchUserDetails(username: string): User {
//     const user = users.find(user => user.username === username)
//     if(!user) {
//         throw new Error (`User with username ${username} not found`)
//     }
//     return user
// }