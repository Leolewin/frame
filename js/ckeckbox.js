/**
 * Created by limliu on 2016/5/10.
 */
$(document).ready(function () {
    console.log($("tr"));
    $("td").on("click",(function () {
        console.log("tr click")
        var tempColor = $(this).css('background-color');
        if ($(this).css('class') == 'selected'){
            $(this).css('background-color', '#4fa7ef !important');

        }
        // else {
        //     $(this).parent().attr("class", tempColor+'!important');
        // }

    }));
});