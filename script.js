// Functions
const load = () =>{
  emailListElm.innerHTML = ''
  
  for(let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) =>{
    const email = res.data.response
    emailListElm.innerHTML += `<li>${email}</li>`
  })
}
}

// DOM Elements
const emailListElm = document.getElementById('email-list')
const btnReloadElm = document.getElementById('btn-reload')

// DOM Events
// On Page Load
load()

// On Click
btnReloadElm.addEventListener("click", load)
