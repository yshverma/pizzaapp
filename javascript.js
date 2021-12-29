let data = ["sachin", "yash", "shelly", "rohan", "pradeep", "sanket", "Mrs kapoor"];

let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

const deleteButtons = document.querySelectorAll('.del');

deleteButtons.forEach(button => {
  button.addEventListener('click', removeMe);
});

function removeMe() {
  this.closest('li').remove();
}

let noOfChar = 150;
let contents = document.querySelectorAll(".content");
contents.forEach(content => {
  if (content.textContent.length < noOfChar) {
    content.nextElementSibling.style.display = "none";
  }
  else {
    let displayText = content.textContent.slice(0, noOfChar);
    let moreText = content.textContent.slice(noOfChar);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;


  }

});


function readMore(btn) {
  let post = btn.parseElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");

  btn.textContent == " readmore" ? btn.textContent = "Read Less" : btn.textContent = "readmore";
}

var modal = document.getElementById('id01');


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}