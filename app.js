// Global Variable
let myBalance = document.getElementById("my-balance");
// Donation and history button portion

let history = document.getElementById("history");
let donation = document.getElementById("donation");
let card = document.getElementById("card");
let time = document.getElementById("time");
let bottomNav = document.getElementById("bottomNav")

history.addEventListener("click", function (event) {
  card.classList.add("hidden");
  time.classList.remove("hidden");
  history.style.backgroundColor = '#B4F461'
  donation.style.backgroundColor = '#FFFFFF'
  bottomNav.classList.remove('hidden')

  
});

donation.addEventListener("click", function (event) {
  card.classList.remove("hidden");
  time.classList.add("hidden");
  donation.style.backgroundColor = '#B4F461'
  history.style.backgroundColor = '#FFFFFF'
  bottomNav.classList.add('hidden')

});

// Reuseable function
function alertFunction() {
  alert("Invalid input");
}

// For Noakhali Doantion
let feniMoneyInitial = document.getElementById("feni-money-initial");
let feniInput = document.getElementById("feni-input");
let feniBtn = document.getElementById("feni-btn");


feniBtn.addEventListener("click", function (event) {
  if (feniInput.value !== "") {
    if (isNaN(feniInput.value) === true || parseInt(feniInput.value) < 0) {
      // alert('Invalid input')
      alertFunction();
      feniInput.value = "";
    } else {
      if (parseInt(feniInput.value) > parseInt(myBalance.innerText)) {
        alert("Insufficient balance");
        feniInput.value = "";
      } else {
        document.remo;
        feniMoneyInitial.innerText =
          parseInt(feniMoneyInitial.innerText) + parseInt(feniInput.value);
        myBalance.innerText =
          parseInt(myBalance.innerText) - parseInt(feniInput.value);

        document.getElementById("my_modal_1").showModal();
        time.innerHTML += `<div class="lg:w-[1140px] mb-4 mx-4 lg:h-[136px] h-auto border-2 lg:mx-auto rounded-xl py-8 pl-4">
        <p class="text-xl font-bold ">${feniInput.value} Taka is Donated for Flood at Noakhali, Bangladesh</p>
        <p class="font-light pt-4">Date : ${Date()}</p>
      </div>`;
      feniInput.value = "";
      }
    }
  }
});
// For feni Donation
let noalkhaliMoneyInitial = document.getElementById("noakhali-money-initial");
let noakhaliInput = document.getElementById("noakhali-input");
let noakhaliBtn = document.getElementById("noakhali-btn");

noakhaliBtn.addEventListener("click", function (event) {
  if (noakhaliInput.value !== "") {
    if (
      isNaN(noakhaliInput.value) === true ||
      parseInt(noakhaliInput.value) < 0
    ) {
      // alert('Invalid input')
      alertFunction();
      noakhaliInput.value = "";
    } else {
      if (parseInt(noakhaliInput.value) > parseInt(myBalance.innerText)) {
        alert("Insufficient balance");
        noakhaliInput.value = "";
      } else {
        noalkhaliMoneyInitial.innerText =
          parseInt(noalkhaliMoneyInitial.innerText) +
          parseInt(noakhaliInput.value);
        myBalance.innerText =
          parseInt(myBalance.innerText) - parseInt(noakhaliInput.value);
          time.innerHTML += `<div class="lg:w-[1140px] mb-4 mx-4 lg:h-[136px] h-auto border-2 lg:mx-auto rounded-xl py-8 pl-4">
          <p class="text-xl font-bold ">${noakhaliInput.value} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
          <p class="font-light pt-4">Date : ${Date()}</p>
        </div>`;
        noakhaliInput.value = "";
        document.getElementById("my_modal_1").showModal();
      }
    }
  }
});

// For quota Movement
let quotaMoneyInitial = document.getElementById("quota-initial-value");
let quotaInput = document.getElementById("quota-input");
let quotaBtn = document.getElementById("quota-btn");

quotaBtn.addEventListener("click", function (event) {
  if (quotaInput.value !== "") {
    if (isNaN(quotaInput.value) === true || parseInt(quotaInput.value) < 0) {
      alertFunction();
      quotaInput.value = "";
    } else {
      if (parseInt(quotaInput.value) > parseInt(myBalance.innerText)) {
        alert("Insufficient balance");
        quotaInput.value = "";
      } else {
        quotaMoneyInitial.innerText =
          parseInt(quotaMoneyInitial.innerText) + parseInt(quotaInput.value);
        myBalance.innerText =
          parseInt(myBalance.innerText) - parseInt(quotaInput.value);
          time.innerHTML += `<div class="lg:w-[1140px] mb-4 mx-4 lg:h-[136px] h-auto border-2 lg:mx-auto rounded-xl py-8 pl-4">
          <p class="text-xl font-bold ">${quotaInput.value} Taka is Donated for Aid for Injured in the Quota Movement</p>
          <p class="font-light pt-4">Date : ${Date()}</p>
        </div>`;
        quotaInput.value = "";
        document.getElementById("my_modal_1").showModal();
      }
    }
  }
});

// Navbar blur
let nav = document.getElementById("nav")



window.addEventListener("scroll", function(){
    
    if(window.scrollY !== 0){
        console.log(window.screenY)
        donationHistory.classList.remove('bg-white')
        div.classList.remove('bg-navColor')
        nav.classList.add("backdrop-blur-3xl")
        nav.classList.add("bg-opacity-0")
    }
    else{
        div.classList.add('bg-navColor')
    }
})