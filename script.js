// Data structure for the quizzes
const quizzes = {
    algebra: {
        beginner: [
            {
                question: "What is the value of 'x' in the equation: x + 5 = 10?",
                options: ["2", "5", "10", "15"],
                answer: "5",
                explanation: "To solve for 'x', you subtract 5 from both sides of the equation. $x + 5 - 5 = 10 - 5$, so $x = 5$."
            },
            {
                question: "If a = 3 and b = 4, what is a + b?",
                options: ["1", "7", "12", "9"],
                answer: "7",
                explanation: "This is a simple addition problem. You just add the values of 'a' and 'b': $3 + 4 = 7$."
            },
            {
                question: "Solve for 'y': $2y = 12$",
                options: ["10", "6", "14", "24"],
                answer: "6",
                explanation: "To solve for 'y', you divide both sides of the equation by 2: $2y / 2 = 12 / 2$, so $y = 6$."
            }
        ],
        intermediate: [
            {
                question: "What is the slope of the line $y = 3x - 2$?",
                options: ["3", "-2", "1", "0"],
                answer: "3",
                explanation: "The slope-intercept form of a linear equation is $y = mx + b$, where 'm' is the slope. In this equation, $m = 3$."
            },
            {
                question: "Solve for 'x': $2(x - 3) = 8$",
                options: ["5", "7", "11", "10"],
                answer: "7",
                explanation: "First, distribute the 2: $2x - 6 = 8$. Then, add 6 to both sides: $2x = 14$. Finally, divide by 2: $x = 7$."
            },
            {
                question: "What is the result of $(a + b)^2$?",
                options: ["$a^2 + b^2$", "$a^2 + 2ab + b^2$", "$a^2 - b^2$", "$2a + 2b$"],
                answer: "$a^2 + 2ab + b^2$",
                explanation: "This is a common algebraic identity. $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$."
            }
        ],
        expert: [
            {
                question: "Solve for x: $\\log_2(x+3) + \\log_2(x+1) = 3$",
                options: ["1", "5", "3", "0"],
                answer: "1",
                explanation: "Using the logarithm product rule, $\\log_2((x+3)(x+1)) = 3$. Converting to exponential form, $(x+3)(x+1) = 2^3 = 8$. This simplifies to $x^2 + 4x + 3 = 8$, or $x^2 + 4x - 5 = 0$. Factoring gives $(x+5)(x-1) = 0$, so $x=-5$ or $x=1$. Since logarithms are only defined for positive arguments, $x+3 > 0$ and $x+1 > 0$, so we must have $x > -1$. Therefore, the only valid solution is $x=1$."
            },
            {
                question: "Find the derivative of $f(x) = x^3 - 2x^2 + 5x - 7$",
                options: ["$3x^2 - 4x + 5$", "$x^2 - x + 5$", "$3x^2 - 4x + 5x$", "$x^3 - 2x^2 + 5$"],
                answer: "$3x^2 - 4x + 5$",
                explanation: "To find the derivative, we use the power rule. For a term $ax^n$, the derivative is $nax^{n-1}$. Applying this to each term, we get $3x^{3-1} - 2(2)x^{2-1} + 5x^{1-1} - 0$, which simplifies to $3x^2 - 4x + 5$."
            },
            {
                question: "What is the value of 'x' if $2^{x+1} = 16$?",
                options: ["2", "3", "4", "5"],
                answer: "3",
                explanation: "We can rewrite the equation so that both sides have the same base. Since $16 = 2^4$, the equation becomes $2^{x+1} = 2^4$. Since the bases are equal, the exponents must be equal: $x+1 = 4$. Subtracting 1 from both sides gives $x = 3$."
            }
        ]
    },
    science: {
        beginner: [
            {
                question: "What is the largest planet in our solar system?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Jupiter",
                explanation: "Jupiter is the largest planet in the solar system, more than twice as massive as all the other planets combined."
            },
            {
                question: "Which gas do plants absorb to make food?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                answer: "Carbon Dioxide",
                explanation: "Plants use carbon dioxide, water, and sunlight to create their own food through a process called photosynthesis."
            },
            {
                question: "What is the state of matter of water vapor?",
                options: ["Solid", "Liquid", "Gas", "Plasma"],
                answer: "Gas",
                explanation: "Water can exist as a solid (ice), a liquid (water), or a gas (water vapor or steam)."
            }
        ],
        intermediate: [
            {
                question: "Which of these is a unit of electrical resistance?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                answer: "Ohm",
                explanation: "Electrical resistance is measured in Ohms ($Ω$), named after German physicist Georg Ohm. Volt measures voltage, Ampere measures current, and Watt measures power."
            },
            {
                question: "What does the 'C' in E=mc² stand for?",
                options: ["Energy", "Speed of light", "Current", "Charge"],
                answer: "Speed of light",
                explanation: "In Einstein's famous equation, 'c' is a constant representing the speed of light in a vacuum, approximately $3 \\times 10^8$ meters per second."
            },
            {
                question: "What is the function of mitochondria in a cell?",
                options: ["Protein synthesis", "Waste disposal", "Energy production", "Cell division"],
                answer: "Energy production",
                explanation: "Mitochondria are often called the 'powerhouses of the cell' because they generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy."
            }
        ],
        expert: [
            {
                question: "What is the primary function of the Golgi apparatus in a cell?",
                options: ["DNA replication", "Protein synthesis", "Protein modification and packaging", "Waste breakdown"],
                answer: "Protein modification and packaging",
                explanation: "The Golgi apparatus (or Golgi complex) is responsible for modifying, sorting, and packaging proteins and lipids for secretion or delivery to other organelles."
            },
            {
                question: "In thermodynamics, what does the second law state?",
                options: ["Energy is conserved", "Entropy of an isolated system never decreases", "Entropy of a closed system is constant", "The universe is always at a constant temperature"],
                answer: "Entropy of an isolated system never decreases",
                explanation: "The second law of thermodynamics states that the total entropy of an isolated system can only increase over time. It can remain constant in reversible processes, but it will never spontaneously decrease."
            },
            {
                question: "What is the name of the process by which a cell engulfs large particles?",
                options: ["Osmosis", "Diffusion", "Phagocytosis", "Exocytosis"],
                answer: "Phagocytosis",
                explanation: "Phagocytosis is a process in which a cell uses its plasma membrane to engulf a large particle, forming an internal compartment called a phagosome."
            }
        ]
    },
    'english language arts': {
        beginner: [
            {
                question: "Which of these is a noun?",
                options: ["Quickly", "Run", "Blue", "House"],
                answer: "House",
                explanation: "A noun is a word that names a person, place, thing, or idea. 'House' is a place/thing."
            },
            {
                question: "What punctuation mark is used at the end of a question?",
                options: [".", "?", "!", ","],
                answer: "?",
                explanation: "A question mark is used to indicate a question. A period ends a statement, and an exclamation mark ends an exclamation."
            },
            {
                question: "What is a synonym for 'happy'?",
                options: ["Sad", "Joyful", "Angry", "Tired"],
                answer: "Joyful",
                explanation: "A synonym is a word that has the same or a very similar meaning to another word. 'Joyful' means happy."
            }
        ],
        intermediate: [
            {
                question: "What is the main subject or message of a literary work?",
                options: ["Plot", "Character", "Theme", "Setting"],
                answer: "Theme",
                explanation: "The theme is the central topic or idea explored in a text. The plot is the sequence of events, and characters are the individuals in the story."
            },
            {
                question: "What literary device is the phrase 'He is a rock'?",
                options: ["Simile", "Metaphor", "Alliteration", "Personification"],
                answer: "Metaphor",
                explanation: "A metaphor is a figure of speech that directly compares two unlike things without using 'like' or 'as'. 'He is a rock' means he is strong and steady."
            },
            {
                question: "Which of these words is an adverb?",
                options: ["Beautiful", "Singing", "Suddenly", "They"],
                answer: "Suddenly",
                explanation: "An adverb is a word that modifies a verb, adjective, or another adverb. It often ends in '-ly' and describes how, when, or where something is done."
            }
        ],
        expert: [
            {
                question: "What is the literary term for a character's inner conflict?",
                options: ["External conflict", "Foreshadowing", "Internal conflict", "Motif"],
                answer: "Internal conflict",
                explanation: "An internal conflict is a psychological struggle within the mind of a literary or dramatic character, which creates the plot's suspense. External conflict is a struggle between a character and an outside force."
            },
            {
                question: "Which poetic meter is most famously associated with Shakespeare's sonnets?",
                options: ["Dactylic Hexameter", "Anapestic Tetrameter", "Iambic Pentameter", "Trochaic Octameter"],
                answer: "Iambic Pentameter",
                explanation: "Iambic pentameter is a rhythm structure with 10 syllables per line (five pairs of alternating stressed and unstressed syllables), a common meter in English poetry and drama, especially in the works of Shakespeare."
            },
            {
                question: "What is the literary device of using an object or person to represent an abstract idea?",
                options: ["Allusion", "Symbolism", "Hyperbole", "Oxymoron"],
                answer: "Symbolism",
                explanation: "Symbolism is the use of symbols to represent ideas or qualities. An allusion is a reference to another work, a hyperbole is an exaggeration, and an oxymoron combines contradictory terms."
            }
        ]
    },
    history: {
        beginner: [
            {
                question: "Who was the first president of the United States?",
                options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
                answer: "George Washington",
                explanation: "George Washington served as the first president of the United States from 1789 to 1797."
            },
            {
                question: "What year did the Titanic sink?",
                options: ["1912", "1905", "1923", "1945"],
                answer: "1912",
                explanation: "The RMS Titanic sank on its maiden voyage in April 1912 after hitting an iceberg."
            },
            {
                question: "Which ancient civilization built the pyramids of Giza?",
                options: ["Roman", "Greek", "Egyptian", "Mesopotamian"],
                answer: "Egyptian",
                explanation: "The pyramids of Giza were built by the ancient Egyptians as tombs for their pharaohs."
            }
        ],
        intermediate: [
            {
                question: "What was the name of the ship that brought the Pilgrims to America?",
                options: ["The Santa Maria", "The Mayflower", "The Pinta", "The Endeavour"],
                answer: "The Mayflower",
                explanation: "The Pilgrims sailed to America on the Mayflower in 1620, establishing the Plymouth Colony."
            },
            {
                question: "Who invented the printing press?",
                options: ["Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton", "Galileo Galilei"],
                answer: "Johannes Gutenberg",
                explanation: "Johannes Gutenberg is credited with inventing the movable-type printing press in Europe around 1440."
            },
            {
                question: "What was the main cause of the War of 1812?",
                options: ["Taxation without representation", "British impressment of American sailors", "Territorial disputes over the Louisiana Purchase", "Religious freedom"],
                answer: "British impressment of American sailors",
                explanation: "The impressment of American sailors by the British Royal Navy was a major factor leading to the War of 1812, along with trade restrictions and British support for Native American tribes."
            }
        ],
        expert: [
            {
                question: "What was the name of the treaty that officially ended World War I?",
                options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Trianon"],
                answer: "Treaty of Versailles",
                explanation: "The Treaty of Versailles was the peace treaty that officially ended World War I. It was signed on June 28, 1919, in Versailles, France."
            },
            {
                question: "Who was the leader of the Soviet Union at the beginning of World War II?",
                options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
                answer: "Joseph Stalin",
                explanation: "Joseph Stalin was the dictator of the Soviet Union from the mid-1920s until his death in 1953, and he was the leader during the start of World War II."
            },
            {
                question: "The Magna Carta was signed by which English monarch?",
                options: ["King Henry VIII", "King John", "King Richard the Lionheart", "King Edward I"],
                answer: "King John",
                explanation: "The Magna Carta, a foundational document of English law and liberty, was signed by King John in 1215."
            }
        ]
    }
};

