// 투두 입력 폼을 가져와서 submit(이벤트)을 눌렀을 때, 함수실행
const todoForm = document.querySelector("#todo-form");

// 투두 입력 DOM 가져오기
const todoInput = document.querySelector("#todo-form #todo-input");

// 완료한 할 일 DOM 가져오기
const countText = document.querySelector("#count"); // html span에 접근해서 돔가져오기
// 완료한 할일 변수
let count = 0;

// todoForm에 submit 이벤트 발생시, 함수 추가 
todoForm.addEventListener("submit", todoAdd);

// 실행될 함수 작성
function todoAdd(e){
    // 주의할점 : + 누르면 새로고침 깜빡임 
    // submit 기존의 이벤트를 지워야 함 ㄱ
    e.preventDefault();
    // 요소 생성 
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createTextNode(todoInput.value);
    const button = document.createElement("button");
    button.innerHTML = "X";

    // 요소를 li안에 추가 
    li.append(checkbox);
    li.append(text);
    li.append(button);

    // todo-board에 li요소를 추가 
    document.querySelector("#todo-board").append(li);
    
    // todoInput의 값을 비우기
    todoInput.value = "";

    // checkbox에 클릭 이벤트 - text 색상 회색
    checkbox.addEventListener("click",todoCheck); // todocheck는 안에 밖에 상관없이 만들수있음
    // button에 클릭 이벤트 -  li 삭제
    button.addEventListener("click", todoDelete);

}

function todoCheck(e) { 
    //체크표시가 되면 text의 색상을 회색으로 바꿈
    //체크박스에서 체크여부 알수있음
    //console.dir(e.target);
    if(e.target.checked){
        e.target.parentNode.style.color = "lightgray";
        // count 값을 1증가 
        count++; //=> 이렇게 하면 html은 바뀌는 게 없음 그래서 span태그에 접근해야함 
        countText.innerHTML = count;
    } else {
        e.target.parentNode.style.color ="black";
        // count 값을 1감소
        count--;
        countText.innerHTML = count; //=> 이렇게만 하면 삭제가 안됨 
    }
}

function todoDelete(e){
    if(e.target.parentNode.firstChild.checked){ //=> 그래서 삭제 할 떄 컬러보다 체크박스를 찾아가야함
        count--;
        countText.innerHTML = count;
    } 
    e.target.parentNode.remove();
}