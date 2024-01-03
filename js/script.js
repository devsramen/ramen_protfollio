var asideSection = document.querySelector("#asideSection");
var mainContain = document.querySelector("#mainContain");
var asideSectionHide = document.querySelector("#asideSectionHide");
var asideSectionShow = document.querySelector("#asideSectionShow");

asideSectionHide.addEventListener("click", function(){
    asideSection.style.width = "10%";
    mainContain.style.width = "90%";
    asideSectionHide.style.visibility = "hidden";
    asideSectionShow.style.visibility = "visible";
});

asideSectionShow.addEventListener("click", function(){
    asideSection.style.width = "20%";
    mainContain.style.width = "80%";
    asideSectionHide.style.visibility = "visible";
    asideSectionShow.style.visibility = "hidden";
});
