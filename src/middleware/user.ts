class User {
    public id: string;

    constructor(public email: string, public password: string) {
        this.id = Math.random().toString(36).substring(2);
    }
}

export { User };