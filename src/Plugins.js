const Plugins = {
    core: {
        name: 'native',
        version: "1.0-beta",
        load: (controller) => {
            const components = {
                flexCenter: {
                    type: 'modifier',
                    onClick: (selectedElements) => { },
                    setup: (selectedElements) => { }
                },
                redBox: {
                    type: 'creator',
                    output: () => {
                        const div = document.createElement('div');
                        div.classList.add('w-32', 'h-32', 'bg-rose-500');
                        return div;
                    },
                    onClick: (e, editorCtx, output) => {
                        console.log('redBox output--');
                        editorCtx.appendChild(output);
                    },
                    setup: function (controllerCtx) {
                        const button = document.createElement('button');
                        button.classList.add('bg-stone-600', 'p-3', 'border', 'rounded-lg');
                        button.innerText = 'red box';
                        controllerCtx.appendChild(button);
                        return button;
                    }
                }
            };
            for (const component in components) {
                if (components[component].type === 'creator') {
                    components[component].setup(controller.context)
                        .addEventListener(
                            'click',
                            (e) => components[component].onClick(e, controller.editor.context, components[component].output()));
                }
            }
        }
    }
}