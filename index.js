let vie = ["Chó", "Mèo"];
let eng = ["Dog", "Cat"];

function transl() {
    let string = document.getElementById("string").value;
    let index_eng = eng.indexOf(string);
    let result = "";

    if (index_eng !== -1) {
        result = vie[index_eng];
    } else {
        result = "Không tìm thấy trong từ điển";
    }

    displayResult(result);
}

function displayResult(result) {
    document.getElementById("result").innerHTML = result;
}