const menuBar = document.getElementById("menuBar");
// const menuItems = document.getElementById("menuItems");
const menuMobileVersion = document.getElementById("menuMobileVersion");
const linkOverview = document.getElementById("linkOverview");
const collapseOverview = document.getElementById("collapseOverview");
const addLink = document.querySelector(".add-link-btn");
const contentSection = document.querySelector(".content-section");
const inputBox = document.querySelectorAll(".input-box");
const allCategory = document.querySelector("allCategory");

menuBar.addEventListener("click", () => {
  menuMobileVersion.innerHTML = `
   <ul id="menuItems">
   <li>About</li>
   <li>contact us</li>
            <li>How to use?</li>
            </ul>`;
            
            menuMobileVersion.classList.toggle("hidden");
});

collapseOverview.addEventListener("click", () => {
  collapseOverview.style.display = "none";
  linkOverview.style.display = "block";
  linkOverview.innerHTML =`<ul>
  <span class="collapse-off" id="collapseOff">&#8676;</span>
  ${categoryName.map(item=>`<li ><a  href="">${item}</a></li>`).join("")}
  </ul>`
  
  const collapseOff = document.getElementById("collapseOff");

        collapseOff.addEventListener("click", () => {
            linkOverview.style.display = "none";
          collapseOverview.style.display = "block";
        });
});




addLink.addEventListener("click", () => {
    contentSection.innerHTML = `<div class="add-link-container">
    
    <!-- Link, Name for saving in specific category  -->
            
    <label >Name of category</label>
    <input type="text" class="input-box" id="inputCategory" placeholder="Enter category (e.g. Podcast, Tool)" required>
            <!-- enter link to save on local storage with category format. -->
            <label>Paste your link</label>
            <input type="text" class="input-box" id="inputLink" placeholder="Enter Your Link (e.g link2save.com)" required>
            
            <!-- some comment to knowing what that url for what the use of that. -->
            <label>comment to know what the link does!</label>
            <textarea name="" id="inputComment" placeholder="Enter something about the link"></textarea>
            
            <button id="saveLinkBtn">Save The Link</button>

            <span class="error">please enter all the detail of your link to save</span>
            
            </div>`;
            
            
                    
                    const inputCategory = document.getElementById("inputCategory");
                    const inputLink = document.getElementById("inputLink");
                    const inputComment = document.getElementById("inputComment");
                    const saveLinkBtn = document.getElementById("saveLinkBtn")
                    
                    
                    
            
                    saveLinkBtn.addEventListener("click", () => {
                        const category = inputCategory.value.trim();
                        const link = inputLink.value.trim();
                const comment = inputComment.value.trim();
                
                
                let error = document.querySelector(".error");
                if (!category || !link) {
                    error.style.display="block"
                    return;
                } else {
                    error.style.display="none"
                }

                let allData = JSON.parse(localStorage.getItem("allData")) || [];
                
                const linkData = {
                   category: category,
                   comment: comment,
                   link: link
                  };
                  
                allData.push(linkData);
                
                localStorage.setItem("allData",JSON.stringify(allData));

   
                
                
                document.querySelector(".add-link-container").style.display="none"
                 
                 let savedMsg = document.querySelector(".saved-message");
                 savedMsg.style.display = "block";
                
                 setTimeout(() => {
                    savedMsg.style.display = "none";
                 }, 5000);
 
                
                
            });
        });
        
        

const savedData =JSON.parse(localStorage.getItem("allData"))||[];



console.log(savedData)

savedData.map((item, index) => {
 contentSection.innerHTML+=`<div class="all-links">
 <div class="link-box">
    <h1>${item.category}</h1>
    <p>${item.comment}</p>
    <a href="${item.link}" target="_blank">${item.link}</a>
  </div>
  </div>
 `
});



const categoryName = [...new Set(savedData.map(item => item.category))];
console.log(categoryName)

let category = document.getElementById("navCategory");




