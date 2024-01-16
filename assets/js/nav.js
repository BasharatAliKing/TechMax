const mode=document.getElementById("mode");
mode.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e.target.name);
    if(e.target.name=="sunny"){
        e.target.name="moon";
        e.target.body.style="background-color:white";
    }
    else{
        e.target.name="sunny";
    }
});