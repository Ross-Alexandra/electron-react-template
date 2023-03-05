type ApiExecutePromise<U> = Promise<U>;

type ApiHandlePromise<U> = Promise<U>;

type ApiExecute<T extends Array<unknown>, U> = (event: Electron.IpcMainInvokeEvent, ...args: T) => ApiExecutePromise<U>;
type ApiHandle<T extends Array<unknown>, U> = (...args: T) => ApiHandlePromise<U>;

type ApiFunction<T extends Array<unknown>, U> = {
    execute: ApiExecute<T, U>;
    handle: ApiHandle<T, U>;
};

interface API {
    exampleFunction: ApiFunction<[string, number], {result: 'success' | 'failure'}>;
}
