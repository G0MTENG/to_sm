document.getElementById('generate-bracket').addEventListener('click', generateBracket);

function generateBracket() {
    const participants = [
        document.getElementById('participant1').value,
        document.getElementById('participant2').value,
        document.getElementById('participant3').value,
        document.getElementById('participant4').value,
        document.getElementById('participant5').value
    ].filter(Boolean); // 빈 값 제거

    if (participants.length !== 5) {
        alert('참가자는 정확히 5명이어야 합니다.');
        return;
    }

    // 참가자 랜덤 셔플
    shuffleArray(participants);

    // 대진표 생성
    const bracket = document.getElementById('bracket');
    bracket.innerHTML = createBracketHTML(participants);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 요소 교환
    }
}

function createBracketHTML(participants) {
    let html = '<div class="round">';
    for (let i = 0; i < participants.length; i++) {
        html += `<div class="match">${participants[i]}</div>`;
    }
    html += '</div>';
    return html;
}
