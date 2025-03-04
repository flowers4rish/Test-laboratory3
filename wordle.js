var bgmusic = new Audio('bgmusic.mp3');
bgmusic.loop = true;
bgmusic.volume = 0.5;

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
var winSound = new Audio('winSound.mp3');
var loseSound = new Audio('loseSound.mp3');
var hurtSound = new Audio('hurtSound.mp3');

function setupGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    console.log("Chosen Word: " + chosenWord);
}

function checkWord() {
    bgmusic.play();
    if (health <= 0) return;
    
    let rowIndex = 5 - health;  
    let answer = prompt("Enter a 5-letter word:").toUpperCase();

    if (answer.length !== 5) {
        alert("Invalid input. Please enter a 5-letter word.");
        return;
    }

    let correctCount = 0;
    let box0 = document.getElementById(`r-${rowIndex}-0`);
    box0.innerText = answer[0];
    if (answer[0] === chosenWord[0]) {
        box0.style.backgroundColor = "#6AAA64";
        correctCount++;
    } else if (chosenWord.includes(answer[0])) {
    box0.style.backgroundColor = "#C9B458";
    } else {
    box0.style.backgroundColor = "#787C7E";
    }

    let box1 = document.getElementById(`r-${rowIndex}-1`);
    box1.innerText = answer[1];
    if (answer[1] === chosenWord[1]) {
        box1.style.backgroundColor = "#6AAA64";
        correctCount++;
    } else if (chosenWord.includes(answer[1])) {
        box1.style.backgroundColor = "#C9B458";
    } else {
        box1.style.backgroundColor = "#787C7E";
    }

    let box2 = document.getElementById(`r-${rowIndex}-2`);
    box2.innerText = answer[2];
    if (answer[2] === chosenWord[2]) {
        box2.style.backgroundColor = "#6AAA64";
        correctCount++;
    } else if (chosenWord.includes(answer[2])) {
        box2.style.backgroundColor = "#C9B458";
    } else {
        box2.style.backgroundColor = "#787C7E";
    }

    let box3 = document.getElementById(`r-${rowIndex}-3`);
    box3.innerText = answer[3];
    if (answer[3] === chosenWord[3]) {
        box3.style.backgroundColor = "#6AAA64";
        correctCount++;
    } else if (chosenWord.includes(answer[3])) {
        box3.style.backgroundColor = "#C9B458";
    } else {
        box3.style.backgroundColor = "#787C7E";
    }

    let box4 = document.getElementById(`r-${rowIndex}-4`);
    box4.innerText = answer[4];
    if (answer[4] === chosenWord[4]) {
        box4.style.backgroundColor = "#6AAA64";
        correctCount++;
    } else if (chosenWord.includes(answer[4])) {
        box4.style.backgroundColor = "#C9B458";
    } else {
        box4.style.backgroundColor = "#787C7E";
    }

    if (correctCount === 5) {
        bgmusic.pause()
        winSound.play();
        alert("Congrats! You guessed it correctly. Reload the page to play again!");
        score = 5;
        health = -1;
        return;
    }

    health--;
    hurtSound.play();
    if (health == 4) {
        document.body.style.backgroundColor = '#FFCCCC';
    }
    else if (health == 3) {
        document.body.style.backgroundColor = '#FF9999';
    }
    else if (health == 2) {
        document.body.style.backgroundColor = '#FF6666';
    }
    else if (health == 1) {
        document.body.style.backgroundColor = '#FF3333';
    }
    else if (health == 0) {
        document.body.style.backgroundColor = '#FF0000';
        bgmusic.pause();
        loseSound.play();
        alert(`Nice try! The word was ${chosenWord}. Reload to play again.`);
        health = -1;
        return;
    }
}
