
if($.cookie("css")) {
		$("link.skin").attr("href",$.cookie("css"));
	}


$(document).ready(function() { 
	
	$("#skin-select li a").click(function() { 
		$("link.skin").attr("href",$(this).attr('href'));
		$.cookie("css",$(this).attr('href'), {expires: 365, path: '/'});
		return false;
	});
		
	$("#skin-select #toggle").click(function() { 
	
		if($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('#skin-select').animate({ left:-100 });
		} else {
			$(this).addClass('active')
			$('#skin-select').animate({ left:0 });
		}
		return false;
	});
	
}); // end doc.ready