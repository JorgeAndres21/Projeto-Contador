const btns = document.querySelectorAll('.btn')
const number = document.getElementById('number')

let count = 0

btns.forEach(function (btns) {
    btns.addEventListener('click' , function(e) {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            count--
        } else if(styles.contains('increase')) {
            count++
        } else {
            count = 0
        }
        if(count > 0) {
            number.style.color = 'green'
        } else if(count === 0) {
            number.style.color = 'black'
        } else {
            number.style.color = 'red'
        }
        number.textContent = count
    })
})
