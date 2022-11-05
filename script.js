const sendInput = document.querySelector('#input');
const listContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const listText = sendInput.value;

        const newItem = document.createElement('li');
        newItem.classList.add('items');
        newItem.textContent = listText;

        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        })

        if (listText != '') {
            listContainer.append(newItem);
        }

        sendInput.value = '';
    }
})

/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */