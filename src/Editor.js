class Editor {
    constructor(editorDoc) {
        this.context = editorDoc.contentWindow.document.body;
        this.spawnedList = new SpawnedList(document.querySelector('.spawner-list'))
        this.selected = [];

        this._selectedClasses = ['after:border-2', 'after:border-dashed', 'after:flex', 'after:items-center',
            'after:justify-center', 'after:h-full', 'after:scale-105', 'after:border-teal-700', 'after:top-0',
            'after:bottom-0', 'after:left-0', 'after:right-0', 'relative', 'after:absolute'];
    }

    init() {
        this.context.addEventListener
    }

    spawn(element) {
        if (this.selected.length > 0) {
            for (const target of this.selected) {
                target.appendChild(element);
                this.spawnedList.add(element);
            }
            return;
        }
        this.context.appendChild(element);
        this.spawnedList.add(element);
    }

    registerSelectable(element) {
        element.addEventListener('click', (e) => {
            if (e.target.parentElement && e.target.parentElement.tagName === 'BODY') {
                e.stopPropagation();
                return;
            }

            const el = e.target;
            if (this.isSelected(el)) {
                this.unSelect(el);
            }
            else {
                this.select(el);
            }
            console.log(e.target.classList);
        });
    }

    isSelected(element) {
        return this.selected.includes(element);
    }

    select(element) {
        this.selected.push(element);
        element.classList.add(...this._selectedClasses);
        this.spawnedList.select(element);
    }

    unSelect(element, all = false) {
        if (all) this.selected = [];
        const index = this.selected.findIndex((x) => x === element);
        this.selected.splice(index, 1);
        element.classList.remove(...this._selectedClasses);

        this.spawnedList.unSelect(element);
    }
}