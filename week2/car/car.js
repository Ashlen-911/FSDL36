// JavaScript to handle the interaction and send the prompt to the server
function generateImage() {
    const prompt = document.getElementById('prompt').value;
    if (!prompt) {
        alert('Please enter a prompt.');
        return;
    }

    // Show loading message while image is being generated
    document.getElementById('loading').style.display = 'block';
    document.getElementById('image-container').innerHTML = '';

    // Send request to back-end server (mocked for now)
    // In real-world, this would be an API request to your AI model
    setTimeout(() => {
        const generatedImageURL = 'https://via.placeholder.com/8000x4500.png?text=Generated+Image'; // Mocked 8K Image
        displayGeneratedImage(generatedImageURL);
    }, 3000); // Simulating a 3-second delay for image generation
}

// Function to display the generated image
function displayGeneratedImage(imageURL) {
    document.getElementById('loading').style.display = 'none';
    const imgElement = document.createElement('img');
    imgElement.src = imageURL;
    imgElement.alt = 'Generated 8K Image';
    document.getElementById('image-container').appendChild(imgElement);
}
