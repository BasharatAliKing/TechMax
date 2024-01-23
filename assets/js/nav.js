const mode=document.getElementById("mode");
const navbar=document.getElementById("navbar");
const menunavbar=document.getElementById("menu-navbar");
const resnavbar=document.getElementById("res-navbar");
const mainscreen=document.getElementById("screen");
const navlogo=document.getElementById("nav-logo");
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
   // console.log(e.target.name);
    if(e.target.name=="sunny"){
        e.target.name="moon";
      //  e.target.body.style="background-color:white";
        mainscreen.className="light";
        navlogo.innerHTML="<img src='/assets/images/Logo.png' alt=''>";
    }
    else{
        e.target.name="sunny";
        mainscreen.className="dark";
        navlogo.innerHTML="<img src='/assets/images/Logo_white.png' alt=''>";
    }
});

document.addEventListener("scroll",(e)=>{
    e.preventDefault();
    console.log("Scrolled....");
    if(window.scrollY>10){
     navbar.style="background-color:#00b243";
     navlogo.innerHTML="<img src='/assets/images/Logo_Dark_Blue.png' alt=''>";
    }else{
        navbar.style="md:background-color:transparent";
        navlogo.innerHTML="<img src='/assets/images/Logo_white.png' alt=''>";
    }
})