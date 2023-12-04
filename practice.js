document.addEventListener('DOMContentLoaded', () => {
    const getJokeButton = document.getElementById('getJokeButton');
    const jokeElement = document.getElementById('joke');


    async function fetchRandomJoke () {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
            if (!response.ok) {
                throw new Error('Failed to fetch Joke');
            }
            const data = await response.json();
            return data.joke
        }
        catch(error) {
            console.error('error fetching Joke', error);
            return 'failed to fetch Joke';
        }
    }
});