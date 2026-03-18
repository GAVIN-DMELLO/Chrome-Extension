
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
console.log(ulEl);


const inputBtn  = document.getElementById("input-btn");

inputBtn.addEventListener("click" , function(){
  console.log("button clicked");
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
  renderLeads();
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


