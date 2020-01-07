//when selected an li, will toggle on and off color/ line thru
$("li").on("click", function(){
	$(this).toggleClass("completed");
});
//click on X to delete ToDo
$("span").on("click", function(){
  $(this).parent().fadeOut(1000, function(){
  	$(this).remove();
  }); 
});
// create a new ToDo!
$("input[type ='text']").keypress(function(event){
   if(event.which === 13){
   	//grabbing text from input
   	var toDoText = $(this).val();
   	//create a new li and add to ul
   	$("ul").append("<li>this is anew li appended to the ul</li>");
   };
});