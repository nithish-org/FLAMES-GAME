function calculateFLAMES() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === '' || name2 === '') {
        alert('Please enter both names.');
        return;
    }

    const flamesResult = getFLAMESResult(name1, name2);
    document.getElementById('result').innerText = `Result: ${flamesResult}`;
}

function getFLAMESResult(name1, name2) {
    let count = getCommonCharacterCount(name1, name2);
    const flames = ['FRIENDS LIKE "DEVA & SURIYA"', 'LOVE LIKE "ROMEO & JULIET"', 'AFFECTION "TYPE OF LOVE AND KINDNESS"', 'MARRIAGE "RIP"', 'ENEMIES LIKE "TOM & JERRY"', 'SISTER LIKE "UNIVERSE"'];

    while (flames.length > 1) {
        const index = (count - 1) % flames.length;
        flames.splice(index, 1);
        count--;
    }

    return flames[0];
}

function getCommonCharacterCount(name1, name2) {
    const combinedName = (name1 + name2).split('');
    const charCount = {};

    combinedName.forEach(char => {
        charCount[char] = (charCount[char] || 0) + 1;
    });

    const uniqueCount = Object.values(charCount).reduce((acc, count) => acc + count % 2, 0);
    return uniqueCount;
}
