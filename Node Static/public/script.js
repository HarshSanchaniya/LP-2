document.addEventListener("DOMContentLoaded", function () {
  const movieContainer = document.getElementById("movieContainer");
  const modal = document.getElementById("myModal");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.querySelector(".close");
  const bookTicketBtn = document.getElementById("bookTicketBtn");

  // Movie data (title, image URL, information, showtimes, theaters)
  const movies = [
    {
      title: "Movie 1",
      poster: "movie1.jpg",
      info: "Information about Movie 1.",
      showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"],
      theaters: ["Theater A", "Theater B", "Theater C"],
    },
    {
      title: "Movie 2",
      poster: "movie2.jpg",
      info: "Information about Movie 2.",
      showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"],
      theaters: ["Theater X", "Theater Y", "Theater Z"],
    },
    {
      title: "Movie 3",
      poster: "movie3.jpg",
      info: "Information about Movie 3.",
      showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"],
      theaters: ["Theater P", "Theater Q", "Theater R"],
    },
  ];

  // Function to create movie cards
  function createMovieCard(movie) {
    const card = document.createElement("div");
    card.classList.add("movie-card");
    card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
        `;
    card.addEventListener("click", function () {
      showModal(movie);
    });
    return card;
  }

  // Function to show modal with movie information
  function showModal(movie) {
    modal.style.display = "block";
    modalContent.innerHTML = `
            <span class="close">&times;</span>
            <h2 id="movieTitle">${movie.title}</h2>
            <p id="movieInfo">${movie.info}</p>
            <p><strong>Showtimes:</strong> ${movie.showtimes.join(", ")}</p>
            <p><strong>Theaters:</strong> ${movie.theaters.join(", ")}</p>
            <button id="bookTicketBtn">Book Ticket</button>
        `;

    // Add event listener for closing the modal
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Add event listener for booking ticket
    bookTicketBtn.addEventListener("click", function () {
      // Here you can implement booking logic
      alert("Ticket booked successfully");
      modal.style.display = "none";
    });
  }

  // Function to initialize the movie cards
  function init() {
    movies.forEach((movie) => {
      const card = createMovieCard(movie);
      movieContainer.appendChild(card);
    });
  }

  // Initialize movie cards
  init();
});
