import { isAdultHuman, isAdultDog } from '../function';
import { Creature } from '../interface/index';
import { Animal } from '../type';

export class Human implements Creature {
    public name: string;
    public age: number;
    constructor () {
        this.name = "Justine";
        this.age = 23;
    }

    isAdult(animal: Animal): boolean {
        return isAdultHuman(animal);
    }
}

export class Dog implements Creature {
    public name: string;
    public age: number;
    constructor () {
        this.name = "Billy";
        this.age = 1;
    }

    isAdult(animal: Animal): boolean {
        return isAdultDog(animal);
    }
}