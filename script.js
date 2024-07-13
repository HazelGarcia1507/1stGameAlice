const alphabet = {
    'a': 'images/agua.png',
    'b': 'images/botella.png',
    'c': 'images/casa.png',
    'd': 'images/diente.png',
    'e': 'images/elote.png',
    'f': 'images/foco.png',
    'g': 'images/gato.png',
    'h': 'images/helado.png',
    'i': 'images/iglu.png',
    'j': 'images/jirafa.png',
    'k': 'images/koala.png',
    'l': 'images/limon.png',
    'm': 'images/manzana.png',
    'n': 'images/nina.png',
    'ñ': 'images/nu.png',
    'o': 'images/oso.png',
    'p': 'images/pato.png',
    'q': 'images/queso.png',
    'r': 'images/raton.png',
    's': 'images/sol.png',
    't': 'images/telefono.png',
    'u': 'images/uva.png',
    'v': 'images/vaca.png',
    'w': 'images/waffle.png',
    'x': 'images/xilofono.png',
    'y': 'images/yoyo.png',
    'z': 'images/zapato.png',
};

let originalMessage = '';

function encodeMessage() {
    const inputMessage = document.getElementById('input-message').value;
    originalMessage = inputMessage;
    const messageContainer = document.getElementById('message-container');
    const guessContainer = document.getElementById('guess-container');
    const guessMessageInput = document.getElementById('guess-message');
    messageContainer.innerHTML = '';
    guessContainer.style.display = 'block';
    document.getElementById('input-container').style.display = 'none';
    
    for (let char of inputMessage) {
        const lowerChar = char.toLowerCase();
        if (alphabet[lowerChar]) {
            const letterDiv = document.createElement('div');
            letterDiv.classList.add('letter', 'guess-letter');
            const img = document.createElement('img');
            img.src = alphabet[lowerChar];
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.oninput = function() {
                guessMessageInput.value = updateGuessMessage();
            };
            letterDiv.appendChild(img);
            letterDiv.appendChild(input);
            messageContainer.appendChild(letterDiv);
        } else if (char === ' ') {
            const spaceDiv = document.createElement('div');
            spaceDiv.classList.add('letter', 'space');
            const span = document.createElement('span');
            span.textContent = ' ';
            spaceDiv.appendChild(span);
            messageContainer.appendChild(spaceDiv);
        } else {
            const span = document.createElement('span');
            span.textContent = char;
            messageContainer.appendChild(span);
        }
    }
}

function updateGuessMessage() {
    const guessInputs = document.querySelectorAll('.guess-letter input, .space span');
    let guessMessage = '';
    guessInputs.forEach(input => {
        guessMessage += input.value || ' ';
    });
    return guessMessage;
}

function checkGuess() {
    const guessMessage = document.getElementById('guess-message').value;
    const result = document.getElementById('result');
    
    if (guessMessage.toLowerCase() === originalMessage.toLowerCase()) {
        result.textContent = '¡Correcto! Adivinaste el mensaje.';
        document.getElementById('new-message-button').style.display = 'block';
    } else {
        result.textContent = 'Lo siento, inténtalo de nuevo.';
    }
}

function showReference() {
    const referenceContainer = document.getElementById('reference-container');
    const referenceImage = document.getElementById('reference-image');
    const messageContainer = document.getElementById('message-container');
    const referenceButton = document.getElementById('reference-button');
    referenceImage.src = 'images/ABC.png'; // Cambia esto por la ruta de tu imagen de referencia
    referenceContainer.style.display = 'block';
    referenceButton.style.display = 'none';
    messageContainer.style.display = 'none';
}

function hideReference() {
    const referenceContainer = document.getElementById('reference-container');
    const messageContainer = document.getElementById('message-container');
    const referenceButton = document.getElementById('reference-button');
    referenceContainer.style.display = 'none';
    referenceButton.style.display = 'block';
    messageContainer.style.display = 'flex';
}

function startNewMessage() {
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('guess-container').style.display = 'none';
    document.getElementById('message-container').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('input-message').value = '';
    document.getElementById('new-message-button').style.display = 'none';
}
