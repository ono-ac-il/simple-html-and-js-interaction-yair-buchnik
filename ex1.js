function findParty() {
    const partyLetters = document.getElementById('name').value;

    var res;
    switch (partyLetters) {
        case "ט":
            res = "ציונות דתית";
            break;
        case "מחל":
            res = "ליכוד";
            break;
        case "אמת":
            res = "העבודה";
            break;
        case "מרצ":
            res = "מרץ";
            break;
    }

    document.getElementById('result').innerHTML = res;
}

const $button = document.getElementById("send");

$button.addEventListener('click', findParty);