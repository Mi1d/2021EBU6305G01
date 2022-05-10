const calc =  1 * 24 * 60 * 60
localStorage.setItem('time',calc)
setTimeout(()=> {
  const wrapper = document.getElementById('wrapper')
  wrapper.style.display = 'none'
},calc)

