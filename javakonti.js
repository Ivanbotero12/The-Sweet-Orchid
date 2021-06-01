// ID'et "show-login" findes, og når den klikkes på, tilføjer den "Active" class'en, //
// som får Popupet frem på skærmen, da den nye lokation følger "Active" //

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active")
});

// Her fjerner den det igen //

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active")
});