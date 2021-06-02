// ID'et "show-opret" findes, og når den klikkes på, tilføjer den "Active" class'en, //
// som får Popupet frem på skærmen, da den nye lokation følger "Active" //

document.querySelector("#show-opret").addEventListener("click",function(){
    document.querySelector(".popup-opret").classList.add("active")
});

// Her fjerner den det igen //

document.querySelector(".popup-opret .close-btn").addEventListener("click",function(){
    document.querySelector(".popup-opret").classList.remove("active")
});

// ID'et "show-login" findes, og når den klikkes på, tilføjer den "Active" class'en, //
// som får Popupet frem på skærmen, da den nye lokation følger "Active" //

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup-login").classList.add("active")
});

// Her fjerner den det igen //

document.querySelector(".popup-login .close-btn").addEventListener("click",function(){
    document.querySelector(".popup-login").classList.remove("active")
});