const vForm = document.getElementById('cv_form')
const AboutME = document.getElementById('about_me')
const mapAnime = document.getElementById('map_anime');
AboutME.addEventListener('click', function(event) {
    if (event) {
        vForm.classList.toggle('display_none')
        mapAnime.classList.toggle('display_none')
        goalBox.classList.add('display_none')

    }


});
const goalBox = document.querySelector('.goal_box')

function goals() {
    goalBox.classList.toggle('display_none')
    vForm.classList.add('display_none')
    mapAnime.classList.toggle('display_none')
}




const form1 = document.getElementById('form1');
const inputName = document.querySelector('#fname[name="fname"]');
const inputEmail = document.querySelector('input[name="email"]');
const submit2 = document.getElementById('btn')
const nameLabel = document.getElementById('name_label')
const errori = document.getElementById('errori');
const emailerror = document.getElementById('email_eror');
const helloName = document.getElementById('hello')


form1.addEventListener('submit', function(event) {
    event.preventDefault();
    helloName.textContent = '';
    emailerror.textContent = '';
    errori.textContent = '';
    if (inputName.value) {

        helloName.textContent = 'გამარჯობა ' + inputName.value


    } else {

        errori.textContent = 'ქთხოვთ შეიყვანოთ სახელი'

    }
    if (inputEmail.value) {

    } else {
        emailerror.textContent = inputName.value + ' ქთხოვთ შეიყვანეთ მეილი'
    }
})

const burgerMEnu = document.getElementById('btn_burger')
const navUl = document.querySelector('.nav_ul')
burgerMEnu.addEventListener('click', function(event) {
        if (event) {
            navUl.classList.toggle('display_none2')
        }
    })
    // burgerMEnu.addEventListener('click', function(event) {
    //     if (event) {
    //         navUl.classList.toggle('displey_none2')
    //     }
    // })