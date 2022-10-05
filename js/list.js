const todoInput = $("#todo-form #todo");
todoInput.val("할 일을 입력해주세요").attr('style','color:gray');

const todoButton = todoInput.next();

const todoBoard = $("#todo-board");
todoButton.on("click", addTodo);

function addTodo(){
    const text = todoInput.val();
    const li = $("<li>");
    const checkbox = $("<input>").attr("type","checkbox", "name");
    checkbox.name = "todayCheck";
    const textNode = $("<span>").html(text)
    const button = $("<button>");
    

    li.append(checkbox).append(textNode).append(button);
    todoBoard.append(li);
    todoInput.val("할 일을 입력해주세요").attr('style','color:gray');
    button.html("X");
    checkbox.on("click",todoCheck);
    button.on("click",todoDelete);
}

function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked)
        li.style.color = "lightgray"
    else 
        li.style.color = "black"
}

function todoDelete(e) {
    const li = e.target.parentNode;
    li.remove();
}

    const check = document.querySelector("#checkbox");
    check.addEventListener("click", checkTodayList);

    function checkTodayList(){
        const checkedlist = 'input[name="todayCheck"]:checked';
        const seletChecklist = document.querySelectorAll(checkedlist);
        const seletChecklistCount = seletChecklist.length;
    
        const pTag = document.querySelector("#ptag");
        pTag.innerHTML = `오늘 완료한 할 일 : ${seletChecklistCount} 개`
}

