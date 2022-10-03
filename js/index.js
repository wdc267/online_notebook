// 获取元素
let slidebar = document.querySelector('#slidebar');
let btn = document.querySelector('#slidebar .btn');
let menu = document.querySelector('.menu');
let flag = 1;
// 当我们鼠标经过sliderbar就会让con这个盒子滑动到左侧
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