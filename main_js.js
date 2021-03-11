let Task = [];
if (localStorage != "null") {
  Task = JSON.parse(localStorage.getItem("Task") || "[]");

}
var today = new Date();
var now_d = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
var now_t = today.getHours() + ":" + today.getMinutes();

var today = new Date();
var now_d = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
var now_t = today.getHours() + ":" + today.getMinutes();
function save_task() {

  let theTask = document.getElementById("new_task");
  let saveDate = document.getElementById("date");
  let saveTime = document.getElementById("time");

  if ((theTask.value == "") || (saveDate == "") || (saveTime.value == "")) {
    alert("u must fill all inputs");
    return
  }
  else {
    let tesk_obj = {
      task: theTask.value,
      date: saveDate.value,
      time: saveTime.value,
    };

    Task.push(tesk_obj);
location.reload();
  }
  let json = JSON.stringify(Task);
  localStorage.setItem("Task", json);
  

}
function read_local() {

  for (var i = 0; i < Task.length; i++) {
    if (Task[i].date <= now_d) {
      if (now_t > Task[i].time) {
        deleteitme(i);
        break;
      }
    }
    const task_info = '<div  ><textarea id=id_text>' + Task[i].task + '</textarea></div>' + '<p style="height:10px;padding: auto;">' + Task[i].date + "</p>" + "<p>" + Task[i].time + "</p>";
    create_note(task_info, i);

  }
}
function create_note(task_info, i) {
  let div = document.createElement("div");
  div.className = "new_note";
  div.innerHTML = '<button class="btn-close" id="btn" name="btn" onclick="deleteitme( this  ,' + i + ')"> </button>' + task_info;
  let d = document.getElementById("notebook");

  document.body.appendChild(div);

}

function deleteitme(a,e) {
  
      Task.splice(e, 1);
      let json = JSON.stringify(Task);
      localStorage.setItem("Task", json);
      removechild(a)
  
}
function removechild(e) {
  e.parentNode.parentNode.removeChild(e.parentNode);

}
 






