$(document).ready(function(){
    $("#navToggler").on("click",function(){
        if($("#navbar-cta").hasClass("hidden")){
            $("#navbar-cta").removeClass("hidden");
        }
        else{
            $("#navbar-cta").addClass("hidden");
        }
    })
})