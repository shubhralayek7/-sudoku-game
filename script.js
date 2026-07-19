const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const b = document.getElementById('board');

function draw() {
  b.innerHTML = '';
  for (let r = 0; r < 9; r++)
    for (let c = 0; c < 9; c++) {
      const i = document.createElement('input');
      i.maxLength = 1;
      if (puzzle[r][c]) {
        i.value = puzzle[r][c];
        i.disabled = true;
      }
      i.dataset.r = r;
      i.dataset.c = c;
      b.appendChild(i);
    }
}

draw();

document.getElementById('check').onclick = () => {
  let ok = true;
  document.querySelectorAll('#board input').forEach(i => {
    let r = +i.dataset.r,
      c = +i.dataset.c;
    if (!i.disabled && +i.value !== solution[r][c]) ok = false;
  });
  alert(ok ? 'Solved!' : 'Some entries are incorrect.');
};

document.getElementById('new').onclick = draw;