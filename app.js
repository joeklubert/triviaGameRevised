
    $(document). ready(function(){

        $("#gameStartscreen") .show();
        $("#gameScreen").hide();
        $(".questionone"). hide();
        $(".questiontwo"). hide();
        $(".countdown").show();
        $("#getResults").hide();
        $("#nextQuestion").hide();
        $("#submitAnswer").hide();


    });




	
	$(document).ready(function(){
    $("#startGame").click(function(){
    	$("#gameStartscreen") .hide();
        $("#gameScreen").show();
        $(".questionone"). fadeIn(3000);
        $(".questiontwo"). hide();
        $(".countdown").show();
        $("#startGame").hide();
        $("#nextQuestion").show();
        $("#submitAnswer").hide();


        

    });
        

});
        



    




	$(document).ready(function(){
    $("#nextQuestion").click(function(){
    	$("#gameStartscreen") .hide();
        $("#gameScreen").show();
        $(".questionone"). hide();
        $(".questiontwo"). fadeIn(3000);
        $("#countdown2").show();
        $("#startGame"). hide();
        $("#getResults").show();
        $("#nextQuestion").hide();
        $("#submitAnswer").show();
        $("#getResults"). hide();

         

    });
});

	
	$(document).ready(function(){
    $("#reset").click(function(){
        
    	$("#gameStartscreen") .show();
        $("#gameScreen").hide();
        $(".questionone").hide();
        $(".question2").hide();


       

    });
});

/*function test(form){
   alert("Your answers are being graded!!\nPlease be patient!");
    
    console.log("test");
    console.log("countdown");
   
}*/


$(document).ready(function(){
$("#confirm").click(function(){
        
        $("#getResults") .show();
        $("#submitAnswer") . hide();
        

       

    });
});




   
   



 

   
    
       
    


        
       
 



    


   
    
 




	





