
	$(document).ready(function(){

	var url='http://api.littlesis.org/entities.json?_key=6f1b1376ec9f3f00824c8523bd32ce9a3bfbe408%26q=';
	var query;

		$('button').click(function(){

		//get value in the search box and store it in the variable
		query=$("#query").val();
		

		
		//get the json file
        $.getJSON("proxy.php?url=" + url+query, function(json){
			
			//$("#results").html("<ul></ul>")

				//this is where we can loop through the results in the json object
				$.each(json.contents.Response.Data.Entities.Entity, function(i, entity) {

					if (entity.primary_type != "Person") return

				//this is where we do what we want with the tweet
				/*$("#results ul").append(
				'<li><a class="relationships_link" href="'+entity.id+'">(ID: ' + entity.id + ') <strong> ' + entity.name + 
				'</strong>:</a>' + entity.description + '</li>' +
				'<p>' + entity.summary + '</p>');*/

					$("#slides ul").append( 
					'<li>' +
					'<a class="relationships_link" href="' + entity.id +'">(ID: ' + entity.id + ' ) <strong> ' +
					'<br>' + entity.name + '</strong>:</a><br>' + entity.description +
					//'<img src=\"images/anon.png\" width=\"252px\" />' +
					//'<br>' + 
					'</li>');
              });
            });
            
            
            
            		//creates link for given relationships
		$('.relationships_link').live('click', function() {

		//creates unordered list beneath parent		
		var list_item = $(this).parent()
		
		var relationships = list_item.append("<ul></ul>")

		//queries the API for relationships			
		var relation_url = "proxy.php?url=http://api.littlesis.org/entity/" + $(this).attr('href') + "/relationships.json?_key=6f1b1376ec9f3f00824c8523bd32ce9a3bfbe408";

		$.getJSON(relation_url, function(json){

			//this is where we can loop through the results in the json object
			$.each(json.contents.Response.Data.Relationships.Relationship ,function(i, relationship){
		
				//adds the relationships as list items
				//links to little sis profile page...
				relationships.append('<li>This is a <a href=\" ' + relationship.uri + '\" target=/"blank/">' + relationship.description1 +  '</a></li>')
			});

			//add visualize button
			document.getElementById('contact-form').innerHTML = 
			'<button type="submit" id="submit" name="submit" class="form-submit-button">Visualize</button>';

			$('#submit').click(function(){
				document.location.href='sis-visualize.html';
			})

		});

          return false



		});
		
		

		
		
            
            

          });
       });