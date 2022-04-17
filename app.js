const adviceNumber = document.getElementById('adviceNumber')
const advice = document.getElementById('advice')



const generator = () => {
  axios.get('https://api.adviceslip.com/advice')
  .then(response => {
    console.log(response.data.slip)
    adviceNumber.textContent = 'Article #' + response.data.slip.id;
    advice.textContent = '"' + response.data.slip.advice + '"'
    console.log(advice.textContent)


  }), error => {
    console.log(error);
  }  
}