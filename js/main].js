let users = [
    {
        login:"mk416",
        password:"12345"
    }
]

$(document).ready(function (){
    $(".btn-success").click(function (){
        let login = $("#login").val()
        let password = $("#password").val()
        let num = false



    })

    $(".btn-link").click(function (){
        let login = $("#login").val()
        let password = $("#password").val()
        let num = false

        if (login == ''){
            alert("login qatorini toldiring!")
        }
        else if (password == ''){
            alert("parol qatorini toldiring!")
        }
        else {
            if (users.length !=0){
                users.forEach(function (item){
                    if (login == item.login){
                        num = true
                    }
                })
                if (num){
                    alert("Bunday user mavjud!")
                }
                else {
                    alert("Zor siz royxatdan ottingiz!")
                }
            }
            else {
                users.push({login: login, password: password})
            }
            console.log(users)
        }
    })

    $(".btn-light").on("mousedown",function (){
        let attr = $("#password").attr("type")
        $("#password").attr("type","text")
        $(".fa").toggleClass("fa-eye fa-eye-slash")
        $("#password").css('border-color','red')
    })
    $(".btn-light").on("mouseup",function (){
        let attr = $("A")
    })
})



















