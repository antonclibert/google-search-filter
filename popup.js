document.addEventListener('DOMContentLoaded', function() {
  var searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', function() {
    var filetype = document.getElementById('filetype').value;
    var searchTerm = document.getElementById('searchTerm').value;
    var searchUrl = "https://www.google.com/search?q=filetype:" + filetype + " " + searchTerm;

    chrome.tabs.create({ url: searchUrl });
  });

  // Get the current year and update the copyright notice
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  yearElement.textContent = currentYear;
});

$(document).ready(function() {
  $('#filetype').select2({
    placeholder: 'Select File Type',
    allowClear: true,
    width: '100%',
  });
});

// paywall remover //
document.getElementById('prefixButton').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      const currentUrl = tabs[0].url;
      const newUrl = "https://www.12ft.io" + currentUrl;
      chrome.tabs.update(tabs[0].id, { url: newUrl });
    }
  });
});


// Adjust tooltip position on window resize
$(window).on('resize', function() {
  $('.tooltip').tooltipster('reposition');
});

// Initialize tooltipster library
$('.tooltip').tooltipster({
  animation: 'fade',
  delay: 200,
  theme: 'tooltipster-noir',
  side: 'bottom',
  maxWidth: 200,
});