const mode=document.getElementById("mode");
const navbar=document.getElementById("navbar");
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

document.addEventListener("scroll",(e)=>{
    e.preventDefault();
    console.log("Scrolled....");
    if(window.scrollY>10){
     navbar.style="background-color:#00b243";
    }else{
        navbar.style="background-color:transparent";
    }
})