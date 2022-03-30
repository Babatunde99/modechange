function myfunction(){
    bum.classList.add('change');
    bum1.classList.remove('change')
    bum2.classList.remove('change')
    bum3.classList.remove('change')
    bum4.classList.remove('change')
    localStorage.setItem('rank','1')
}
function mytake(){
    bum1.classList.add("change")
    bum.classList.remove('change')
    bum2.classList.remove('change')
    bum3.classList.remove('change')
    bum4.classList.remove('change')
    localStorage.setItem('rank','2')
}
function myfeel(){
    bum2.classList.add("change")
    bum.classList.remove('change')
    bum1.classList.remove('change')
    bum3.classList.remove('change')
    bum4.classList.remove('change')
    localStorage.setItem('rank','3')
}
function myyarn(){
    bum3.classList.add("change")
    bum1.classList.remove('change')
    bum2.classList.remove('change')
    bum4.classList.remove('change')
    localStorage.setItem('rank','4')

}
function myjob(){
    bum4.classList.add("change")
    bum.classList.remove('change')
    bum2.classList.remove('change')
    bum3.classList.remove('change')
    bum1.classList.remove('change')
    localStorage.setItem('rank','5')

}

 var x = localStorage.getItem('rank')
 show.innerHTML = x 