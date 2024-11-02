let input = document.querySelector(".enter input");
let spanel = document.querySelector(".cal");
let section = document.querySelector(".show_data");

spanel.onclick = function() {
    section.innerHTML = ''; // Clear previous results

    if (input.value === '' || isNaN(input.value)) {
        let el = document.createElement("div");
        let txt = document.createTextNode("Invalid input. Please try again.");
        el.appendChild(txt);
        section.appendChild(el);
    } else {
        let val = parseFloat(input.value);
        let pound = (val / 2.20462).toFixed(2); // Conversion to kg with two decimal places
        let el = document.createElement("div");
        let txt = document.createTextNode(`Your weight in kg is: ${pound}`);
        el.appendChild(txt);
        section.appendChild(el);
    }
}