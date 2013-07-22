    var submitted = false;
    var jqueryNoConflict = jQuery;

    // begin main function
    jqueryNoConflict(document).ready(function(){

    });

    // clear form fields on focus
    function clickclear(thisfield, defaulttext) {
        if (thisfield.value == defaulttext) {
            thisfield.value = "";
        }
    }

    // rewrite form fields on focus
    function clickrecall(thisfield, defaulttext) {
        if (thisfield.value == "") {
            thisfield.value = defaulttext;
        }
    }