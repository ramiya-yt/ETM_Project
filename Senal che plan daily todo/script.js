const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'

}

var loginbtn = document.getElementById("login_form");
var regbtn = document.getElementById("reg_form");
var btnswitch = document.getElementById("login_btns");


function reg_switch(){
    loginbtn.style.left = "-400px";
    regbtn.style.left = "50px";
    btnswitch.style.left = "110px";
}

function login_switch(){
    loginbtn.style.left = "50px";
    regbtn.style.left = "450px";
    btnswitch.style.left = "0";
}

//Top Left Logo
document.getElementById('logo-image').src = 'https://i.imgur.com/frY3DFk.png';
