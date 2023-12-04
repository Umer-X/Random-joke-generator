document.addEventListener('DOMContentLoaded', () => {
    const getJokeButton = document.getElementById('getJokeButton');
    const jokeElement = document.getElementById('joke');

    // Function to fetch a random joke
    async function fetchRandomJoke() {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
            if (!response.ok) {
                throw new Error('Failed to fetch joke');
            }
            const data = await response.json();
            return data.joke;
        } catch (error) {
            console.error('Error fetching joke:', error);
            return 'Failed to fetch joke';
        }
    }

    // Function to display the joke
    function displayJoke(joke) {
        jokeElement.textContent = joke;
    }

    // Event listener for the "Get Joke" button
    getJokeButton.addEventListener('click', async () => {
        getJokeButton.disabled = true;
        const joke = await fetchRandomJoke();
        displayJoke(joke);
        getJokeButton.disabled = false;
    });
});
