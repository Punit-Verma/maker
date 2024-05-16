function init() {
    const editorDoc = document.querySelector('.editor iframe');
    const editor = new Editor(editorDoc);

    const controllerDoc = document.querySelector('.controller');
    const controller = new Controller(controllerDoc, editor, Plugins);

    controller.init();
    console.log("wow");
}
