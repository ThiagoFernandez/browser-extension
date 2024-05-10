let myLeads = [];
const inputEl= document.querySelector("#input-el");
const inputBtnLink = document.querySelector("#input-btn-link");
const inputBtnText = document.querySelector("#input-btn-text")
const ulEl = document.querySelector("#ul-el");

inputBtnLink.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeadsLink()
} )

function renderLeadsLink(){
    let LinklistItems = "";
    let hrefValue = inputEl.value
    for (let i = 0; i<myLeads.length; i++) {
       // LinklistItems += "<li><a href=' " + myLeads[i] + "'target='_blank'>"+myLeads[i]+"</a></li>"
       LinklistItems += `<li>
                            <a target='_blank' href=' ${myLeads[i]} '>
                                ${myLeads[i]}
                            </a> 
                         </li>`
    }
    ulEl.innerHTML += LinklistItems
}

inputBtnText.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeadsText()
} )

function renderLeadsText(){
    let TextlistItems = "";
    for (let i = 0; i<myLeads.length; i++) {
        TextlistItems += `
                            <li>
                                ${myLeads[i]}
                            </li>
                         `
    }
    ulEl.innerHTML += TextlistItems
}












// /////////////////////////////////////////////////////////////////
// let boxPicker = document.querySelector("#silly-box") 

// boxPicker.addEventListener("click", function(){
//     console.log("I want to open the silly box!")
// })


// const basePrice = 520
// const discount = 120
// let shippingCost= 12
// let shippingTIme= "5-12 days"

// shippingCost = 15
// shippingTIme = "7-14 days"

// let fullPrice = basePrice - discount + shippingCost

// console.log("total cost: "+fullPrice + "it will arrive on "+shippingTIme)





// const container = document.querySelector("#container");
// container.innerHTML = "<button onclick='buy()'>Buy</button>";

// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// }


// const recipient = "james"
// let sender = "thiago"

// const email = `<p> 
//                  hey  ${recipient}!
//                  how is it going? 
//                  cheers  ${sender} 
//                </p>`





// // for (let i = 0; i<myLeads.length; i++) {
// //     const li = document.createElement("li")
// //     li.textContent = myLeads[i]
// //     ulEl.append(li)
// // }