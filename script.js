const input = document.querySelector('.feild input')
const plus = document.querySelector('.feild button')
const ul = document.querySelector('.todo-list ul')
const deleteAll = document.querySelector('footer button')

input.onkeyup = ()=>{
    let userData = input.value;
    if (userData.trim() != 0) {
        plus.classList.add('active')
    } else {
        plus.classList.remove('active')
    }
}

plus.onclick = ()=>{
    let userData = input.value;
    let lstorge = localStorage.getItem('New todo');
    if (lstorge === null) {
        list = []
    } else {
        list = JSON.parse(lstorge)
    }
    list.push(userData)
    localStorage.setItem('New todo' ,JSON.stringify(list));
    work()
}
function work() {
    let lstorge = localStorage.getItem('New todo');
    if (lstorge === null) {
        list = []
    } else {
        list = JSON.parse(lstorge)
    }
    const number = document.querySelector('footer .number');
    number.textContent = list.length
    if (list.length > 0) {
        deleteAll.classList.add('active')
    } else {
        deleteAll.classList.remove('active')
    }
    newlist = '';
    list.forEach((element , index) => {
        newlist += `<li>${element} <span onclick = 'deleteL(${index})' class="fas fa-trash"></span></li>`
    });
    ul.innerHTML = newlist;
    input.value = ''
}
function deleteL(index) {
    let lstorge = localStorage.getItem('New todo');
    list = JSON.parse(lstorge);
    list.splice(index , 1)
    localStorage.setItem('New todo' , JSON.stringify(list));
    work()
}
deleteAll.onclick = ()=>{
    list = [];
    localStorage.setItem('New todo' , JSON.stringify(list));
    work()
}