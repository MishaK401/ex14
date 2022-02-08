$(document).ready(function(){
    let flags1=0;
        $("#flags1").click(function(){
          
                $("#flags1").animate({
                    scale: 2,
                    color:"blue",backgroundColor:"rgba(255, 193, 90, 0.3)"},400);
                $("#flags1").append("Alpha Bravo Charlie Delta Echo Foxtrot Golf Hotel India");
       
        
        })
    
        let flags2=0;
        $("#flags2").click(function(){
        
                $("#flags2").animate({
                    scale: 2, color:"blue",
                    backgroundColor:"rgb(255, 0, 0,0.3)"},400);
                $("#flags2").append("Juliet Kilo Lima Mike November Oscar Papa Romeo");
           
        })

        let flags3=0;
        $("#flags3").click(function(){
        
                $("#flags3").animate({
                    scale: 2,
                    color:"blue",backgroundColor:"rgb(255, 0, 0,0.3)"},400);
                $("#flags3").append("Sierra Tango Uniform Victor Whiskey X-ray Yankee Zulu");
           
        })
    
        $("#flags1").draggable();
    })