export class User {
    static getUsers(){
        throw Error("Failed to get users")
        return [{id: 1, name: "Bob"}, {id: 2, name: "Alice"}]
    }
}