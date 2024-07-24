$(document).ready(function(){
    $(".topic").mouseenter(function(){
        $(".htmlsub").slideToggle(500);
    });

    $(".csstopic").mouseenter(function(){
        $(".csssub").slideToggle(500);
    });
    $(".jqtopic").mouseenter(function(){
        $(".jqsub").slideToggle(500);
    });
});