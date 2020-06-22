export const LogLevelStringMapping: Map<string, number> = new Map<string, number>([
    ['TRACE', 10],
    ['DEBUG', 20],
    ['INFO', 30],
    ['WARN', 40],
    ['ERROR', 50],
    ['FATAL', 60],
]);

export const LogLevelNumberMapping: Map<number, string> = new Map([
    [10, 'TRACE'],
    [20, 'DEBUG'],
    [30, 'INFO'],
    [40, 'WARN'],
    [50, 'ERROR'],
    [60, 'FATAL'],
]);
