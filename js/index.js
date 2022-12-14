// 获取元素
let slidebar = document.querySelector('#slidebar');
let btn = document.querySelector('#slidebar .btn');
let menu = document.querySelector('.menu');
let add_bef = document.querySelector('#addBefore');
let add = document.querySelector('#add');
let del = document.querySelector('#del');
let up = document.querySelector('#up');
let down = document.querySelector('#down');
let content = document.querySelector('#content');
let cells = content.querySelectorAll('#content>div');
let w = document.querySelectorAll('.w');
let porperties = document.querySelector('#porperties');
let cell_por = porperties.children[3];
let flag = true;
// 侧边栏折叠效果
btn.addEventListener('click', function () {
    if (flag == true) {
        slidebar.style.width = "10px";
        content.style.width = "1100px";
        menu.style.display = "none";
        btn.innerHTML = "&#xe649;";
        flag = false;
    }
    else if (flag == false) {
        slidebar.style.width = "150px";
        content.style.width = "1000px";
        menu.style.display = "block";
        btn.innerHTML = "&#xe64a;";
        flag = true;
    }
})
// 在当前cell前面添加cell
add_bef.addEventListener('click', addBefore);
// 添加cell
add.addEventListener('click', addCell);
// 删除cell
del.addEventListener('click', delCell);
up.addEventListener('click', function () {
    let i = findIndex();
    let className = cells[i].className;
    if (i >= 1) {
        cell_por.children[0].innerHTML = "cell编号:" + (i - 1);
        removeClass();
        cells[i - 1].classList.add(className);
        if (className == 'focusCell')
            cells[i - 1].children[0].focus();   
    }
})
down.addEventListener('click', function () {
    let i = findIndex();
    let className = cells[i].className;
    if (i < cells.length - 1) {
        cell_por.children[0].innerHTML = "cell编号:" + (i + 1);
        removeClass();
        cells[i + 1].classList.add(className);
        if (className == 'focusCell')
            cells[i + 1].children[0].focus();
    }
})
// 键盘事件
document.addEventListener('keyup', function (e) {
    let i = findIndex();
    let className = cells[i].className;
    if (e.key == 'ArrowUp' && i >= 1) {
        removeClass();
        cells[i - 1].classList.add(className);
        cell_por.children[0].innerHTML = "cell编号:" + (i - 1);
        if (className == 'focusCell')
            cells[i - 1].children[0].focus();
    }
    else if (e.key == 'ArrowDown' && i < cells.length - 1) {
        removeClass();
        cells[i + 1].classList.add(className);
        cell_por.children[0].innerHTML = "cell编号:" + (i + 1);
        if (className == 'focusCell')
            cells[i + 1].children[0].focus();
    }
    else if (e.key == 'm' && className == 'current' && cells[i].getAttribute('change') == 'false') {
        let text = cells[i].children[0];
        let box = document.createElement('div');
        if (text.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            box.innerHTML = marked.parse(text.value);
            cells[i].append(box);
            text.style.display = 'none';
            cells[i].setAttribute('change', 'true');
        }
    }
})
// 为cells[0]添加绑定事件,设置属性
cellInit(0);
// 在选中的cell 前面插入新的cell
function addBefore() {
    let i = findIndex();
    // 移除当前所有包含cells的div的类名
    cell_por.children[0].innerHTML = "cell编号:" + i;
    removeClass();
    let cell = document.createElement('div');
    let textarea = document.createElement('textarea');
    // 给新添加的cell的盒子添加current类
    cell.classList.add('current');
    textarea.classList.add('textarea');
    content.insertBefore(cell, cells[i]);
    cell.append(textarea);
    cells = content.querySelectorAll('#content>div');
    // 为cell添加绑定事件,设置属性
    cellInit(i);
}
// 在选中的cell后面插入新的cell
function addCell() {
    let i = findIndex();
    // 移除当前所有包含cells的div的类名
    cell_por.children[0].innerHTML = "cell编号:" + (i+1);
    removeClass();
    let cell = document.createElement('div');
    let textarea = document.createElement('textarea');
    // 给新添加的cell的盒子添加current类
    cell.classList.add('current');
    textarea.classList.add('textarea');
    if (content.lastChild == cells[i])
        content.appendChild(cell);
    else
        content.insertBefore(cell, cells[i].nextSibling);
    cell.append(textarea);
    cells = content.querySelectorAll('#content>div');
    // 为cell添加绑定事件,设置属性
    cellInit(i + 1);
}
// 将选中的cell删除
function delCell() {
    let i = findIndex();
    if (cells.length > 1) {
        content.removeChild(cells[i]);
        // 当前删除的是最顶部的给它下面的cell加上类
        if (i - 1 < 0) {
            cells[i + 1].classList.add('current');
            cell_por.children[0].innerHTML = "cell编号:" + i;
        }
        // 不是最顶部的给它上面的cell加上类
        else {
            cells[i - 1].classList.add('current');
            cell_por.children[0].innerHTML = "cell编号:" + (i - 1);
        }
    }
    cells = content.querySelectorAll('#content>div');
}
// 添加focusCell类，并标记出来
function addFocus(e) {
    removeClass();
    this.parentNode.classList.add('focusCell');
    let i = findIndex();
    cell_por.children[0].innerHTML = "cell编号:" + i;
    e.stopPropagation();
}
// 添加current类，并标记出来
function addCurrent() {
    removeClass();
    this.classList.add('current');
    let i = findIndex();
    cell_por.children[0].innerHTML = "cell编号:" + i;
}
// 移出包含当前textarea的div所包含的类
function removeClass() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].className = "";
    }
}
// 找到当前有标记的cell的下标
function findIndex() {
    let a = 0; //当前有current类的cell的下标
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('focusCell') || cells[i].classList.contains('current')) {
            a = i;
            break;
        }
    }
    return a;
}
// 从html预览模式转为编辑模式
function changeCell() {
    let i = findIndex();
    if (cells[i].getAttribute('change') == 'true') {
        let box = cells[i].querySelector('div');
        let text = cells[i].children[0];
        cells[i].removeChild(box);
        text.style.display = 'block';
        cells[i].setAttribute('change', false);
    }
}
// 初始化绑定事件设置属性
function cellInit(i) {
    // 给第一个cell绑定addFocus事件
    cells[i].addEventListener('click', addCurrent);
    cells[i].addEventListener('dblclick', changeCell);
    cells[i].setAttribute('change', 'false');
    // 阻止事件冒泡
    cells[i].children[0].addEventListener('click', function (e) {
        e.stopPropagation();
    })
    cells[i].children[0].addEventListener('focus', addFocus);
    // textarea自适应高度
    cells[i].children[0].addEventListener('input', function (e) {
        cells[i].children[0].style.height = '51px';
        cells[i].children[0].style.height = e.target.scrollHeight + 'px';
    })
}
