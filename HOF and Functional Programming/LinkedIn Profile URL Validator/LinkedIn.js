function validateLinkedInURL(url) {
  var pattern =
    /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  if (pattern.test(url)) {
    console.log("Valid LinkedIn Profile URL");
  } else {
    console.log("Invalid LinkedIn Profile URL");
  }
}

// Test the function with different LinkedIn profile URLs
validateLinkedInURL("https://www.linkedin.com/in/johndoe123");
validateLinkedInURL("https://www.linkedin.com/in/jane_doe");
validateLinkedInURL("https://www.linkedin.com/in/alex-123");
validateLinkedInURL("https://www.linkedin.com/in/abc_def_xyz");
validateLinkedInURL("https://www.linkedin.com/in/invalid_profile");
