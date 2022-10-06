const todoInput = $("#todo-form #todo");
todoInput.val("할 일을 입력해주세요").attr('style','color:gray');

const todoButton = todoInput.next();

const todoBoard = $("#todo-board");
todoButton.on("click", addTodo);

const countText = $("#count");
let count = 0;

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

function todoCheck(){
    if($(this).prop("checked")){
    $(this).parent().attr("style","color:lightgray;");
    } else {
        $(this).parent().attr("style","color:black;");
    }

    count = $("#todo-board li input:checked").length;
    countText.html(count);
}

function todoDelete(){
    $(this).parent().remove();

    count = $("#todo-board li input:checked").length;
    countText.html(count);
}
