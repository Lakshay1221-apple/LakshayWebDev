
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwMLmqEsmh0EbS8z8vLtJTfx9hBEzOa25MCB3Z7X7BXBUAgMIrnPWEtsUK8I5X5iiE9/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        meg.innerHTML = "Thank you for Subscribing"

      })
      .catch(error => console.error('Error!', error.message))
  })
   