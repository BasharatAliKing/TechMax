const questionone=document.querySelector("#question-1");
const questiontwo=document.querySelector("#question-2");
const questionthree=document.querySelector("#question-3");
const questionfour=document.querySelector("#question-4");
const questionfive=document.querySelector("#question-5");
const questionsix=document.querySelector("#question-6");
const iconplusone=document.getElementById("icon-plusone");
const iconplustwo=document.getElementById("icon-plustwo");
const iconplusthree=document.getElementById("icon-plusthree");
const iconplusfour=document.getElementById("icon-plusfour");
const iconplusfive=document.getElementById("icon-plusfive");
const iconplussix=document.getElementById("icon-plussix");


questionone.addEventListener("click",(e)=>{
    e.preventDefault();
    var textelement=document.createElement("p");
    var textelementNode=document.createTextNode("mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.");
    textelement.appendChild(textelementNode);
    var paraone=document.querySelector(".para-1");
    var paratwo=document.querySelector(".para-2");
    var parathree=document.querySelector(".para-3");
    var parafour=document.querySelector(".para-4");
    var parafive=document.querySelector(".para-5");
    var parasix=document.querySelector(".para-6");
    
    if(questionone.className==="border w-full border-green p-3 mb-auto"){
    iconplusone.className="fa-solid fa-minus ml-auto font-bold";
    iconplustwo.className="fa-solid fa-plus ml-auto font-bold";
    iconplusthree.className="fa-solid fa-plus ml-auto font-bold";
    iconplusfour.className="fa-solid fa-plus ml-auto font-bold";
    iconplusfive.className="fa-solid fa-plus ml-auto font-bold";
    iconplussix.className="fa-solid fa-plus ml-auto font-bold";
    questionone.className="border w-full border-green p-3 mb-auto ";
    questiontwo.className="border w-full border-green p-3 mb-auto";
    questionthree.className="border w-full border-green p-3 mb-auto";
    questionfour.className="border w-full border-green p-3 mb-auto";
    questionfive.className="border w-full border-green p-3 mb-auto";
    questionsix.className="border w-full border-green p-3 mb-auto";
    questionone.appendChild(textelement);
    textelement.className="para-1";
    paratwo.remove();
    parathree.remove();
    parafour.remove();
    parafive.remove();
    parasix.remove();
    }else{
        questionone.className="border w-full border-green p-3 mb-auto";
        iconplusone.className="fa-solid fa-plus ml-auto font-bold";
        paraone.remove();
    }

});
questiontwo.addEventListener("click",(e)=>{
    e.preventDefault();
    var textelement=document.createElement("p");
    var textelementNode=document.createTextNode("mhmd, Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table.");
    textelement.appendChild(textelementNode);
    var paraone=document.querySelector(".para-1");
    var paratwo=document.querySelector(".para-2");
    var parathree=document.querySelector(".para-3");
    var parafour=document.querySelector(".para-4");
    var parafive=document.querySelector(".para-5");
    var parasix=document.querySelector(".para-6");
    
    if(questiontwo.className==="border w-full border-green p-3 mb-auto"){
    iconplustwo.className="fa-solid fa-minus ml-auto font-bold";
    iconplusone.className="fa-solid fa-plus ml-auto font-bold";
    iconplusthree.className="fa-solid fa-plus ml-auto font-bold";
    iconplusfour.className="fa-solid fa-plus ml-auto font-bold";
    iconplusfive.className="fa-solid fa-plus ml-auto font-bold";
    iconplussix.className="fa-solid fa-plus ml-auto font-bold";
    questiontwo.className="border w-full border-green p-3 mb-auto ";
    questionone.className="border w-full border-green p-3 mb-auto";
    questionthree.className="border w-full border-green p-3 mb-auto";
    questionfour.className="border w-full border-green p-3 mb-auto";
    questionfive.className="border w-full border-green p-3 mb-auto";
    questionsix.className="border w-full border-green p-3 mb-auto";
    questiontwo.appendChild(textelement);
    textelement.className="para-2";
    paraone.remove();
    parathree.remove();
    parafour.remove();
    parafive.remove();
    parasix.remove();
    }else{
        questiontwo.className="border w-full border-green p-3 mb-auto";
        iconplustwo.className="fa-solid fa-plus ml-auto font-bold";
        paratwo.remove();
    }
});
questionthree.addEventListener("click",(e)=>{
   e.preventDefault();
    if(questionthree.className==="border w-full border-green p-3 mb-auto"){
       iconplusthree.className="fa-solid fa-minus ml-auto font-bold";
       questionthree.className==="border w-full border-green p-3 mb-auto open";
   }else{
    questionthree.className==="border w-full border-green p-3 mb-auto"
    iconplusthree.className="fa-solid fa-plus ml-auto font-bold";
   }
});
