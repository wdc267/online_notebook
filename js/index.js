// 获取元素
let slidebar = document.querySelector('#slidebar');
let btn = document.querySelector('#slidebar .btn');
let menu = document.querySelector('.menu');
let add = document.querySelector('#add');
let del = document.querySelector('#del');
let content = document.querySelector('#content');
let cell = content.children[0];
let flag = 1;
// 当前cell编号
let n = 0;
// 侧边栏折叠效果
btn.addEventListener('click', function () {
    if (flag == 1) {
        slidebar.style.width = "10px";
        menu.style.display = "none";
        btn.innerHTML = "√";
        flag = 0;
    }
    else if (flag == 0) {
        slidebar.style.width = "150px";
        menu.style.display = "block";
        btn.innerHTML = "X";
        flag = 1;
    }
})
// 添加cell
add.addEventListener('click', function () {
    let i = cell.cloneNode();
    content.appendChild(i);
    n++;
})
// 删除cell
del.addEventListener('click', function () {
    if (n > 0) {
        let i = content.children[n]
        content.removeChild(i);
        n--;
    }
})