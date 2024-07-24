//Mobile Menu

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMEnuBtn = document.getElementById("closeMenu");

function openMenu() {
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
  hamburger.classList.add("hidden");
  closeMEnuBtn.classList.remove("hidden");
  closeMEnuBtn.classList.add("flex");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  hamburger.classList.remove("hidden");
  closeMEnuBtn.classList.add("hidden");
}

hamburger.addEventListener("click", openMenu);
closeMEnuBtn.addEventListener("click", closeMenu);


//Bookmark icon
const bookmarkButton = document.getElementById("bookmark");
const bookmarkIcon = document.getElementById("bookmarkIcon");

function toggleBookmark() {
  if (bookmarkButton.innerHTML === "Bookmark") {
    bookmarkButton.innerHTML = "Bookmarked";
    bookmarkButton.classList.add("text-ModerateCyan");
    bookmarkIcon.classList.add("bg-DarkCyan");
  } else {
    bookmarkButton.innerHTML = "Bookmark";
    bookmarkButton.classList.remove("text-ModerateCyan");
    bookmarkIcon.classList.remove("bg-DarkCyan");
  }
}

bookmarkIcon.addEventListener("click", toggleBookmark);

//Modal

const backThisProject = document.getElementById("backThisProject");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");
const bambooDesktop = document.getElementById('bambooDesktop');
const blackDesktop = document.getElementById('blackStandDesktop');


function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

backThisProject.addEventListener("click", openModal);
bambooDesktop.addEventListener("click", openModal);
blackDesktop.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

//Pledges

const bambooMain = document.getElementById("bambooStandMain");
const bambooPledge = document.getElementById("bambooStandPledge");
const bambooRadio = document.getElementById("bambooRadio");

function toggleBambooPledge() {
  if (bambooRadio.checked) {
    bambooRadio.checked = false;
    bambooPledge.classList.add("hidden");
  } else {
    bambooRadio.checked = true;
    bambooPledge.classList.remove("hidden");
  }
}

bambooMain.addEventListener("click", toggleBambooPledge);

const blackMain = document.getElementById("blackStandMain");
const blackPledge = document.getElementById("blackStandPledge");
const blackRadio = document.getElementById("blackRadio");

function toggleBlackPledge() {
  if (blackRadio.checked) {
    blackRadio.checked = false;
    blackPledge.classList.add("hidden");
  } else {
    blackRadio.checked = true;
    blackPledge.classList.remove("hidden");
  }
}

blackMain.addEventListener("click", toggleBlackPledge);


bambooMain.addEventListener("click", toggleBambooPledge);

const noReward = document.getElementById("noRewardStand");
const noRewardRadio = document.getElementById("noRewardRadio");

function toggleNoRewardPledge() {
  if (noRewardRadio.checked) {
    noRewardRadio.checked = false;
  } else {
    noRewardRadio.checked = true;
  }
}

noReward.addEventListener("click", toggleNoRewardPledge);

//ThankYou modal

const bambooStandContinue = document.getElementById('bambooStandContinue');
const blackStandContinue = document.getElementById('blackStandContinue');
const thankYouModal = document.getElementById('thankYouModal');

function completedModal(){
    thankYouModal.classList.remove('hidden');
    modal.classList.add('hidden');
}

bambooStandContinue.addEventListener('click', completedModal);
blackStandContinue.addEventListener('click', completedModal);

//Clear all modals

const gotItBtn = document.getElementById('gotItBtn');

function clearModals(){
    thankYouModal.classList.add('hidden');
    modal.classList.add('hidden');
}

gotItBtn.addEventListener("click", clearModals);