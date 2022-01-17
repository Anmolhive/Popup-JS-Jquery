#Popup-JS-Jquery

$(".eventwrap-list h6").click(function(e){  //Get Target by Click Event.
    e.preventDefault();
    $(".eventpopup").fadeIn(20,"linear");   //Opening Popeup. 
});

$('.crossicon').click(function() {          //Get Target Cross Icon by Click Event.
   $(".eventpopup").fadeOut("fast");        //Close Popup.
   $( ".eventwrap-list h6" ).removeClass( "evnetpopupfind" ); //Removing A Class.
});

$(document).mouseup(function(e)            //Start MouseUp Event 
{
    var container = $(".eventpopup");      //Target Popup Div.
    
    // If the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {   // If The Click Takes Place Outside The Container That Is Popup Div.  
        container.fadeOut("fast");         //Close The Popup.
        $( ".eventwrap-list h6" ).removeClass( "evnetpopupfind" );
        
    }
});
