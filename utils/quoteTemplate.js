function quoteTemplate(name, content, author) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Quote Display</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f5f5f5; /* Neutral light gray */
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }

      .quote-container {
        text-align: center;
        max-width: 600px;
        background-color: #ffffff; /* White */
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        background-color: #f8f8f8; /* Subtle background color */
      }

      .quote-container:hover {
        transform: scale(1.02);
      }

      #userName {
        font-size: 28px;
        margin-bottom: 10px;
        color: #333333; /* Dark gray */
      }

      #quote {
        font-size: 20px;
        margin-bottom: 20px;
        color: #555555; /* Medium gray */
      }

      #author {
        font-size: 18px;
        color: #777777; /* Light gray */
      }
    </style>
  </head>
  <body>
    <div class="quote-container">
      <h1 id="userName">Hello ${name}!</h1>
      <blockquote id="quote">${content}</blockquote>
      <p id="author">- ${author}</p>
    </div>
  </body>
</html>
`;
}

module.exports = quoteTemplate;
