// 获取元素
let slidebar = document.querySelector('#slidebar');
let btn = document.querySelector('#slidebar .btn');
let menu = document.querySelector('.menu');
let flag = 1;
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