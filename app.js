const input = document.getElementById('input-field')
const colorselect = document.getElementById('color-select')
const colors = document.getElementsByClassName('color-box')
const colorArray = [...colors]
const btnSave = document.getElementById('btn-save')
const btnDelete = document.getElementById('btn-delete')
const list = document.getElementById('listed')

btnSave.addEventListener('click', addCard)
window.addEventListener('keydown', addCardWithKey)
colorselect.addEventListener('click', submitColor)
btnDelete.addEventListener('click', removeColorVal)
list.addEventListener('click', removeNote)


function addCard() {
    let div = document.createElement('div')
    let p = document.createElement('p')
    let text = input.value

    p.classList = 'card-text p-3'
    // p classes = card-text p-3

    p.append(text)
    // put text in p

    div.style.backgroundColor = input.style.background;

    div.classList = 'card shadow-sm rounded'

    div.append(p)
    // put p in div

    list.append(div)
    // put div in list
}

function addCardWithKey(event) {
    if (event.key === 'Enter') {
        let div = document.createElement('div')
        // creat div

        let p = document.createElement('p')
        // creat p

        let text = input.value
        // text = input.value

        p.classList = 'card-text p-3'
        // p classes = card-text p-3

        p.append(text)
        // p = text

        div.classList = 'card shadow-sm rounded'

        div.append(p)
        // put p in div

        div.style.backgroundColor = input.style.background;

        list.append(div)
        // put div in list

        event.preventDefault()
    }
}

function submitColor() {
    colorArray.forEach(function (colorElement) {
        colorElement.addEventListener('click', ChooseSelectColor)

        function ChooseSelectColor(event) {
            let selectedColor = event.target.style.backgroundColor
            input.style.background = selectedColor;
        }
    })
}

function removeColorVal() {
    input.style.background = 'White'
    input.value = ''
}

function removeNote(event) {
    if (event.target.tagName === 'P') {
        event.target.parentElement.remove()
        event.target.remove()
    }
}