let body = document.getElementsByTagName("body")[0]
let p = document.getElementsByTagName("p")
let red = 255;
let green = 255;
let blue = 255;

function update_red(value) {
    red = value
    p[1].innerHTML = red
    changing_background()
}

function update_green(value) {
    green = value
    p[3].innerHTML = green
    changing_background()
}

function update_blue(value) {
    blue = value
    p[5].innerHTML = blue
    changing_background()
}

function changing_background() {
    console.log("input")
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    if (red < 100 && green < 100 && blue < 100) {
        body.style.color = `white`
    } else {
        body.style.color = `Black`
    }
}

