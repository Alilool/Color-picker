let body = document.getElementsByTagName("body")[0]
let p = document.getElementsByTagName("p")
let leftSection = document.getElementsByClassName("left-section")[0]
let rightSection = document.getElementsByClassName("right-section")[0]
let input = document.getElementsByTagName("input")


let red = 255;
let green = 255;
let blue = 255;

let red2 = 255;
let green2 = 255;
let blue2 = 255;
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

function update_red_2(value) {
    red2 = value
    p[7].innerHTML = red2
    changing_background()
}

function update_green_2(value) {
    green2 = value
    p[9].innerHTML = green2

    changing_background()
}

function update_blue_2(value) {
    blue2 = value
    p[11].innerHTML = blue2
    changing_background()
}


function changing_background() {  
    console.log ("change")  
    body.style.background = `linear-gradient(to right, rgba(${red}, ${green}, ${blue}, ${1}), rgba(${red2}, ${green2}, ${blue2}, ${1})`
    if (red < 100 && green < 100 && blue < 100) {
        leftSection.style.color = `white`
    } else {
        leftSection.style.color = `Black`
    }

    if (red2 < 100 && green2 < 100 && blue2 < 100) {
        rightSection.style.color = `white`
    } else {
        rightSection.style.color = `Black`
    }

    if (red < 100 && green < 100 && blue < 100 && red2 < 100 && green2 < 100 && blue2 < 100) {
        body.style.color = `white`
    } else {
        body.style.color = `Black`
    }

    let inputArray = Array.from(input);
    let inputValues = inputArray.map(element => parseInt(element.value));

    if (inputValues.some(value => value > 255)) {
        alert("The limit is 255");

        // Reset values of inputs exceeding 255 to 0
        inputArray.forEach((element, index) => {
            let value = parseInt(element.value);
            if (value > 255) {
                element.value = 0;

                // Update associated <p> tag (assuming it's immediately after the input)
                let associatedPTag = element.nextElementSibling;
                if (associatedPTag && associatedPTag.tagName === "P") {
                    associatedPTag.innerHTML = 0;
                }
            }
        });
    }}
