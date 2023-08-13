const anchorTagsList=Array.from(document.querySelectorAll(".navAnchorTags"));
const anchorTagsListDrower=Array.from(document.querySelectorAll(".drowerAnchorTags"));

const anchorTagsContainers=Array.from(document.querySelectorAll(".arrowTagsContainer"));

const humbergerIcon=document.querySelector("#humbergerIcon");
const drowerContentContainer=document.querySelector(".drowerContentContainer");

const drowerCloseIconContainer=document.querySelector(".DrowerCloseIcon");
const closeIcon=document.querySelector(".closeIcon");





  // const productTag=anchorTagsList[0];
  // const companyTag=anchorTagsList[1];
  // const contactTag=anchorTagsList[2];

  // const productTagsContainer=anchorTagsContainers[0];
  // const companyTagsContainer=anchorTagsContainers[1];
  // const connectTagsContainer=anchorTagsContainers[2];



//   dices.forEach(dice => {
//     dice.addEventListener('click', function handleClick(event) {
//         var dcount = dice.getAttribute("data-dice");
//         document.querySelectorAll('.dice_' + dcount + '_input')[0].classList.add('active');
//         dice.classList.add('active');
//         changeInput(dcount);
//     });
// });


// =========Smallest way to show dropdown menus of all tags ======
const AnchorTagsEventListening=()=>{

  anchorTagsList.forEach(anchorTag =>{
    anchorTag.addEventListener("click",(event)=>{
      event.preventDefault();

      // =================Firstly set an attribute of tag which is the id of container which we want to acess===================
      let getId = anchorTag.getAttribute('data-id');

      // =============After setting id now we have acess to that container by their id now we get that container by id and add class showTagsContainer so in this case that container will be shown 

      document.getElementById(getId+"TagsContainer").classList.toggle("showArrowTagsContainer");

      document.getElementById(getId+"Icon").classList.toggle("active");
      
    });


  });
}

AnchorTagsEventListening();


// =======================Handling humburger icon event listener ======

const drowerAnchorTagsToggling=()=>{
  anchorTagsListDrower.forEach(drowerAnchor =>{
    drowerAnchor.addEventListener("click",(event)=>{
      
      const getId=drowerAnchor.getAttribute("data-id");
      document.getElementById(`${getId}Icon`).classList.toggle("active");
      document.getElementById(`${getId}TagsContainer`).classList.toggle("showArrowTagsContainerDrower");

    })





  })
}
humbergerIcon.addEventListener("click", () => {
  if (drowerContentContainer.classList.contains("showDrower")) {
    // Drawer is open, so close it
    drowerContentContainer.classList.remove("showDrower");
    humbergerIcon.setAttribute("src", "./images/icon-hamburger.svg");
  } else {
    // Drawer is closed, so open it
    drowerContentContainer.classList.add("showDrower");
    humbergerIcon.setAttribute("src", "./images/icon-close.svg");
  }
});

drowerAnchorTagsToggling();

 


