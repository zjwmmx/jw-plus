export const withInstall = (comp) => {
    comp.install = (app) => {
        const name = comp.name || comp.__name;
        app.component(name, comp);
    };
    return comp;
};
export const useInstall = (components = []) => {
    const install = (app, options) => {
        Object.entries(components).forEach(([name, component]) => {
            app.use(component);
        });
    };
    return install;
};
