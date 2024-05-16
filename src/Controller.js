class Controller {
    constructor(controllerDoc, editor, plugins) {
        this.context = controllerDoc;
        this.editor = editor;
        this.plugins = plugins;
    }

    init() {
        this.loadPlugins();
    }

    loadPlugins() {
        console.log(this.plugins.core.name);
        console.log(this.plugins.core.version);
        this.plugins.core.load(this);
    }
}