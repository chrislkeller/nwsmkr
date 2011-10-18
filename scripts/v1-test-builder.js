/*sets values for default on the interface*/

//default dimensions
var defaultWidth = "620";
var defaultHeight = '400';

//default margins
var marginTop = '25';
var marginRight = '10';
var marginBottom = '25';
var marginLeft = '10';

//default styles
var defaultTitle = 'Visualization';
var defaultSubtitle = 'By You';
var defaultFont = 'Arial';
var defaultColor = '#cccccc';

		$(function() {

			//writes default dimensions to input
			$("#mapwidth").val (defaultWidth);
			$("#mapheight").val (defaultHeight);

			//writes default margins to input
			$("#marginTop").val (marginTop);
			$("#marginRight").val (marginRight);
			$("#marginBottom").val (marginBottom);
			$("#marginLeft").val (marginLeft);

			//writes default styles to input
			$("#defaultTitle").val (defaultTitle);
			$("#defaultSubtitle").val (defaultSubtitle);
			$("#defaultFont").val (defaultFont);
			$("#defaultColor").val (defaultColor);

				/*writes default html to div
				var textArea = 
					'Width: ' + defaultWidth + '\n' +
					'Height: ' + defaultHeight + '\n' +


					'Top Margin: ' + marginTop + '\n' +
					'Right Margin: ' + marginRight + '\n' +
					'Bottom Margin: ' + marginBottom + '\n' +
					'Left Margin: ' + marginLeft + '\n' +


					'Title: ' + defaultTitle + '\n' +
					'Subtitle: ' + defaultSubtitle + '\n' +
					'Font: ' + defaultFont + '\n' +
					'Color: ' + defaultColor  + '\n' +


					'First Name: ' + '\n' +
					'Last Name: ' + '\n' +
					'Description: ';

						$('#htmlCode').html(textArea);*/

			//writes HTML output on button click
			$('#updateDimensions').click(function() {

				//grabs current value for width
				var width = $('#mapwidth').val();
				var height = $('#mapheight').val();

				//grabs updated margins
				var updatedMarginTop = $('#marginTop').val();
				var updatedMarginRight = $('#marginRight').val();
				var updatedMarginBottom = $('#marginBottom').val();
				var updatedMarginLeft = $('#marginLeft').val();

				//grabs updated styles
				var updatedTitle = $('#defaultTitle').val ();
				var updatedSubtitle = $('#defaultSubtitle').val ();
				var updatedFont = $('#defaultFont').val ();
				var updatedColor = $('#defaultColor').val ();

				//grabs info
				var nameParent = $('#nameParent').val ();
				var descriptionParent = $('#descriptionParent').val ();
				var updatedFirst = $('#defaultFirst').val ();
				var updatedLast = $('#defaultLast').val ();
				var updatedDescription = $('#childDescription').val ();

					//writes new html to div
					var updatedTextArea = 
						/*'Width: ' + width + '\n' +
						//'Height: ' + height + '\n' +
						//'Top Margin: ' + updatedMarginTop + '\n' +
						//'Right Margin: ' + updatedMarginRight + '\n' +
						//'Bottom Margin: ' + updatedMarginBottom + '\n' +
						//'Left Margin: ' + updatedMarginLeft + '\n' +
						//'Title: ' + updatedTitle + '\n' +
						//'Subtitle: ' + updatedSubtitle + '\n' +
						//'Font: ' + updatedFont + '\n' +
						//'Color: ' + updatedColor + '\n' + */

						'var json = ' + '\n' +
							'\t{"id": "100",' + '\n' +
							'\t\t"name": "' + nameParent + '",' + '\n' +

								'\t\t\t"children": [' + '\n' +

									'\t\t\t\t{"id": "200",' + '\n' +
									'\t\t\t\t"name": "' + updatedFirst + ' ' + updatedLast+ '",' + '\n' +
										'\t\t\t"data": {' + '\n' +
											'\t\t\t\t"relation": "<h2>' + updatedFirst + ' ' + updatedLast+ '</h2>' + updatedDescription + '"},' + '\n' +
									'\t\t\t},' + '\n' +
									
									//eventually this should tie into the number of children selected 
									'\t\t\t\t{"id": "300",' + '\n' +
									'\t\t\t\t"name": "' + updatedFirst + ' ' + updatedLast+ '",' + '\n' +
										'\t\t\t"data": {' + '\n' +
											'\t\t\t\t"relation": "<h2>' + updatedFirst + ' ' + updatedLast+ '</h2>' + updatedDescription + '"},' + '\n' +
									'\t\t\t},' + '\n' +

							'\t\t\t],' + '\n' +

							'\tdata: {relation: "<h2>' + nameParent + '</h2><p>' + descriptionParent + '</p>"}'
							
							+ '\n' +
						'\t};';

							$('#htmlCode').html(updatedTextArea);
	});

});