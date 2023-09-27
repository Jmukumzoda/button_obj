let ipns = document.createElement('div'),
    ipn1 = document.createElement('div'),
    ipns_text = document.createElement('div'),
    ipns_h2 = document.createElement('h2'),
    ipns_p = document.createElement('p'),
    ipns_button = document.createElement('button'),
    ipns_img = document.createElement('img');


ipns.classList.add('inputs')
ipn1.classList.add('ipn1')
ipns_text.classList.add('text_ipn')
ipns_p.classList.add('text_ipnp')
ipns_button.classList.add("text_ipnbutton")

ipns_h2.innerHTML = 'Buy milk :)'
ipns_p.innerHTML = '18:44'
ipns_img.src = './img/Group 14.svg'

let body = document.querySelector('.sec1')

body.append(ipns)
ipns.append(ipn1)
ipn1.append(ipns_text)
ipns_text.append(ipns_h2)
ipns_h2.after(ipns_p)
ipns_p.after(ipns_button)
ipns_button.append(ipns_img)

let btn = document.querySelector('button')
let form1 = document.querySelector('.fr')
let inputs1 = document.querySelectorAll('.inputs1')
let inputs = document.querySelector('.inputs')
let inps = document.querySelector("#name")
let patterns = {
    name: /^[a-z ,.'-]+$/i
}
inputs1.forEach(inps => {
    inps.onkeyup = () => {
        if (patterns[inps.name].test(inps.value)) {
            inps.style.borderColor = 'blue'
            inps.style.overflow = 'blue'
            inps.classList.remove('error')
            inps.parentElement.classList.remove('error-field')
        } else {
            inps.parentElement.classList.add('error-field')
            inps.parentElement.classList.add('error-field')
            inps.style.borderColor = 'red'
            inps.classList.add('error')
            inps.style.overflow = 'red'
        }
    }
})



form1.onsubmit = (e) => {
    e.preventDefault();
    let error = false
    inputs1.forEach(ipn12 => {
        if (ipn12.parentElement.classList.contains('error-field')) {
            error = true
        } else {
            inputs.classList.add('show')
        }
    })
    ipns_h2.innerHTML = patterns[inps.name].test(inps.value)
    if (error) {
        alert('error')
    } else {
        submit()
    }

}
ipns_button.onclick = () => {
    inputs.classList.add('show2')
    inputs.classList.remove('inputs')
    inputs1.forEach(el => {
        el.remove( patterns[inps.name].test(inps.value))
    })

}
function submit() {
    let but_obj = {
        id: Math.random(10)*1,
        isdone: false,
        title: patterns[inps.name].test(inps.value)
    };

    let fm = new FormData(form1)

    fm.forEach((value, key) => {
        but_obj[key] = value
    })

    let input = document.getElementById("name").value;
    if (input === "") {
        alert("Что ты вёл там ничего нету");
        return fm;
    }
    console.log(but_obj);
}