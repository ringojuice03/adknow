// Assuming you have content for each tab (e.g., campusContent, officesContent, etc.)
const campusContent = "Welcome to the campus section!";
const officesContent = "Explore our various offices.";
const academicsContent = "Discover our academic programs.";
const historyContent = "Learn about our rich history.";

const contentDiv = document.getElementById('content');
const tabs = document.querySelectorAll('.nav-tab');

tabs.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target.getAttribute('href').substring(1);
    switchTab(target);
  });
});

function switchTab(target) {
  // Hide all content
  contentDiv.innerHTML = '';

  // Show content based on the selected tab
  /*switch (target) {
    case 'campus':
      contentDiv.innerHTML = campusContent;
      break;
    case 'offices':
      contentDiv.innerHTML = officesContent;
      break;
    case 'academics':
      contentDiv.innerHTML = academicsContent;
      break;
    case 'history':
      contentDiv.innerHTML = historyContent;
      break;
    default:
      break;
  }*/
}

function showContent(option) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content
  
    switch (option) {
      case 'option1':
        contentDiv.innerHTML = '<p>Content for Option 1</p>';
        break;
      case 'option2':
        contentDiv.innerHTML = '<p>Content for Option 2</p>';
        break;
      case 'option3':
        contentDiv.innerHTML = '<p>Content for Option 3</p>';
        break;
      case 'option4':
        contentDiv.innerHTML = '<p>Content for Option 4</p>';
        break;
      default:
        break;
    }
  }

// Adknow.js
function addMessage() {
  var input = document.getElementById('input');
  var chat = document.getElementById('chat');
  var userDiv = document.createElement('div');
  userDiv.textContent = input.value;
  userDiv.className = 'message user';
  chat.appendChild(userDiv);
  var programDiv = document.createElement('div');
  programDiv.textContent = 'Hello there, Lorem ipsum';
  programDiv.className = 'message program';
  chat.appendChild(programDiv);
  input.value = '';
}

// Adknow.js
function redirectToSecondPage() {
  // Replace "second_page.html" with the actual filename or path of the second HTML file
  window.location.href = "conversation";
}

// Adknow.js
document.addEventListener('DOMContentLoaded', function () {
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');

  chatForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Your logic to handle sending the message goes here
      // For example, call a function to process the input value
      // redirectToSecondPage();
  });

  chatInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
          e.preventDefault(); // Prevent default Enter behavior (new line)
          redirectToSecondPage();
      }
  });
});