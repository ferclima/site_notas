function returnToStart() {
    location.href = "index.html";
}

function clearFields() {
    const inputFields = ["L1", "L2", "L3", "L4", "P1", "P2", "PI", "PF"];
    inputFields.forEach(id => {
        const el = document.getElementById(id);
        el.value = "";
        el.classList.remove("invalid");
    });
    document.getElementById("result").innerText = "";
}

function calculateMinGrade() {
    const weights = {
        L1: 0.0125,
        L2: 0.0125,
        L3: 0.0125,
        L4: 0.0125,
        P1: 0.20,
        P2: 0.20,
        PI: 0.22,
        PF: 0.33,
    };

    let totalWeight = 0;
    let totalGrade = 0;
    let valid = true;
    let message = "";

    for (let key in weights) {
        const gradeEl = document.getElementById(key);
        let grade = parseFloat(gradeEl.value);
        gradeEl.classList.remove("invalid");

        if (grade < 0 || grade > 10) {
            gradeEl.classList.add("invalid");
            valid = false;
            message = "Ta bebado maluco? Mete uma nota de 0 a 10 aí";
            document.querySelector('.popup-content').textContent = message;
            document.querySelector('.popup').style.display = 'block';
        }

        if (!isNaN(grade) && valid) {
            totalGrade += grade * weights[key];
            totalWeight += weights[key];
        }
    }

    if (!valid) return;

    const gradeNeeded = ((5 - totalGrade) / (1 - totalWeight)).toFixed(2);

    if (gradeNeeded <= 10 && gradeNeeded >= 0) {
        message = `Você precisa de uma nota mínima de ${gradeNeeded} nas avaliações restantes para ter uma média de 5.`;
    } else if (gradeNeeded > 10) {
        message = `Infelizmente, mesmo com notas máximas nas avaliações restantes, você não alcançará a média de 5. Media = ${totalGrade.toFixed(2)}`;
    } else {
        message = `Você já possui média suficiente (maior que 5). Continue assim!. Media = ${totalGrade.toFixed(2)}`;
    }

    document.querySelector('.popup-content').textContent = message;
    document.querySelector('.popup').style.display = 'block';
}

function closePopup() {
    document.querySelector('.popup').style.display = 'none';
}