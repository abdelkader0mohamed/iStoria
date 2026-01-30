for (let i = 1; i <= 2; i++) {
  const pre = document.createElement('pre');
  pre.id = `chapter${i}`;
  pre.textContent = `Loading Chapter ${i}...`;
  document.body.appendChild(pre);

  fetch(encodeURI(`Levels/Level 1/1.What Did You Do Yesterday/chapter${i}.txt`))
    .then(res => res.text())
    .then(text => pre.textContent = text)
    .catch(err => pre.textContent = 'Error loading Chapter ' + i + ': ' + err);
}
