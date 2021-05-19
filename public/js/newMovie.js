const createMovie = async (event) => {
    event.preventDefault();

    const movie = document.querySelector("#movie-title").value.trim();

    const genre = document.querySelector("#genre-select").value.trim();


    const response = await fetch('/api/movies', {
        method: 'POST',
        body: JSON.stringify({ movie, genre }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to add the movie to your watchlist.');
    }
};

document.querySelector('.new-movie').addEventListener('submit', createMovie);