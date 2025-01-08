// DOM Elements
const emailListElm = document.getElementById('email-list')

// DOM Events
// On Page Load
for(let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) =>{
    const email = res.data.response
    emailListElm.innerHTML += `<li>${email}</li>`
  })
}
