// Functions
const load = () =>{
  emailListElm.innerHTML = ''
  const emailList = []
  
  for(let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) =>{
    const email = res.data.response
    emailList.push(`<li>${email}</li>`)
    if(emailList.length === 10){
      emailListElm.innerHTML = emailList.join('')
    }
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
