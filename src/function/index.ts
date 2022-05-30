import { Animal } from "../type";

/**
 * Função que recebe um objeto do tipo User e retorna um boolean
 * @param user 
 * @returns {boolean}
 */
export function isAdultHuman(user: Animal): boolean {
    return user.age >= 18;
}

/**
 * 
 * @param user 
 * @returns 
 */
export function isAdultDog(user: Animal): boolean {
    return user.age >= 2;
}