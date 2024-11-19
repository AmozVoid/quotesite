document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("quote-box"); // Changed to quote-box
  
    // Fetch quotes from the JSON file
    fetch("quotes.json")
      .then(response => response.json())
      .then(data => {
        // Loop through each quote and create a box for it
        data.forEach(quote => {
          // Create a new box div
          const box = document.createElement("div");
          box.className = "box";
  
          // Add the quote text
          const quoteText = document.createElement("p");
          quoteText.textContent = `"${quote.text}"`;
          box.appendChild(quoteText);
  
          // Add the author
          const quoteAuthor = document.createElement("p");
          quoteAuthor.textContent = `- ${quote.author}`;
          quoteAuthor.style.fontStyle = "italic";
          box.appendChild(quoteAuthor);
  
          // Append the box to the container
          container.appendChild(box);
        });
      })
      .catch(error => {
        console.error("Error loading quotes:", error);
      });
  });
  