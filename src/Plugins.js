const Plugins = {
    core: {
        name: 'native',
        version: "1.0-beta",
        load: (controller) => {
            const components = {
                flexCenter: {
                    type: 'modifier',
                    onClick: (e, selectedElements = []) => {
                        console.log('flex center output--', selectedElements);
                        if (!selectedElements.length) {
                            console.log("select at least one element to apply");
                            return;
                        }
                        const flex = ['flex', 'items-center', 'justify-center'];
                        for (const element of selectedElements) {
                            element.classList.add(...flex);
                        }
                    },
                    setup: function (controllerCtx) {
                        const button = Ui.modButton('flex center');
                        controllerCtx.appendChild(button);
                        return button;
                    }
                },
                heroBox: {
                    type: 'modifier',
                    onClick: (e, selectedElements = []) => {
                        console.log('hero box output--', selectedElements);
                        if (!selectedElements.length) {
                            console.log("select at least one element to apply");
                            return;
                        }
                        const heroClass = ['w-screen', 'h-80'];
                        for (const element of selectedElements) {
                            element.classList.add(...heroClass);
                        }
                    },
                    setup: function (controllerCtx) {
                        const button = Ui.modButton('hero box');
                        controllerCtx.appendChild(button);
                        return button;
                    }
                },
                redBox: {
                    type: 'creator',
                    output: () => {
                        const div = document.createElement('div');
                        div.classList.add('w-32', 'h-32', 'bg-rose-500');
                        controller.editor.registerSelectable(div);
                        return div;
                    },
                    onClick: (e, editor, output) => {
                        console.log('redBox output--');
                        editor.spawn(output);
                    },
                    setup: function (controllerCtx) {
                        const button = Ui.genButton('red box');
                        controllerCtx.appendChild(button);
                        return button;
                    }
                },
                cottonCandy: {
                    type: 'creator',
                    output: () => {
                        const div = document.createElement('div');
                        div.classList.add('w-60', 'h-60', 'bg-indigo-500', 'm-3');
                        controller.editor.registerSelectable(div);
                        return div;
                    },
                    onClick: (e, editor, output) => {
                        console.log('cotton-candy output--');
                        editor.spawn(output);
                    },
                    setup: function (controllerCtx) {
                        const button = Ui.genButton('cotton candy');
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
                            (e) => components[component].onClick(e, controller.editor, components[component].output()));
                }
                if (components[component].type === 'modifier') {
                    components[component].setup(controller.context)
                        .addEventListener(
                            'click',
                            (e) => components[component].onClick(e, controller.editor.selected));
                }
            }
        }
    }
}