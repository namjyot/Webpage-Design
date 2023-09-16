const mNav = document.getElementById("mNav");
const hamToggle = () => {
    if(mNav.className === "nav hidden md:hidden"){
        mNav.className = "nav md:block";
    }
    else{
        mNav.className = "nav hidden md:hidden";
    }
}