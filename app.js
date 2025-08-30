const menuBar = document.getElementById("menuBar");
// const menuItems = document.getElementById("menuItems");
const menuMobileVersion = document.getElementById("menuMobileVersion");
const linkOverview = document.getElementById("linkOverview");
const collapseOverview = document.getElementById("collapseOverview");


menuBar.addEventListener("click",()=>{
   menuMobileVersion.innerHTML=`
   <ul id="menuItems">
            <li>About</li>
            <li>contact us</li>
            <li>How to use?</li>
        </ul>`

     menuMobileVersion.classList.toggle("hidden");
});


collapseOverview.addEventListener("click",()=>{
    linkOverview.classList.toggle("hidden");
});
