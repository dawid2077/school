const textInput = document.getElementById('textInput');
const applyBtn = document.getElementById('applyBtn');
const outputText = document.getElementById('outputText');

const sizeSlider = document.getElementById('sizeSlider');
const sizeValue = document.getElementById('sizeValue');

const fontSelect = document.getElementById('fontSelect');

const colorBtns = document.querySelectorAll('.color-btn');

const boldCheck = document.getElementById('boldCheck');
const italicCheck = document.getElementById('italicCheck');
const underlineCheck = document.getElementById('underlineCheck');
const strikeCheck = document.getElementById('strikeCheck');

const checkBoldBtn = document.getElementById('checkBold');
const checkItalicBtn = document.getElementById('checkItalic');
const checkUnderlineBtn = document.getElementById('checkUnderline');
const checkStrikeBtn = document.getElementById('checkStrike');

const radioButtons = document.querySelectorAll('input[name="extraStyle"]');

const spacingBtns = document.querySelectorAll('.spacing-btn');
const spacingValue = document.getElementById('spacingValue');
const header = document.querySelector('header');

let currentColor = 'black';

sizeSlider.addEventListener('input', function() {
    sizeValue.textContent = this.value + 'px';
});

colorBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        currentColor = this.getAttribute('data-color');
    });
});

checkBoldBtn.addEventListener('click', function() {
    boldCheck.checked = !boldCheck.checked;
});

checkItalicBtn.addEventListener('click', function() {
    italicCheck.checked = !italicCheck.checked;
});

checkUnderlineBtn.addEventListener('click', function() {
    underlineCheck.checked = !underlineCheck.checked;
});

checkStrikeBtn.addEventListener('click', function() {
    strikeCheck.checked = !strikeCheck.checked;
});

spacingBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const spacing = this.getAttribute('data-spacing');
        header.style.padding = spacing + 'px 0';
        spacingValue.textContent = 'Aktualne: ' + spacing + 'px';
    });
});

applyBtn.addEventListener('click', function() {
    const text = textInput.value;
    outputText.textContent = text;
    
    outputText.style.fontSize = sizeSlider.value + 'px';
    outputText.style.fontFamily = fontSelect.value;
    outputText.style.color = currentColor;
    outputText.style.fontWeight = 'normal';
    outputText.style.fontStyle = 'normal';
    outputText.style.textDecoration = 'none';
    
    if (boldCheck.checked) {
        outputText.style.fontWeight = 'bold';
    }
    if (italicCheck.checked) {
        outputText.style.fontStyle = 'italic';
    }
    
    let decorations = [];
    if (underlineCheck.checked) {
        decorations.push('underline');
    }
    if (strikeCheck.checked) {
        decorations.push('line-through');
    }
    
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            if (radioButtons[i].value === 'italic') {
                outputText.style.fontStyle = 'italic';
            } else if (radioButtons[i].value === 'overline') {
                decorations.push('overline');
            } else if (radioButtons[i].value === 'line-through') {
                decorations.push('line-through');
            }
        }
    }
    
    if (decorations.length > 0) {
        outputText.style.textDecoration = decorations.join(' ');
    }
});
