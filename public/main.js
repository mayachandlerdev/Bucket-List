var strike = document.querySelectorAll(".clickable")



strike.forEach(el => {
  el.addEventListener('click', function(){

    const strikeItem = event.target.textContent;

    alert(strikeItem)

    fetch('messages', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        items: strikeItem
      })
    })
      .then(res => {
        window.location.reload();
      })

    // var strike = document.getElementById("clickable")
    // strike.style.setProperty("text-decoration", "line-through");
    // var ul = document.getElementById("completed");
    // var li = document.createElement("li");
    // strike.appendChild(document.createTextNode(li));
    // ul.appendChild(li);
  })
})







