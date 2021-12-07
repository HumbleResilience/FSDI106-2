let important=false;
let icon;
//toggle on and off the star
function togglePriority(){
    console.log("Clicked");

    if(important==true){
        //set it as non-important
        icon.removeClass("fas").addClass("far");
        important=false;
    }   
    else{
        //set it as imporant
        icon.removeClass("far").addClass("fas");
        important=true;

    }
    
}

function init(){
    console.log("Task Manager")
    icon=$("#iPriority")

    //hook events
    icon.click(togglePriority);

    //load previous data

}


window.onload=init;