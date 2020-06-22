import { Logger } from './logging/logger';

function greeting(name: string): string {
    return `Hello ${name}`;
}

export { greeting, Logger };
