const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000

// Set the public directory for static assets
app.use(express.static(path.join(__dirname, "public")));

// Set views directory for EJS templates
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Sample route (replace with your movie data fetching logic)
app.get("/", (req, res) => {
  const movies = [
    { title: "Movie 1", showtimes: ["1:00 PM", "7:00 PM"] },
    { title: "Movie 2", showtimes: ["3:00 PM", "9:00 PM"] },
  ];
  res.render("index", { movies }); // Pass movies data to the template
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const express = require("express");
const path = require("path");
