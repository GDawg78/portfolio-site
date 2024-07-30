const scriptURL = 'https://script.google.com/macros/s/AKfycbyHjTeuEZvgzzdCigdfW_BJud7pZJsTurwS3wLsAQsGj5gaMeibTrQhqeUPqRv-FoQB4A/exec'

const form = document.forms['contacts']

form.addEventListener('submit', e => {
    e.preventDefault();
  
    // Hide the submit button
    const submitButton = document.getElementById('submit');
    if (submitButton) {
      submitButton.style.display = 'none';
    }
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Gotcha! Will get back to you shortly!"))
      .then(() => { window.location.href = "#"; })
      .catch(error => console.error('That didn\'t quite seem to work, try me on LinkedIn!', error.message));
  });