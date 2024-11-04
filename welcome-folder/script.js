// Event tab switching
function openTab(e, eventTabName) {
    // Hide all elements with class "event-tab-content"
    let eventTabContent = document.getElementsByClassName("event-tab-content");
    for (let i = 0; i < eventTabContent.length; i++) {
      eventTabContent[i].style.display = "none";
    }
  
    // Remove "active" class from all tab links
    let eventTabLinks = document.getElementsByClassName("event-tab-link");
    for (let i = 0; i < eventTabLinks.length; i++) {
      eventTabLinks[i].classList.remove("active"); // Corrected here
    }
  
    // Show the current tab's content and add "active" class to the clicked tab link
    document.getElementById(eventTabName).style.display = "block";
    e.currentTarget.classList.add("active");
  }
  
  // By default, open the first tab
  document.getElementsByClassName("event-tab-link")[0].click();
  