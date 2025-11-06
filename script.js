// Tab navigation
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Remove active class from all buttons
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show specific tab and activate button
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

// AI Chatbot Functions
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message === '') return;

    // Add user message
    addMessage(message, 'user');
    userInput.value = '';

    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's interesting! Tell me more.",
            "I understand what you're saying.",
            "How can I help you with that?",
            "That's a great point!",
            "Let me think about that...",
            "I'm here to help! What else would you like to know?",
            "Fascinating! Could you elaborate?",
            "I see what you mean. Is there anything specific you'd like me to do?"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Allow sending message with Enter key
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Image Generator Functions
function generateImage() {
    const prompt = document.getElementById('image-prompt').value.trim();
    if (prompt === '') {
        alert('Please enter an image description!');
        return;
    }

    const imageResult = document.getElementById('generated-image');
    const status = document.getElementById('image-status');
    
    // Show loading state
    imageResult.src = '';
    imageResult.alt = 'Generating image...';
    
    // Simulate image generation (in real implementation, this would call an API)
    setTimeout(() => {
        // For demo purposes, we'll use placeholder images based on keywords
        const placeholderImages = {
            'whale': 'https://placehold.co/600x400/4ECDC4/white?text=🐋+Cartoon+Whale',
            'city': 'https://placehold.co/600x400/45B7D1/white?text=🏙️+Futuristic+City',
            'forest': 'https://placehold.co/600x400/4CAF50/white?text=🌲+Magic+Forest',
            'default': 'https://placehold.co/600x400/667eea/white?text=✨+Generated+Image'
        };

        let imageUrl = placeholderImages.default;
        if (prompt.toLowerCase().includes('whale')) imageUrl = placeholderImages.whale;
        else if (prompt.toLowerCase().includes('city')) imageUrl = placeholderImages.city;
        else if (prompt.toLowerCase().includes('forest')) imageUrl = placeholderImages.forest;

        imageResult.src = imageUrl;
        imageResult.alt = prompt;
        imageResult.style.display = 'block';
    }, 2000);
}

function useTemplate(prompt) {
    document.getElementById('image-prompt').value = prompt;
    generateImage();
}

// Video Generator Functions
function generateVideo() {
    const prompt = document.getElementById('video-prompt').value.trim();
    const style = document.getElementById('video-style').value;
    
    if (prompt === '') {
        alert('Please enter a video description!');
        return;
    }

    const videoElement = document.getElementById('generated-video');
    const statusElement = document.getElementById('video-status');
    
    statusElement.textContent = `Generating ${style} video: "${prompt}"...`;
    videoElement.style.display = 'none';

    // Simulate video generation
    setTimeout(() => {
        statusElement.textContent = 'Video generation complete! (Demo - would be real video in production)';
        // In a real app, this would set videoElement.src to the generated video URL
        videoElement.style.display = 'block';
    }, 3000);
}

// Code Helper Functions
function generateCode() {
    const description = document.getElementById('code-input').value.trim();
    const language = document.getElementById('code-language').value;
    
    if (description === '') {
        alert('Please describe what code you want to generate!');
        return;
    }

    const codeElement = document.getElementById('generated-code');
    
    // Simulate AI code generation
    const codeExamples = {
        html: `<div class="container">
    <h1>Hello World</h1>
    <p>${description}</p>
</div>`,
        
        css: `.container {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 20px;
    border-radius: 10px;
}

/* Styles for: ${description} */`,
        
        javascript: `// ${description}
function main() {
    console.log("Hello World!");
    // Your code here
}

main();`,
        
        python: `# ${description}
def main():
    print("Hello World!")
    # Your code here

if __name__ == "__main__":
    main()`
    };

    codeElement.textContent = codeExamples[language] || '// Code generation not available for this language';
}

function copyCode() {
    const codeElement = document.getElementById('generated-code');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
}

// Initialize with some demo content
document.addEventListener('DOMContentLoaded', function() {
    // Add welcome message to chatbot
    addMessage("Welcome! I'm your AI assistant. Try asking me anything!", 'bot');
});
