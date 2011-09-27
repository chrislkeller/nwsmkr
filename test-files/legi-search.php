<?php
	$formIsSubmitted = isset($_GET['submitted']) && $_GET['submitted'];
	function selectedOption($optionName, $optionValue) {
		global $formIsSubmitted;
			if ($formIsSubmitted) {
				if ($_GET[$optionName] == $optionValue)
					return 'SELECTED';
			}
		}
?>


<!-- BEGIN FORM -->
<form action="" method="get">

<input type="hidden" name="submitted" value="1" />

<select name="party">
<option <?php echo selectedOption('party', 'democratic'); ?> value="democratic">Democrat</option>
<option <?php echo selectedOption('party', 'republican'); ?> value="republican">Republican</option>
</select>

</br>

<select name="chamber">
<option <?php echo selectedOption('chamber', 'lower'); ?> value="lower">Assembly</option>
<option <?php echo selectedOption('chamber', 'upper'); ?> value="upper">Senate</option>
</select>

</br>

<input type="submit" value="Submit" />
</form>
<!-- END FORM -->

<?php 

$party = $formIsSubmitted ? $_GET['party'] : 'democratic'; // default is 'democratic' in the select boxes, because it's the top option
$chamber = $formIsSubmitted ? $_GET['chamber'] : 'lower'; // default is 'lower' in the select boxes, because it's the top option

//this is the string
$string= file_get_contents('http://openstates.sunlightlabs.com/api/v1/legislators/?state=wi&party='.$party.'&chamber='.$chamber.'&active=true&apikey=b717252e9bc44d4ea57321c49e7dd5e8');

// this creates array from string
$json_a=json_decode($string);

// sets each instance of person to $p
foreach($json_a as $p) 

{echo '
<p><strong>'.$p->full_name.'</strong></p>
<p><strong>District:</strong> '.$p->district.'</p>
<img width="200px" src='.$p->photo_url.' />
<p>'.$p->id.'</p>
<hr>
';}