/* eslint-disable no-console */

import { LogLevelStringMapping, LogLevelNumberMapping } from './models/maps';
import { LogLevelOption, LogLevelName, LogLevelNumber } from './models/types';

class LoggerManager {
    static TRACE: LogLevelNumber = LogLevelStringMapping.get('TRACE');
    static DEBUG: LogLevelNumber = LogLevelStringMapping.get('DEBUG');
    static INFO: LogLevelNumber = LogLevelStringMapping.get('INFO');
    static WARN: LogLevelNumber = LogLevelStringMapping.get('WARN');
    static ERROR: LogLevelNumber = LogLevelStringMapping.get('ERROR');
    static FATAL: LogLevelNumber = LogLevelStringMapping.get('FATAL');

    level: LogLevelNumber;
    levelName: LogLevelName;

    /**
     *Creates an instance of LoggerManager.
     * @param {string} service - Name of the service Logger e.g. "payment"
     * @param {number} logLevel - Logger level, by default Logger.INFO
     * @memberof LoggerManager
     */
    constructor(public service: string, public logLevel?: LogLevelOption) {
        this.service = service;
        this.level = this.getLoggingLevelNumber(logLevel);
        this.levelName = this.getLoggingLevelName(this.level);
    }

    private getLoggingLevelNumber(level: LogLevelOption): LogLevelNumber {
        if (typeof level === 'number' && LogLevelNumberMapping.has(level)) {
            return level;
        }

        if (typeof level === 'string') {
            level = level.toUpperCase();
            if (LogLevelStringMapping.has(level)) {
                return LogLevelStringMapping.get(level);
            }
        }

        return LoggerManager.INFO;
    }

    private getLoggingLevelName(level: LogLevelNumber): string | undefined {
        const levelEnv: string | undefined = process.env.LOG_LEVEL?.toUpperCase();

        if (typeof level === 'number' && LogLevelNumberMapping.has(level)) {
            return LogLevelNumberMapping.get(level);
        }

        if (typeof levelEnv === 'string' && LogLevelStringMapping.has(levelEnv)) {
            return levelEnv;
        }

        return 'INFO';
    }

    /**
     * setLevel
     */
    public setLevel(level: number): void {
        this.level = level;
    }

    // private log(level: number, ...msg: any) {
    //     // Do not log statements if level isn't greater or equal to current level
    //     if (level < this.level) {
    //         return;
    //     }

    //     console.log(
    //         JSON.stringify({
    //             ...msg,
    //         }),
    //     );
    // }
}

// const logger = new LoggerManager('payment', LoggerManager.INFO);

export { LoggerManager };
