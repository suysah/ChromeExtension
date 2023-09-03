


let arr = [];
const input = document.getElementById('input-1');
const saveInputButtn = document.getElementById('save-input-btn');
const ulLi = document.getElementById('unorderedList');
const deleteButon = document.getElementById('del-btn');
const saveTabButton = document.getElementById('save-tab-btn');
const dataFromLocalStorage = JSON.parse(localStorage.getItem("arr"))


if (dataFromLocalStorage) {
    arr = dataFromLocalStorage;
    display(arr);
}

saveTabButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        arr.push(tabs[0].url)
        localStorage.setItem("tabs", JSON.stringify(arr))
        saveTab()
        
    })

})


function display(passarr) {
    ulLi.innerHTML = '';
    for (let i = 0; i < passarr.length; i++) {
        // ulLi.innerHTML += '<li>'+'<a href = "#" target="_blank">' + arr[i] +'</a>'+'</li>';
        ulLi.innerHTML += `
        <li>
        <a href = '${passarr[i]}' target='_blank'> 
        ${passarr[i]} 
        </a>
        </li>
        `
    }
}

deleteButon.addEventListener('dblclick', function () {
    localStorage.clear();
    arr = [];
    display(arr);
})


saveInputButtn.addEventListener("click", function () {
    arr.push(input.value);
    input.value = ''
    localStorage.setItem("arr", JSON.stringify(arr))
    display(arr)
})

function saveTab()
{
    arr.push(input.value);
    input.value = ''
    localStorage.setItem("arr", JSON.stringify(arr))
    display(arr)  
}













