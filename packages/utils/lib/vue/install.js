"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInstall = exports.withInstall = void 0;
const withInstall = (comp) => {
    comp.install = (app) => {
        const name = comp.name || comp.__name;
        app.component(name, comp);
    };
    return comp;
};
exports.withInstall = withInstall;
const useInstall = (components = []) => {
    const install = (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.use(component);
        });
    };
    return install;
};
exports.useInstall = useInstall;
