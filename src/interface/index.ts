import {Animal} from '../type/index';

export interface Creature {
    isAdult(user: Animal): boolean;
}