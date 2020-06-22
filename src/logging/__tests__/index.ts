import { Logger } from '../index';

// const consoleLog = jest.fn();
// global.console.debug = consoleLog;
// global.console.info = consoleLog;
// global.console.warn = consoleLog;
// global.console.error = consoleLog;
const consoleLog = jest.fn();
global.console.debug = consoleLog;
global.console.info = consoleLog;
global.console.warn = consoleLog;
global.console.error = consoleLog;

describe('Logger', () => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    beforeEach(consoleLog.mockClear);
    afterAll(() => consoleLog.mockRestore());

    it('Implict log level', () => {
        const logger = new Logger('payment');
        expect(logger.level).toBe(Logger.INFO);
    });

    it('Explicit log level', () => {
        const logger = new Logger('payment', Logger.DEBUG);
        expect(logger.level).toBe(Logger.DEBUG);
    });

    // each([100, Logger.INFO, 'BLAH', Logger.INFO]).it('Invalid log level', (value, expected) => {
    //     const logger = new Logger('payment', value);
    //     expect(logger.level).toBe(expected);
    // });

    it('Invalid log level', () => {
        const logger = new Logger('payment', 100);
        expect(logger.level).toBe(Logger.INFO);
    });

    it('Invalid log level', () => {
        const logger = new Logger('payment', 100);
        expect(logger.level).toBe(Logger.INFO);
    });

    // it('captures logs as JSON', () => {
    //     Log.debug('test');
    //     verify((log) => expect(log.message).toBe('test'));
    // });

    // test('Sanity test', () => {
    //     expect(greeting('Dog')).toBe('Hello Dog');
    // });
});
