function submitForm() {
    var option = document.querySelector('input[name="option"]:checked').value;
    if (option == 1) {
        window.location.href = "Pages/binario.html";
    } else if (option == 2) {
        window.location.href = "Pages/octal.html";
    } else if (option == 3) {
        window.location.href = "Pages/hexadecimal.html";
    }
}

function calculaBin() {
    var decimalInput = document.getElementById("value");
    var binaryInput = document.getElementById("binaryValue");

    var decimal = parseInt(decimalInput.value);
    var binary = decimal.toString(2);

    binaryInput.value = binary;
}

function calculaOct() {
    var decimalInput = document.getElementById("value");
    var octalInput = document.getElementById("octalValue");

    var decimal = parseInt(decimalInput.value);
    var octal = decimal.toString(8);

    octalInput.value = octal;
}

function calculaHexa() {
    var decimalInput = document.getElementById("value");
    var hexadecimalInput = document.getElementById("hexaValue");

    var decimal = parseInt(decimalInput.value);
    var hexa = decimal.toString(16);

    hexadecimalInput.value = hexa;
}
