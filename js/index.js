// 获取元素
let slidebar = document.querySelector('#slidebar');
let btn = document.querySelector('#slidebar .btn');
let menu = document.querySelector('.menu');
let add = document.querySelector('#add');
let del = document.querySelector('#del');
let content = document.querySelector('#content');
let cells = content.children;
let flag = true;
// 侧边栏折叠效果
btn.addEventListener('click', function () {
    if (flag == true) {
        slidebar.style.width = "10px";
        menu.style.display = "none";
        btn.innerHTML = "√";
        flag = false;
    }
    else if (flag == false) {
        slidebar.style.width = "150px";
        menu.style.display = "block";
        btn.innerHTML = "X";
        flag = true;
    }
})
// 添加cell
add.addEventListener('click', addCell);
// 删除cell
del.addEventListener('click',delCell);
cells[0].addEventListener('focus', addFocus);
// 在选中的cell后面插入新的cell
function addCell() {
    let c = document.createElement('textarea');
    c.classList.add('textarea');
    c.addEventListener('focus', addFocus);
    let i = findFocus();
    content.insertBefore(c, cells[i + 1]);
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('focusCell'))
            cells[i].classList.remove('focusCell');
    }
    c.classList.add('focusCell');
}
// 将选中的cell删除
function delCell() {
    if (cells.length > 1) {
        let i = findFocus();
        content.removeChild(cells[i]);
        
    }
}
// 添加focusCell类，并标记出来
function addFocus() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('focusCell'))
            cells[i].classList.remove('focusCell');
    }
    this.classList.add('focusCell');
}
function findFocus() {
    let a = 0; //当前有current类的cell的下标
    for (let i = 0; i <= cells.length; i++) {
        if (cells[i].classList.contains('focusCell')) {
            a = i;
            break;
        }
    }
    return a;
}