// scrollDisable();
// window.onscroll = function() { scrollFunction() };

$(function () {
    $('#fullpage').fullpage({
        autoScrolling: true,

        scrollHorizontally: true,
        keyboardScrolling: true,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        animateAnchor: true,
        onLeave: function (origin, destination, direction) {
            const ic_ienlab = $("#ic_ienlab");
            const ic_bp = $("#ic_bp");
            const ic_tn = $("#ic_tn");
            const ic_ir = $("#ic_ir");
            const ic_ar = $("#ic_ar");
            const ic_sg = $("#ic_sg");

            const phone1 = $(".phone.one")
            const phone2 = $(".phone.two")

            console.log(destination.index);
            switch (destination.index) {
                case 0:
                    ic_ienlab.addClass('indicator');
                    ic_bp.removeClass('indicator');
                    ic_tn.removeClass('indicator');
                    ic_ir.removeClass('indicator');
                    ic_ar.removeClass('indicator');
                    ic_sg.removeClass('indicator');
                    phone1.addClass('disappear')
                    phone2.addClass('disappear')
                    break;
                case 1:
                    ic_ienlab.removeClass('indicator');
                    ic_bp.addClass('indicator');
                    ic_tn.removeClass('indicator');
                    ic_ir.removeClass('indicator');
                    ic_ar.removeClass('indicator');
                    ic_sg.removeClass('indicator');
                    phone1.removeClass('disappear')
                    phone2.removeClass('disappear')
                    break;
                case 2:
                    ic_ienlab.removeClass('indicator');
                    ic_bp.removeClass('indicator');
                    ic_tn.addClass('indicator');
                    ic_ir.removeClass('indicator');
                    ic_ar.removeClass('indicator');
                    ic_sg.removeClass('indicator');
                    break;
                case 3:
                    ic_ienlab.removeClass('indicator');
                    ic_bp.removeClass('indicator');
                    ic_tn.removeClass('indicator');
                    ic_ir.addClass('indicator');
                    ic_ar.removeClass('indicator');
                    ic_sg.removeClass('indicator');
                    break;
                case 4:
                    ic_ienlab.removeClass('indicator');
                    ic_bp.removeClass('indicator');
                    ic_tn.removeClass('indicator');
                    ic_ir.removeClass('indicator');
                    ic_ar.addClass('indicator');
                    ic_sg.removeClass('indicator');
                    break;

                case 5:
                    ic_ienlab.removeClass('indicator');
                    ic_bp.removeClass('indicator');
                    ic_tn.removeClass('indicator');
                    ic_ir.removeClass('indicator');
                    ic_ar.removeClass('indicator');
                    ic_sg.addClass('indicator');
                    break;

            }
        }
    });
});
