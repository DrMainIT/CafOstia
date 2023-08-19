let container = document.querySelector(".container");

container.addEventListener("click", ({
  target
}) => {
  if (target.nodeName !== "P") return; // return if p is not clicked
  Array.from(document.querySelectorAll(".container>p")).forEach(p => p.classList.remove("active")); // make the others inactive
  target.classList.toggle("active");
})
let p_in_container = document.querySelectorAll(".container>p");
let p_in_container1 = document.querySelectorAll(".container1>p");

container.addEventListener("click", ({target}) => {
  if (target.nodeName !== "P") return; // return if p is not clicked

  var idx_clicked = Array.from(p_in_container).indexOf(target);
  var target_p = p_in_container1[idx_clicked];
  // var is_active = target_p.classList.contains('active1');

  Array.from(p_in_container1).forEach(p => p.classList.remove("active1")); // make the others inactive
  // p_in_container1[idx_clicked].classList.toggle("active1", !is_active);
  p_in_container1[idx_clicked].classList.toggle("active1");
  ;
})












// container.addEventListener("click", ({
//   target
// }) => {
//   if (target.nodeName !== "P") return; // return if p is not clicked
//   Array.from(document.querySelectorAll(".container1>p")).forEach(p => p.classList.remove("active1")); // make the others inactive
//   target.classList.toggle("active1");
// })






