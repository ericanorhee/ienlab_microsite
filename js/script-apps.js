window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    document.getElementById("page_scroll").style.width = scrolled + "%";
}

$(function () {
    var doc = document.documentElement;

    var prevScroll = window.scrollY || doc.scrollTop;
    var curScroll;

    var DIRECTION_INITIAL = 0;
    var DIRECTION_UP = 1;
    var DIRECTION_DOWN = 2;

    var direction = DIRECTION_INITIAL;
    var prevDirection = DIRECTION_INITIAL;

    var header = document.getElementById("header");
    var app_header = document.getElementById("app_header");

    var checkScroll = function() {
        curScroll = window.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            // scrolled up
            direction = DIRECTION_DOWN;
        } else if (curScroll < prevScroll) {
            // scrolled down
            direction = DIRECTION_UP;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === DIRECTION_DOWN && curScroll > 80) {
            // 80은 헤더 높이
            header.classList.add('hide');
            app_header.classList.add('hide');
            prevDirection = direction;
        } else if (direction === DIRECTION_UP) {
            header.classList.remove('hide');
            app_header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

});

