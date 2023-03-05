import { IpcMainInvokeEvent, ipcRenderer } from 'electron';

export const exampleFunction: API['exampleFunction'] = {
    execute: async (event: IpcMainInvokeEvent, exampleStringArg: string, exampleNumberArg: number) => {
        console.info('exampleStringArg', exampleStringArg);
        console.info('exampleNumberArg', exampleNumberArg);

        return {
            result: Math.random() > 0.5 ? 'success' : 'failure',
        };
    },
    handle: async (exampleStringArg: string, exampleNumberArg: number) => {
        return await ipcRenderer.invoke('exampleFunction', exampleStringArg, exampleNumberArg);
    },
};
