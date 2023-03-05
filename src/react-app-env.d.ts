/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="react-scripts" />

declare interface Window {
    api: {
        [Property in keyof API]: API[Property]['handle'];
    }
}
