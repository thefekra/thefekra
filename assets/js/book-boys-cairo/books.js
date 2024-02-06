function switchTab(tab) {
    var tabLeft = document.querySelector('.tab-bar .tab:nth-child(1)');
    var tabRight = document.querySelector('.tab-bar .tab:nth-child(2)');
    var bar = document.querySelector('.tab-bar');
    var contentLeft = document.getElementById('content-left');
    var contentRight = document.getElementById('content-right');

    if (tab === 'left') {
        tabLeft.classList.add('active');
        tabLeft.classList.remove('right');
        tabRight.classList.remove('active');
        tabRight.classList.add('right');
        bar.style.justifyContent = 'flex-start';
        contentLeft.classList.add('active');
        contentRight.classList.remove('active');
    } else {
        tabLeft.classList.remove('active');
        tabLeft.classList.add('right');
        tabRight.classList.add('active');
        tabRight.classList.remove('right');
        bar.style.justifyContent = 'flex-end';
        contentLeft.classList.remove('active');
        contentRight.classList.add('active');
    }
}


window.addEventListener('DOMContentLoaded', function () {
    var selectBooksElement = document.getElementById('selectBooks');
    selectBooksElement.click();
});

var selectBooksButton = document.getElementById("selectBooks");
var viewBooks = document.getElementById("view-book1");
var viewBooks = document.getElementById("view-book2");
var viewBooks = document.getElementById("view-book3");
var viewBooks = document.getElementById("view-book4");


selectBooksButton.addEventListener("click", function () {
    document.getElementById("view-book1").style.display = "block";

});

selectVideosButton.addEventListener("click", function () {
    document.getElementById("view-book2").style.display = "none";
});

selectBooksButton.addEventListener("click", function () {
    document.getElementById("view-book3").style.display = "block";

});

selectBooksButton.addEventListener("click", function () {
    document.getElementById("view-book4").style.display = "block";

});

// الشريط الجانبي
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "-250px") {
        sidebar.style.right = "0";
    } else {
        sidebar.style.right = "-250px";
    }
}