
const fn = n => ~~n + 1
const arr = Array.from({ length: 10 }).map(() => fn(Math.random()))

document.body.innerHTML = arr.join(',')
