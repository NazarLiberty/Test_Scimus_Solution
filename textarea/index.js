const expandedContainer = document.getElementById('expanded-textarea')
const expandBtn = document.getElementById('expand-btn')
const collapseBtn = document.getElementById('collapse-btn')
const simpleInput = document.getElementById('input')
const expandedInput = document.getElementById('expanded-input')

const setInputValue = (event, target) => {
    const value = event.target.value;
    target.value = value
}

expandBtn.onclick = () => expandedContainer.classList.add('expanded--active')
collapseBtn.onclick = () => expandedContainer.classList.remove('expanded--active')
simpleInput.onchange = (event) => setInputValue(event, expandedInput)
expandedInput.onchange = (event) => setInputValue(event, simpleInput)


