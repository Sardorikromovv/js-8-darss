let todolist = []
let tr = 1
let allTask = 0
let completeTask = 0

function addTask(){
    let taskName = document.getElementById("taskInput").value
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        }
        todolist.push(obj)
        chizish()
        allTask = todolist.length
        document.getElementById("allTask").innerText = allTask
    }
}
function chizish(){
    let list = ""
    todolist.forEach(function (item){
        list += '<li class="list-group-item">' +
                     '<input'+ (item.complete ? "checked" : "") + 'onchange = "completed(this)" type = "checkbox" id= "'+ item.tartib +'"><label for= "'+ item.tartib +'" class = "ml-3">'+ item.name +'</label>' +
                '</li>'
    })
    document.getElementById("list").innerHTML = list
    document.getElementById("completeTask").innerText = completeTask
    let progress = (completeTask * 100) / allTask
    document.getElementById("progress").style.width = progressW + "%"
}
function completed(input){
    let searchId = input.getAttribute("id")
    let checked = input.getAttribute("checked")
    todolist.forEach(function (item,i){
        if (item.tartib == searchId){
            todolist[i].complete = item.complete ? false : true
        }
    })
    console.log(checked)
    if (checked == null){
        completeTask++
    }else{
        completeTask--
    }
    chizish()
}


































