// scrollDisable();

window.onscroll = function() { scrollFunction() };



function scrollFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    // console.log(scrolled);

    if (scrolled <= 24.95) {
        $("#ic_ienlab").addClass('indicator');
        $("#ic_bp").removeClass('indicator');
        $("#ic_tn").removeClass('indicator');
        $("#ic_ir").removeClass('indicator');
        $("#ic_ar").removeClass('indicator');
    } else if (scrolled <= 49.95) {
        $("#ic_bp").addClass('indicator');
        $("#ic_ienlab").removeClass('indicator');
        $("#ic_tn").removeClass('indicator');
        $("#ic_ir").removeClass('indicator');
        $("#ic_ar").removeClass('indicator');
    } else if (scrolled <= 74.95) {
        $("#ic_tn").addClass('indicator');
        $("#ic_ienlab").removeClass('indicator');
        $("#ic_bp").removeClass('indicator');
        $("#ic_ir").removeClass('indicator');
        $("#ic_ar").removeClass('indicator');
    } else if (scrolled <= 99.95) {
        $("#ic_ir").addClass('indicator');
        $("#ic_ienlab").removeClass('indicator');
        $("#ic_bp").removeClass('indicator');
        $("#ic_tn").removeClass('indicator');
        $("#ic_ar").removeClass('indicator');
    } else {
        $("#ic_ar").addClass('indicator');
        $("#ic_ienlab").removeClass('indicator');
        $("#ic_bp").removeClass('indicator');
        $("#ic_tn").removeClass('indicator');
        $("#ic_ir").removeClass('indicator');
    }

}

function scrollDisable() {
    $('html, body').addClass('hidden');
}

function scrollAble() {
    $('html, body').removeClass('hidden');
}