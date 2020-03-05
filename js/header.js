$("document").ready(function(){
	$(".modal_background").click(function(){
		$(".modal_background, .modal_box").hide();
    });
    
	//mb_info load
	$(".manual").click(function(){        
        $(".modal_background").toggle();
        $(".modal_box").css("width", "993px").css("top", "6%").css("left", "27%").css("height", "720px").css("overflow", "scroll").toggle().load(URL + "/modal/manual.php");
    });

    //map
	$(".map").click(function(){        
        $(".modal_background").toggle();
        $(".modal_box").css("width", "978px").css("top", "6%").css("left", "27%").css("height", "720px").toggle().load(URL + "/modal/map.php");
    });

    //store request
	$(".store_req").click(function(){        
        $(".modal_background").toggle();
        $(".modal_box").css("width", "500px").css("top", "9%").css("left", "39%").css("height", "217px").toggle().load(URL + "/modal/store_req.php");
    });
    
    //footer menu modal open
    $(".f_content > ul >li").each(function(){
        $(this).click(function(){
            let type = $(this).attr("class");

            $(".modal_background").toggle();
            $(".modal_box").css("width", "993px").css("top", "6%").css("left", "27%").css("height", "720px").css("overflow", "scroll").toggle().load(URL + "/modal/content.php?type=" + type);            
        });
    });
    
});