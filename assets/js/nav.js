const mode=document.getElementById("mode");
const navbar=document.getElementById("navbar");
const menunavbar=document.getElementById("menu-navbar");
const resnavbar=document.getElementById("res-navbar");
menunavbar.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked...")
    if(e.target.name=="menu"){
        e.target.name="close";
        resnavbar.style="margin-top:65px";
    }else{
        e.target.name="menu";
        resnavbar.style="margin-top:-350px";
    }
});
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
        navbar.style="md:background-color:transparent";
    }
})