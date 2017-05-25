$(function () {
	var ol = $("<ol class='fixed'></ol>").appendTo($("body"));
	for (var i = 0; i < $("section").length+1; i++) {
		var li = $("<li></li>").appendTo(ol);
		var a = $("<a class='aa'></a>").appendTo(li);
		a.attr("id","#tz"+i);
	}
	console.log(ol[0])
})