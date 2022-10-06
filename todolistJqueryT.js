const todoForm = $("#todo-form");
const todoInput = $("#todo-form #todo-input");

const countText = $("#count");
let count = 0;

// let 과 const는 수정할 수 있고 수정할 수 없다는 뜻임
// 오류가 났을 떄 "constant"가 뜨면 const오류 
// DOM객체는 -> const 많이 쓰고, let은 일반 변수를 담을 때 
// 상수 = 변치 않는 수 (: const) 

todoForm.on("submit", todoAdd);

function todoAdd(e){
    e.preventDefault();

    const li = $("<li>");
    const checkbox = $("<input>");
    checkbox.attr("type","checkbox");
    const button = $("<button>");
    button.html("X");

    li.append(checkbox).append(todoInput.val()).append(button);

    $("#todo-board").append(li);

    todoInput.val("");

    checkbox.on("click", todoCheck);
    button.on("click", todoDelete);
}

function todoCheck(){
    // attr : html태그에 직접 붙는 속성
    // prop : html객체가 가지고 있는 속성
    if($(this).prop("checked")){
    // this 이벤트 타겟을 대신해서 현재 클릭된 돔을 대신 할수있음.
    // attr 속성을 가져올 때 
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