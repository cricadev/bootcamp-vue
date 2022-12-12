let count = 0;
const countHeader = document.querySelector("#count")
const addBtn = document.querySelector("#add")
const restBtn = document.querySelector("#rest")

countHeader.innerText = count;

addBtn.addEventListener("click", () => {
  count++;
  countHeader.innerText = count;
  if(count < 1){
    restBtn.setAttribute('disabled', '')
    count = 0;
    countHeader.innerText = count;
    
  }
  else{
    restBtn.removeAttribute('disabled')
  }
})
restBtn.addEventListener("click", () =>{
  count--;
  countHeader.innerText = count;
  if(count < 1){
    restBtn.setAttribute('disabled', '')
    count = 0;
    countHeader.innerText = count;
    
  }
  else{
    restBtn.removeAttribute('disabled')
  }
})
