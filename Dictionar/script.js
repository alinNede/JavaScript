let dictionaryMap = new Map();
dictionaryMap.set("coffee", "cafea");
dictionaryMap.set("hello", "salut");
dictionaryMap.set("war", "razboi");

let saveButton = document.getElementById("save-button");
let findButton = document.getElementById("find-button");
let toSaveElementId = document.getElementById("save-word");
let translatedElementId = document.getElementById("translated-word");
let searchElementId = document.getElementById("search-word");
let answerElementId = document.getElementById("answer-word");

function saveWord(word, translatedWord) {
    dictionaryMap.set(word, translatedWord)
}

function findWord(word) {
    if (dictionaryMap.has(word)) {
        answerElementId.value = dictionaryMap.get(word);
    } else {
        answerElementId.value = word + " not register";
    }
}

saveButton.addEventListener("click", function() {
    let inputText = toSaveElementId.value;
    let translatedText = translatedElementId.value;
    if (inputText && translatedText) {
        saveWord(inputText, translatedText);
    } 
    toSaveElementId.value = "";
    translatedElementId.value = "";
});

findButton.addEventListener("click", function() {
    let searchText = searchElementId.value;
    findWord(searchText);
    searchElementId.value = "";
});

