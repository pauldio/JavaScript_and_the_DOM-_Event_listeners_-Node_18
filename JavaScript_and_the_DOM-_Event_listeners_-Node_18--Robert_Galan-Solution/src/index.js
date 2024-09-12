import "./styles.css";

/*
Add event listeners to the `.expand_button` buttons
*/
function expandArticleBody() {
  const expandButtons = document.querySelectorAll('.expand_button');
  
  expandButtons.forEach(button => {
    // Add a click event listener for each bttn
      button.addEventListener('click', function() {
        const article = button.closest('article');
        const articleBody = article.querySelector('.article_body');
        if (button.textContent === 'V') {
              // Collapse the article body
              articleBody.style.display = 'none';
              // Change the button text to ">"
              button.textContent = '>';
          } else {
              // Expand the article body
              articleBody.style.display = 'block';
              // Change the button text to "V"
              button.textContent = 'V';
          }
      });
    });
}

/*
Add event listeners to the `.highlightBtn` buttons
*/
function highlightArticle() {
  // Select all buttons with the class .highlightBtn
  const highlightButtons = document.querySelectorAll('.highlightBtn');

  highlightButtons.forEach(button => {
      // Add a click event listener for each button
      button.addEventListener('click', function() {
          // Find the parent article that the clicked button belongs to
          const article = button.closest('article');

          // Check the current text on the button
          if (button.textContent === '+') {
              // Add the .highlight class to the article
              article.classList.add('highlight');
              // Change the button text to "-"
              button.textContent = '-';
          } else {
              // Remove the .highlight class from the article
              article.classList.remove('highlight');
              // Change the button text to "+"
              button.textContent = '+';
          }
      });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
