var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function() {
    //renderHandlebarsTemplate('static-files/templates/page-header.handlebars', '#page-header');
    //renderHandlebarsTemplate('static-files/templates/project-details.handlebars', '#project-details');
    renderHandlebarsTemplate('static-files/templates/project-footer.handlebars', '#project-footer');
    //renderHandlebarsTemplate('static-files/templates/page-footer.handlebars', '#page-footer');
    handlebarsDebugHelper();
});
// end

// add handlebars debugger
function handlebarsDebugHelper(){
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
    });
};