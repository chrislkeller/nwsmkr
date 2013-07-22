var jqueryNoConflict = jQuery;
var fn = fn || {};

// begin main function
jqueryNoConflict(document).ready(function() {
    fn.initializeQuery();
});

var littleSisConfig = {
    //dataTypes: 'entities',
    //dataFormat: '.json',
    dataKey: '6f1b1376ec9f3f00824c8523bd32ce9a3bfbe408',
}

// begin littleSisApiQuery
var fn = {

    // boilerplate to make returning json easier
    returnJsonFromQuery: function(urlToQuery, functionToRun) {
        jqueryNoConflict.getJSON('proxy.php?url=' + urlToQuery, functionToRun);
    },

    // initialize when search button triggered
    initializeQuery: function() {
        jqueryNoConflict('#api-query a').click(function() {
            var searchValue = jqueryNoConflict('#valueToQueryAPI').val();
            fn.constructQueryUrl(searchValue);
        });
    },

    // construct the url to query for data
    constructQueryUrl: function(searchValue) {
        searchValue = fn.replaceQuerySpacesWith(searchValue, '+')
        var urlSearch='http://api.littlesis.org/entities.json?_key=' + littleSisConfig.dataKey + '%26q=' + searchValue;
        fn.returnJsonFromQuery(urlSearch, fn.createArrayOfEntities);
    },

    createArrayOfEntities: function(data) {

        //this is where we can loop through the results in the json object
        jqueryNoConflict.each(data.contents.Response.Data.Entities.Entity, function(i, entity) {

            //return only the people
            if (entity.primary_type != 'Person') return

            //write the query return
            jqueryNoConflict('.carousel-inner').append(
                '<div id="' + entity.id + '" class="item">' +
                    '<img src="static-files/images/anon.png" alt="' + entity.name + '" />' +
                    '<div class="carousel-caption">' +
                        '<h3>' + entity.name  + '</h3>' +
                        '<h3><a id="' + entity.id + '" href="javascript:void(0)" class="visualize btn btn-success">See Relationships</a></h3>' +
                        '<p>' + entity.description + '</p>' +
                        '<p>' + entity.summary + '</p>' +
                        '<p>' + entity.api_uri + '</p>' +
                        '<p>' + entity.end_date + '</p>' +
                        '<p>' + entity.is_current + '</p>' +
                        '<p>' + entity.parent_id + '</p>' +
                        '<p>' + entity.primary_type + '</p>' +
                        '<p>' + entity.start_date + '</p>' +
                        '<p>' + entity.updated_at + '</p>' +
                        '<p>' + entity.uri + '</p>' +
                        '<p>' + entity.website + '</p>' +
                '</div>'
            );
        });

        jqueryNoConflict('.carousel-inner div').first().addClass('active');
        jqueryNoConflict('#project-visuals').fadeIn();
        jqueryNoConflict('.carousel-inner a').click(function() {
            individualEntityId = jqueryNoConflict(this).attr('id');
            jqueryNoConflict('#project-visuals').empty();
            fn.getEntityRelationships(individualEntityId)
        });
    },

    getEntityRelationships: function(individualEntityId) {
        var relationshipUrl = 'http://api.littlesis.org/entity/' + individualEntityId + '/relationships.json?_key=' + littleSisConfig.dataKey;
        fn.returnJsonFromQuery(relationshipUrl, fn.getRelationshipDetails);
    },

    getRelationshipDetails: function(data) {
        jqueryNoConflict.each(data.contents.Response.Data.Relationships.Relationship, function(i, relationship) {
            var detailsUrl = 'http://api.littlesis.org/relationship/' + relationship.id + '.json?_key=' + littleSisConfig.dataKey;
            fn.returnJsonFromQuery(detailsUrl, fn.createArrayOfRelationshipDetails)
        });
    },

    createArrayOfRelationshipDetails: function(data) {
        console.log(data.contents.Response.Data);
        jqueryNoConflict.each(data.contents.Response.Data, function(i, relationship) {
            jqueryNoConflict('#project-visuals').append(
                '<p>' + relationship.description1 + ' to <a id="' + relationship.Entity2.id + '" href="javascript:void(0)" class="visualize">' + relationship.Entity2.name + '</a></p>');
        });
    },


    /* few entities appear to have images, so these functions aren't really used */
    littleSisQueryForImages: function(entityIdToQuery) {
        var queryEntityImageId = 'http://api.littlesis.org/entity/' + entityIdToQuery + '/images.json?_key=' + littleSisConfig.dataKey;
        fn.returnJsonFromQuery(queryEntityImageId, fn.pullImageLinkAndReturn);
    },

    pullImageLinkAndReturn: function(data){
        console.log(data);
    },

    replaceQuerySpacesWith: function(string, character){
        var output = string.replace(/\s/g, character);
        return output;
    },

}
// end littleSisApiQuery

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