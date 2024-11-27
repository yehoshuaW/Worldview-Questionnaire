// script.js

function calculateResults() {
    let scores = {
        theism: 0,
        polytheism: 0,
        pantheism: 0,
        atheism: 0,
        naturalism: 0,
        transcendentalism: 0,
        postmodernism: 0
    };

    // Gather the answers
    let form = document.getElementById('worldviewForm');
    let answers = new FormData(form);

    // Calculate scores based on selected answers
    answers.forEach((value, key) => {
        let worldviewGroups = value.split(',');

        worldviewGroups.forEach(group => {
            if (scores.hasOwnProperty(group)) {
                scores[group]++;
            }
        });
    });

    // Find the highest score
    let maxScore = Math.max(...Object.values(scores));
    let result = Object.keys(scores).filter(group => scores[group] === maxScore);

    // Display the result
    document.getElementById('result').innerHTML = `
        <h3>Your Primary Worldview:</h3>
        <p><strong>${result.join(", ")}</strong></p>
    `;
}
