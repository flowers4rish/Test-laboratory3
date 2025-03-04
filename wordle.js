var health = 5;
var score = 0;
var chosenWord = "";
var words = [
    "ADOPT", "ABORT", "ABUSE", "ARMED", "ACHES", "BRAIN", "BRISK", "BLACK", "BLIND", "BREAK",
    "CLOUD", "CRATE", "CHALK", "CULTS", "CURVE", "DEPTH", "DREAM", "DANCE", "DARTS", "DIVES",
    "EIGHT", "EAGER", "EARTH", "EARLY", "ELBOW", "FLUTE", "FIGHT", "FANCY", "FLESH", "FLOWS",
    "GRASP", "GUILT", "GLIDE", "GUARD", "GLOWS", "HUMOR", "HANDS", "HATED", "HUMID", "HIRED",
    "INBOX", "INDEX", "IDEAS", "IDOLS", "INPUT", "JEANS", "JORTS", "JUICE", "JOCKS", "JUMPS",
    "KNOBS", "KNIFE", "KNITS", "KNEAD", "KITES", "LEAFY", "LIARS", "LATCH", "LOVED", "LUNCH", 
    "MEDIA", "MERIT", "MOUNT", "MINED", "MONEY", "NOBLE", "NIGHT", "NORTH", "NITRO", "NURSE",
    "OFTEN", "OCEAN", "OPENS", "OVENS", "ORBIT", "PHONE", "PLUMB", "PRISM", "PARIS", "PIANO",
    "RANCH", "ROACH", "READS", "RIDES", "RACES", "STEAL", "SOLAR", "SAINT", "SMART", "SMILE",
    "TOUCH", "TEARS", "TUBES", "TRASH", "TILES", "URBAN", "UPSET", "USUAL", "UNDER", "URINE",
    "VOTER", "VICES", "VOICE", "VOLTS", "VINES", "WALTZ", "WHOLE", "WATER", "WITCH", "WIDTH",
    "YOUTH", "YIELD", "YARNS", "YARDS", "YEARS", "ZEBRA", "ZINES", "ZONES", "ZESTY", "ZEROS"
];

function setupGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log("Chosen Word: " + chosenWord);
}

function checkWord() {
    if (health <= 0) return;
    
    let rowIndex = 5 - health;  
    let answer = prompt("Enter a 5-letter word:").toUpperCase();

    if (answer.length !== 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let correctCount = 0;
    for (let i = 0; i < 5; i++) {
        let box = document.getElementById(`r-${rowIndex}-${i}`);
        box.innerText = answer[i];
        
        if (answer[i] === chosenWord[i]) {
            box.style.backgroundColor = "#6AAA64";
            correctCount++;
        } else if (chosenWord.includes(answer[i])) {
            box.style.backgroundColor = "#C9B458";
        } else {
            box.style.backgroundColor = "#787C7E";
        }
    }
    
    if (correctCount === 5) {
        alert("Congrats! You guessed it correctly. Reload the page to play again!");
        score = 5;
        health = -1;
        return;
    }

    health--;
    if (health === 0) {
        alert(`Nice try! The word was ${chosenWord}. Reload to play again.`);
        health = -1;
    }
}
