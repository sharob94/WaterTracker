const price = document.querySelector('#waterAmount');
        const output = document.querySelector('.price-output');

        output.textContent = price.value;

        price.addEventListener('input', function() {
          output.textContent = price.value;
        });
let dt = new Date();
 document.getElementById('date').innerHTML = dt.toDateString();

let trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id:element.value
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
