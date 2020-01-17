$(function (){
	$('body').append('<div id="source"><textarea id="unsorted" cols=96 rows=12 value=""></textarea><br />'
		+'<button onclick="make()">&nbsp;&nbsp;go!&nbsp;&nbsp;</button></div>'
		+'<div id="result"></div>');
});

function make() {
	var unsorted = document.getElementById("unsorted").value;
	if (!unsorted) return;
	var result = unsorted.split(",").join("").split(".").join("").split(" ").sort();
	$("#result").html("");
	result.forEach(element => $("#result").append(element + " "));
}