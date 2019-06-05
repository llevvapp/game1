let vopros1 = document.querySelector('.vopros1')
let vopros2 = document.querySelector('.vopros2')
let vopros3 = document.querySelector('.vopros3')
let vopros4 = document.querySelector('.vopros4')
let btnerror1 = document.querySelectorAll('.error1')
let btnright1 = document.querySelector('.right1')
let btnerror2 = document.querySelectorAll('.error2')
let btnright2 = document.querySelector('.right2')
let btnerror3 = document.querySelectorAll('.error3')
let btnright3 = document.querySelector('.right3')
let btnerror4 = document.querySelectorAll('.error4')
let btnright4 = document.querySelector('.right4')

for (var i = 0; i < btnerror1.length; i++) {
	btnerror1[i].onclick = function(){
		vopros1.style.display = 'none'
		var lose = document.createElement('div')
		document.body.appendChild(lose)
		lose.innerHTML = 'Вы проиграли.Попытайтесь заново (нажмите F5)'
		lose.classList.add('lose')}}
	btnright1.onclick = function(){
		vopros1.style.display = 'none'
		vopros2.style.display = 'block'
	}

for (var i = 0; i < btnerror2.length; i++) {
	btnerror2[i].onclick = function(){
		vopros2.style.display = 'none'
		var lose = document.createElement('div')
		document.body.appendChild(lose)
		lose.classList.add('lose')
		lose.innerHTML = 'Вы проиграли.Попытайтесь заново (нажмите F5)'}}
	btnright2.onclick = function(){
		vopros2.style.display = 'none'
		vopros3.style.display = 'block'
	}

for (var i = 0; i < btnerror3.length; i++) {
	btnerror3[i].onclick = function(){
		vopros3.style.display = 'none'
		var lose = document.createElement('div')
		document.body.appendChild(lose)
		lose.classList.add('lose')
		lose.innerHTML = 'Вы проиграли.Попытайтесь заново (нажмите F5)'}}
	btnright3.onclick = function(){
		vopros3.style.display = 'none'
		vopros4.style.display = 'block'
	}
	for (var i = 0; i < btnerror4.length; i++) {
	btnerror4[i].onclick = function(){
		vopros4.style.display = 'none'
		var lose = document.createElement('div')
		document.body.appendChild(lose)
		lose.classList.add('lose')
		lose.innerHTML = 'Вы проиграли.Попытайтесь заново (нажмите F5)'}}
	btnright4.onclick = function(){
		vopros4.style.display = 'none'
		var win = document.createElement('div')
		document.body.appendChild(win)
		win.classList.add('win')
		win.innerHTML = 'Вы выиграли!'
	}

