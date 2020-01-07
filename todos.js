var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++)
{
    lis[i].addEventListener("mouseover", function(){
     this.classList.toggle("enlg");
    });
}
