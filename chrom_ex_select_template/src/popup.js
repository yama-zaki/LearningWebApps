$("#changefile_fix").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      typename: "fix"
    });
  });
});

$("#changefile_features").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      typename: "features"
    });
  });
});

$("#changefile_print").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      typename: "print"
    });
  });
});

$("#changefile_spec").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      typename: "spec"
    });
  });
});
