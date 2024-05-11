let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtnLink = document.querySelector("#input-btn-link");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-el");
const tabBtn = document.querySelector("#tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].URL)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })    
})


function render(leads) {
    let LinklistItems = "";
    for (let i = 0; i < leads.length; i++) {
        LinklistItems += `<li>
                            <a target='_blank' href='${leads[i]}'>
                                ${leads[i]}
                            </a> 
                         </li>`;
    }
    ulEl.innerHTML = LinklistItems; 
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtnLink.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});


// inputBtnText.addEventListener("click", function(){
//     myLeads.push(inputEl.value)
//     inputEl.value=""
//     renderLeadsText()
// } )

// function renderLeadsText(){
//     let TextlistItems = "";
//     for (let i = 0; i<myLeads.length; i++) {
//         TextlistItems += `
//                             <li>
//                                 ${myLeads[i]}
//                             </li>
//                          `
//     }
//     ulEl.innerHTML += TextlistItems
// }










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