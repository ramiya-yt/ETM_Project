const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI" || e.target.matches(".task_head") || e.target.matches(".task_des")) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else {
            e.target.closest("li").classList.toggle("checked");
        }
        saveData();
    }
}, false);




function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
 function showTask(){
     listContainer.innerHTML = localStorage.getItem("data");

}
showTask();
