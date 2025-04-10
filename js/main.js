document.addEventListener("DOMContentLoaded", function () {
  const terminalText = [
    '$ whoami',
    'Matheus Duarte – desenvolvedor focado em back-end com Java e Python.',
    '',
    '$ stack',
    'Java | Python | C | HTML/CSS | JS (aprendendo!)',
    '',
    '$ visão',
    'Buscando me tornar full stack, unindo robustez no back-end com interfaces modernas.',
    ''
  ];

  const terminalElement = document.getElementById('terminal-text');
  const bootElement = document.getElementById('terminal-boot');

  let line = 0;
  let charIndex = 0;

  function typeLine() {
    if (line >= terminalText.length) return;

    const currentLine = terminalText[line];
    const span = document.createElement('div');
    span.classList.add('linha-terminal');
    terminalElement.appendChild(span);

    function typeChar() {
      if (charIndex < currentLine.length) {
        span.innerHTML += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 25);
      } else {
        charIndex = 0;
        line++;
        setTimeout(typeLine, 300);
      }
    }

    typeChar();
  }

  setTimeout(() => {
    typeLine();
  }, 2600); // inicia logo após o boot desaparecer
});
