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
  switch (target) {
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
  }
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