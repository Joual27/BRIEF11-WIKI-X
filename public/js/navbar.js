$(document).ready(function(){
    $("#showProfile").on("click",function(){
        if($("#dropdown").hasClass("hidden")){
            $("#dropdown").removeClass("hidden");
        }
        else{
            $("#dropdown").addClass("hidden");
        }
    })
})