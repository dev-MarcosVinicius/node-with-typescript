import { Human, Dog } from "./class";

const creatures = {
    "human": new Human(),
    "animal": new Dog()
};

/**
 * Create a instace of Human
 */
let creature = creatures["human"];

/**
 * Define uma variavel a partir da execução da função isAdult
 */
const isJustineAnAdult: boolean = creature.isAdult(creature);
console.log("Justine instance >> ", isJustineAnAdult);

creature = creatures["animal"];

const isBillyAnAdult: boolean = creature.isAdult(creature);
console.log("Billy instance >> ", isBillyAnAdult);