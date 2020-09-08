var currentSection;

window.onload = function(){
    location.hash = "#home";
    switchSection(".homeSection");
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