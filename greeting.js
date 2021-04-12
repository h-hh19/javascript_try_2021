const form = document.querySelector(".js-form"),
        input = form.querySelector("input"),
        greeting = document.querySelector(".js-greetings");

        const USER_LS = "currentUser",
        SHOWING_CN ="showing";

        function saveName(text){
            localStorage.setItem(USER_LS, text);
        }

        function handleSubmit(event){
            event.preventDefault();
            const currentvalue = input.value;
            paingGreeting(currentvalue);
            saveName(currentvalue);
        }

        function askForName(){
            form.classList.add(SHOWING_CN);
            form.addEventListener("submit",handleSubmit);

        }

        function paingGreeting(text){
            form.classList.remove(SHOWING_CN);
            greeting.classList.add(SHOWING_CN);
            greeting.innerText = `안녕하세요 ${text}님`;
        }

        function loadName(){
            const currentUser = localStorage.getItem(USER_LS);

            if(currentUser === null){
                    // 유저가 없는 경우
                    askForName();
            }else{
                    //유저가 있는 경우
                    paingGreeting(currentUser);
            }
        }

function init(){
    loadName();
}

init();