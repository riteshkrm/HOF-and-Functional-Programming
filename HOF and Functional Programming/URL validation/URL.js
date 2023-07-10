function validateURL(url) {
  var pattern = /^(http|https):\/\/[\w.-]+(\.[\w.-]+)+[^\s@]*$/;
  if (pattern.test(url)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}

// Test the function with different URLs
validateURL("http://example.com");
validateURL("https://www.example.com");
validateURL("http://123example.com");
validateURL("https://example123.com");
validateURL("ftp://example.com");
