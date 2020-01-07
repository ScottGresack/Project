//when selected an li, will toggle on and off color/ line thru
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//click on X to delete ToDo
$("ul").on("click", "span", function(){
  $(this).parent().fadeOut(1000, function(){
  	$(this).remove();
  }); 
});
// create a new ToDo!
$("input[type ='text']").keypress(function(event){
   if(event.which === 13){
   	//grabbing text from input
   	var toDoText = $(this).val();
   	//clears out input
   	$(this).val("");
   	//create a new li and add to ul
   	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + toDoText + "</li>");

   };
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});
