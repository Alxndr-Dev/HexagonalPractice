import { UserId } from "./UserId";

export class User {
    id: UserId;
    name: string;
    email: string;
    createdAt: Date;

    constructor(id: UserId, name: string, email: string, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public nameAndEmail(){
        return `${this.name} - ${this.email}`
    }
} 