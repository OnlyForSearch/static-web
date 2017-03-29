// JavaScript Document

window.onload=function(){
	
		var btb=$(".rightNav");
	var tempS;
	$(".rightNav").hover(function(){
			var thisObj = $(this);
			tempS = setTimeout(function(){
			thisObj.find("a").each(function(i){
				var tA=$(this);
				setTimeout(function(){ tA.animate({right:"0"},200);},50*i);
			});
		},200);

	},function(){
		if(tempS){ clearTimeout(tempS); }
		$(this).find("a").each(function(i){
			var tA=$(this);
			setTimeout(function(){ tA.animate({right:"-110"},200,function(){
			});},50*i);
		});

	});
	
	var vn = $("#viewNew");
	vn.click(function(){
		if ( vn.hasClass("new") ){ $(".demoList li:not('.new')").hide(); vn.removeClass("new").html("<em>all</em>显示全部") }
		else{ $(".demoList li").show(); vn.addClass("new").html("<em>new</em>只显示New") }

	});


	$(".newOnly").click(function(){
		$(".demoList li:not('.new')").hide()
	});
	$(".showAll").click(function(){
		$(".demoList li").show()
	});
};