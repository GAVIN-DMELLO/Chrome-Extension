
let myLeads = ["www.example.ccom"];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
console.log(ulEl);


const inputBtn  = document.getElementById("input-btn");

inputBtn.addEventListener("click" , function(){
  console.log("button clicked");
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads" , JSON.stringify(myLeads));
  console.log(myLeads);
  renderLeads();

  console.log(localStorage.getItem("myLeads"));
})


function renderLeads(){
  let listItems = ""
  for(let i=0 ; i<myLeads.length ; i++){

    listItems += `
    <li>
      <a href="${myLeads[i]}" target="_blank">
        ${myLeads[i]}
      </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}


