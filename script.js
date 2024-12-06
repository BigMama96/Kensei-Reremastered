console.log("Script Running.");
document.addEventListener('DOMContentLoaded', function () {

    const showCharactersBtn = document.querySelector('.button.is-halfwidth:nth-of-type(1)');
    const showSushiBtn = document.querySelector('.button.is-halfwidth:nth-of-type(2)');
    const showAllBtn = document.querySelector('.button.is-halfwidth:nth-of-type(3)');

    const charactersSection = document.getElementById('characters');
    const sushiSection = document.getElementById('sushi');
    const allSection = document.getElementById('all');
  
 

    showCharactersBtn.addEventListener('click', function () {
      charactersSection.style.display = 'block'; 
      sushiSection.style.display = 'none';        
    });
  
 
    showSushiBtn.addEventListener('click', function () {
      sushiSection.style.display = 'block';     
      charactersSection.style.display = 'none';
    });
 
  
  showAllBtn.addEventListener('click', function () {
    sushiSection.style.display = 'block';     
    charactersSection.style.display = 'block';
  });
});



