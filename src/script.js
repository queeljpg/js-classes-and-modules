import isValid from '../src/isValidName.js';
import { GREETING } from '../src/constants/GREETING.js';

export default function sayHelloToUser(name) {
    if (!isValid(name)) {
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`;
}
