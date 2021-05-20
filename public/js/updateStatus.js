const updateStatus = async (event) => {
    console.log('EVENT', event);
    event.preventDefault();

    if (event.target.hasAttribute('movie-id')) {
        const id = event.target.getAttribute('movie-id');
        const status = document.querySelector(`#set-watched-${id}`).checked;


        console.log('ID', id);
        console.log('STATUS', status);

        const res = await fetch(`/api/movies/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ status }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            window.location.replace('/dashboard');
        }
    }
};

document.querySelector('.form-check').addEventListener('submit', updateStatus);