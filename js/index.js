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
        myLeads.push(tabs[0].url)
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


