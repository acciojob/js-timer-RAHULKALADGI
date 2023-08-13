// write js code here if required
let p = document.getElementById("timer");
let date = new Date();
let s = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
p.innerText = s;
