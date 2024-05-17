class SpawnedList {
    constructor(spawnListDoc) {
        this.context = spawnListDoc;
        this.list = new Map();
    }

    add(element) {
        const container = document.createElement('div');
        container.classList.add('flex', 'items-center', 'justify-center', 'px-3', 'py-1.5', 'rounded-md', 'text-sm', 'hover:bg-stone-700');

        const paragraph1 = document.createElement('p');
        paragraph1.classList.add('tag', 'p-1', 'uppercase', 'font-medium', 'bg-stone-600', 'rounded-md', 'px-2');
        paragraph1.textContent = element.tagName;

        const paragraph2 = document.createElement('p');
        paragraph2.classList.add('grow', 'p-1', 'text-pink-600', 'font-medium', 'scroll-x-auto');
        paragraph2.textContent = element.classList;

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('p-1', 'flex', 'gap-2');

        const buttonX = document.createElement('button');
        buttonX.classList.add('bg-stone-800', 'p-1', 'px-2', 'rounded-md', 'shadow-md');
        buttonX.textContent = 'X';

        const buttonC = document.createElement('button');
        buttonC.classList.add('bg-stone-800', 'p-1', 'px-2', 'rounded-md', 'shadow-md');
        buttonC.textContent = 'C';

        buttonDiv.appendChild(buttonX);
        buttonDiv.appendChild(buttonC);

        container.appendChild(paragraph1);
        container.appendChild(paragraph2);
        container.appendChild(buttonDiv);

        this.context.appendChild(container);

        this.list.set(element, container);
    }

    select(element) {
        this.list
            .get(element)
            .querySelector('.tag')
            .classList.add('bg-teal-500');
    }

    unSelect(element) {
        this.list
            .get(element)
            .querySelector('.tag')
            .classList.remove('bg-teal-500');
    }
}