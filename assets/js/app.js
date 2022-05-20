let btn_modal = document.querySelector('.btn_modal')
let btn_close = document.querySelector('.btn_close')
let modal = document.querySelector('.modal')

btn_modal.addEventListener('click', function(){
    modal.classList.add('active')
    btn_close.addEventListener('click', function(){
        modal.classList.remove('active')
    })
})