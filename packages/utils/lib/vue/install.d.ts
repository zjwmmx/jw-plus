import type { App, Plugin } from "@vue/runtime-core";
export declare type SFCWithInstall<T> = T & Plugin;
export declare const withInstall: <T>(comp: T) => SFCWithInstall<T>;
export declare const useInstall: (components?: Plugin[]) => (app: App, options?: any) => void;
