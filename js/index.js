var currentSection;

function addListenerForMobileNav(){
    let mobileNavBu=document.querySelector(".navBar__mobileNavButton");
    mobileNavBu.addEventListener('click',(event)=>{
        switchMobileNav();
    });
}

function switchMobileNav(){
    mobileNav = document.querySelector(".mobileNav");
    if(mobileNav.classList.contains("hide")){
        mobileNav.classList.remove("hide");
        mobileNav.classList.add("show");
    }else{
        mobileNav.classList.remove("show");
        mobileNav.classList.add("hide");
    }
}

window.onresize = function(){
    mobileNav = document.querySelector(".mobileNav");
    if(window.screen.width>1000 && mobileNav.classList.contains("show"))
        switchMobileNav();
}

window.onload = function(){
    location.hash = "#home";
    switchSection(".homeSection");
    addListenerForMobileNav();
}

window.onhashchange = function(){
    let hash = location.hash;
        
    switch(hash){
        case "#home":
            switchSection(".homeSection");
            break;
        case "#resume":
            switchSection(".resumeSection");
            break;
    }
}

function switchSection(sectionClass){
    if(currentSection !== undefined){
        currentSection.classList.remove("showingPage");
        currentSection.classList.add("disappearingSection");
    }

    currentSection = document.querySelector(sectionClass);
    currentSection.classList.remove("disappearingSection");
    currentSection.classList.add("showingPage");
}