// Load all questions
function loadQuestions() {
    fetch("/question/all")
        .then(response => response.json())
        .then(data => {
            let output = "";

            data.forEach(q => {
                output += `
                    <div class="question-card">
                        <h3>${q.questionTitle}</h3>
                        <p>A: ${q.option1}</p>
                        <p>B: ${q.option2}</p>
                        <p>C: ${q.option3}</p>
                        <p>D: ${q.option4}</p>
                    </div>
                `;
            });

            document.getElementById("questions").innerHTML = output;
        })
        .catch(error => {
            console.error("Error loading questions:", error);
        });
}


// Add new question
function addQuestion() {

    const questionData = {
        questionTitle: document.getElementById("title").value,
        option1: document.getElementById("opt1").value,
        option2: document.getElementById("opt2").value,
        option3: document.getElementById("opt3").value,
        option4: document.getElementById("opt4").value,
        rightAnswer: document.getElementById("answer").value
    };

    console.log("Sending Data:", questionData);

    fetch("/question/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(questionData)
    })
    .then(response => response.json())
    .then(data => {
        alert("Question Added Successfully!");
        loadQuestions();

        // Clear form fields
        document.getElementById("title").value = "";
        document.getElementById("opt1").value = "";
        document.getElementById("opt2").value = "";
        document.getElementById("opt3").value = "";
        document.getElementById("opt4").value = "";
        document.getElementById("answer").value = "";
    })
    .catch(error => {
        console.error("Error adding question:", error);
    });
}