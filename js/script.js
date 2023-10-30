function navigateToGradeInput() {
    const subjectElement = document.getElementById('subject');
    const selectedSubject = subjectElement.value;

    switch (selectedSubject) {
        case 'matvar':
            window.location.href = 'matvar.html';
            break;
        case 'physics':
            window.location.href = 'fismov.html';
            break;
        case 'cdados':
            window.location.href = 'cdados.html';
            break;
        case 'acionas': 
            window.location.href = 'acionas.html';
            break;
        default:
            alert('Por favor, selecione uma matéria válida.');
            break;
    }
}