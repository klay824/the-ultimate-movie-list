const updateStatus = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('movie-id')) {
        const id = event.target.getAttribute('movie-id');
        const status = document.querySelector('#flexCheckDefault').checked = true;

        const response = await fetch(`/api/movies/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to change watched status.');
        }
    }
};

document.querySelector('.form-check').addEventListener('change', updateStatus);