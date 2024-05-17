class Ui {
    static genButton(name) {
        const button = document.createElement('button');
        button.classList.add('bg-stone-800', 'p-3', 'px-6', 'border', 'border-stone-500', 'capitalize', 'rounded-md');
        button.innerText = name;
        return button;
    }

    static modButton(name) {
        const button = document.createElement('button');
        button.classList.add('bg-rose-800', 'p-3', 'px-6', 'border', 'border-stone-500', 'capitalize', 'rounded-md');
        button.innerText = name;
        return button;
    }
}