// Global variables to track the quiz state
let currentSubject = '';
let currentLevel = '';
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const appContainer = document.getElementById('app-container');
const mainTitle = document.getElementById('main-title');
const subjectSelection = document.getElementById('subject-selection');
const levelSelection = document.getElementById('level-selection');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackMessage = document.getElementById('feedback-message');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');

// Buttons
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// Hide all containers and show a specific one
function showScreen(screenId) {
    const screens = [subjectSelection, levelSelection, quizContainer, resultContainer];
    screens.forEach(screen => {
        if (screen) {
            screen.classList.add('hidden');
            screen.classList.remove('flex');
        }
    });

    // Show the requested screen
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.remove('hidden');
        screen.classList.add('flex');
    }
}

// Display the subject selection screen
function showSubjects() {
    mainTitle.textContent = "Select a Subject";
    showScreen('subject-selection');
    subjectSelection.innerHTML = '';

    // Dynamically create subject buttons
    for (const subject in quizzes) {
        const button = document.createElement('button');
        button.className = 'btn-custom m-2 w-48';
        const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
        button.textContent = displaySubject;
        button.addEventListener('click', () => showLevels(subject));
        subjectSelection.appendChild(button);
    }
}

// Display the level selection screen for a given subject
function showLevels(subject) {
    currentSubject = subject;
    const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
    mainTitle.textContent = `Select a Level for ${displaySubject}`;
    showScreen('level-selection');
    levelSelection.innerHTML = '';

    for (const level in quizzes[subject]) {
        const button = document.createElement('button');
        button.className = 'btn-custom m-2 w-48';
        button.textContent = level.charAt(0).toUpperCase() + level.slice(1);
        button.addEventListener('click', () => startQuiz(subject, level));
        levelSelection.appendChild(button);
    }
}

