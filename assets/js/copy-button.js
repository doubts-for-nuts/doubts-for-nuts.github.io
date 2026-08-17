document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('.highlight');

  // Double square for copy
  const copyIcon = `<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  // Tick for done
  const checkIcon = `<svg xmlns="http://w3.org" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  codeBlocks.forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    button.setAttribute('aria-label', 'Copy code');
    button.innerHTML = copyIcon;

    block.style.position = 'relative';
    block.appendChild(button);

    button.addEventListener('click', () => {
      const code = block.querySelector('code').innerText;

      window.navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = checkIcon; // Change to tick
        button.classList.add('copied');

        setTimeout(() => {
          button.innerHTML = copyIcon; // Back to double square
          button.classList.remove('copied');
        }, 2000);
      });
    });
  });
});
