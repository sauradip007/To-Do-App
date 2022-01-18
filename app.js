console.log("Welcome Stranger");
showTasks();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    console.log("button clicked")
  let addTxt = document.getElementById("addTxt");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = []; //taskObj is a global array variable which is initialised as empty when there is no task to add
  } else {
    taskObj = JSON.parse(tasks);
  }
  taskObj.push(addTxt.value); //pushing task
  localStorage.setItem("tasks", JSON.stringify(taskObj));
  addTxt.value = "";
  console.log(taskObj);
  showTasks();
});
function showTasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    taskObj = []; //taskObj is a global array variable which is initialised as empty when there is no task to add
  } else {
    taskObj = JSON.parse(tasks);
  }
  let html = "";
  for (var i = 0; i < taskObj.length; i++) {
    html += `<div  class="taskCard card mx-3 my-3" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Task ${i + 1}</h5>
    <p class="card-text">${taskObj[i]}</p>
    <button id="${i}" onClick="delTask(this.id)" href="#" class="btn btn-primary">Done</button>
     <button id="${i}" onClick = "impTask(this.id)"class="imp my-2 mx-3 btn btn-dark" id="addbtn">Important</button>
  </div>
</div> `;
  }
  let element = document.getElementById("tasks");
  if(taskObj.length != 0)
  {
      element.innerHTML = html;

  }
  else{
      element.innerHTML = "Wooohooo!!.. No tasks to add you're all up to date!"

  }
}

//executing delete func
function delTask(element)
{
    console.log("element to be deleted")
      let tasks = localStorage.getItem("tasks");
      if (tasks == null) {
        taskObj = []; //taskObj is a global array variable which is initialised as empty when there is no task to add
      } else {
        taskObj = JSON.parse(tasks);
      }
      taskObj.splice(element,1);
      localStorage.setItem("tasks",JSON.stringify(taskObj));
      showTasks();
}
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
    let inputVal = searchTxt.value;
    let search = document.getElementsByClassName("taskCard");
    Array.from(search).forEach(function(element){
      let taskTxt = element.getElementsByTagName("p")[0].innerHTML;
      if(taskTxt.includes(inputVal))
      {
        element.style.display = "block";
      }
      else{
        element.style.display = "none";
      }
    })
})


function impTask(index)
{
    let impcard = document.getElementsByClassName("taskCard")[index];
    impcard.style.background = "#00FA9A";
}