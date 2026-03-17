
let myLeads = [];
const inputEl = document.getElementById("input-el");


const inputBtn  = document.getElementById("input-btn");

inputBtn.addEventListener("click" , function(){
  console.log("button clicked");
  myLeads.push(inputEl.value);
  console.log(myLeads);
  for(let i=0 ; i<myLeads.length ; i++){
  console.log(myLeads[i]);
}
})

