export interface LogOptions {
    level: string | number;
}

export interface LogEntry {
    timestamp: string;
    level: string;
    location: string;
    service: string;
    functionName: string;
    functionMemorySize: number;
    functionArn: string;
    requestId: string;
    coldStart: boolean;
    samplingRate: number;
    message: string;
}
