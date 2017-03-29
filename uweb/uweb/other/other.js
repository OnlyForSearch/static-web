// JavaScript Document

//隔行添加demoBoxEven
		$(".demoBox").each(function(i){ if (i%2!=0)$(this).addClass("demoBoxEven"); });

		$(".demoList li").hover(function(){ $(this).addClass("on") },function(){ $(this).removeClass("on") });
		$(".demoList li").each(function(i){
			$("img",this).attr("src","images/blank.png");
			$(this).attr("title", $("img",this).attr("_src").split("/")[1] +"-"+ $("h3",this).text() )
		});
		//$(".demoList li").dblclick(function(){ window.open($("img",this).attr("src").replace(".jpg",".html")) });
		$(".demoList li:not('.o')").click(function(){
			$("#displayBox h3").text( $("img",this).attr("src").split("/")[1] +"-"+ $("h3",this).text() );
			$("#displayBox iframe").attr("src",$("img",this).attr("src").replace(".jpg",".html"));
			$("#displayBox").show();
		});

		//当前效果代码
		$("#displayBox .hd a").click(function(){ $("#displayBox").hide(); $("#displayBox iframe").attr("src","") }); //关闭隐藏盒子
		$("#displayBox").blur( function(){ $(this).hide } );

		var isIE6 = !!window.ActiveXObject&&!window.XMLHttpRequest;


		//滚动加载
		var scrollLoad =function(){
			$("#content img[_src]").each(function(){
					var t = $(this);
					
					if( t.offset().top<= $(document).scrollTop() + $(window).height()  )
					{
						t.attr( "src",t.attr("_src") ).removeAttr("_src");
					}
			});//each E
		}

		scrollLoad();
		$(window).scroll(function(){ 
			if(isIE6){ $("#displayBox").css("top", $(document).scrollTop()+10) }
			if(isIE6){ btb.css("top", $(document).scrollTop()+30) }
			scrollLoad();
		});

