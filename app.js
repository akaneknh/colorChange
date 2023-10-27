const click = document.querySelector("button");
const h1 = document.querySelector('h1')
click.addEventListener("click", ()=>{
  const newColor = randomColor();
  click.style.backgroundColor = newColor;
  h1.innerText = newColor;

});

const randomColor = ()=>{
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r},${g},${b})`;
}