// Initialize and start the quiz
function startQuiz(subject, level) {
    currentLevel = level;
    currentQuiz = quizzes[subject][level];
    currentQuestionIndex = 0;
    score = 0;
    const displaySubject = subject === 'english language arts' ? 'English Language Arts' : subject.charAt(0).toUpperCase() + subject.slice(1);
    mainTitle.textContent = `${displaySubject} Quiz - ${level.charAt(0).toUpperCase() + level.slice(1)}`;
    showScreen('quiz-container');
    displayQuestion();
}

// Display the current question and its options
function displayQuestion() {
    feedbackContainer.classList.add('hidden');
    feedbackContainer.classList.remove('flex');
    optionsContainer.innerHTML = '';
    const currentQ = currentQuiz[currentQuestionIndex];
    questionText.innerHTML = `Question ${currentQuestionIndex + 1}: ${currentQ.question}`;

    // Create buttons for each answer option
    currentQ.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn-option';
        button.innerHTML = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    // Remove the Next button if it exists
    const nextButton = document.getElementById('next-question-btn');
    if (nextButton) {
        nextButton.remove();
    }
}

// Check the user's answer and provide feedback
function checkAnswer(userChoice) {
    const currentQ = currentQuiz[currentQuestionIndex];
    const allOptions = optionsContainer.querySelectorAll('.btn-option');

    // Disable all option buttons to prevent multiple clicks
    allOptions.forEach(button => button.disabled = true);

    // Provide visual feedback for correct/wrong answers
    let isCorrect = userChoice === currentQ.answer;
    if (isCorrect) {
        score++;
        feedbackMessage.innerHTML = `<span class="text-green-600 font-bold">Correct!</span><br>${currentQ.explanation}`;
    } else {
        feedbackMessage.innerHTML = `<span class="text-red-600 font-bold">Incorrect!</span><br>The correct answer was: <b>${currentQ.answer}</b><br>${currentQ.explanation}`;
    }

    // Highlight the user's choice and the correct answer
    allOptions.forEach(button => {
        if (button.innerHTML === currentQ.answer) {
            button.classList.add('correct');
        }
        if (button.innerHTML === userChoice && !isCorrect) {
            button.classList.add('wrong');
        }
    });

    feedbackContainer.classList.remove('hidden');
    feedbackContainer.classList.add('flex');

    // Add a 'Next' button to allow the user to advance manually
    const nextButton = document.createElement('button');
    nextButton.id = 'next-question-btn';
    nextButton.className = 'btn-custom mt-4 w-48 mx-auto';
    nextButton.textContent = 'Next Question';
    nextButton.addEventListener('click', handleNextQuestion);
    optionsContainer.parentNode.appendChild(nextButton);
}

// Handle moving to the next question or showing results
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Display the final results screen
function showResult() {
    mainTitle.textContent = "Quiz Complete!";
    showScreen('result-container');

    let message = '';
    const percentage = (score / currentQuiz.length) * 100;
    if (percentage >= 70) {
        message = `Great job! You scored ${score}/${currentQuiz.length} (${percentage.toFixed(0)}%).`;
    } else {
        message = `Better luck next time. You scored ${score}/${currentQuiz.length} (${percentage.toFixed(0)}%).`;
    }
    scoreText.textContent = message;
}

// Restart the quiz from the beginning
function restartQuiz() {
    currentSubject = '';
    currentLevel = '';
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    feedbackContainer.classList.add('hidden');
    feedbackContainer.classList.remove('flex');
    showSubjects();
}

// Event listeners
restartQuizBtn.addEventListener('click', restartQuiz);

// Initialize the application on page load
document.addEventListener('DOMContentLoaded', showSubjects);
