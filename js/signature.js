document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('signature');
    const ctx = canvas.getContext('2d');
    let drawing = false;
    
    // Set initial canvas size
    const resizeCanvas = () => {
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    };
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
    });
    
    // Initialize canvas size
    resizeCanvas();

    // Start drawing
    const startDrawing = () => {
        drawing = true;
        ctx.beginPath();
    };
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', startDrawing);

    // Get correct mouse/touch position
    const getPosition = (event) => {
        const rect = canvas.getBoundingClientRect();
        return {
            x: (event.clientX || event.touches[0].clientX) - rect.left,
            y: (event.clientY || event.touches[0].clientY) - rect.top
        };
    };

    // Draw signature
    const draw = (event) => {
        if (drawing) {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = 'black';
            const pos = getPosition(event);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
    };

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw);

    // Stop drawing
    const stopDrawing = () => {
        drawing = false;
        ctx.closePath();
    };
    
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchend', stopDrawing);

    // Clear signature button
    document.getElementById('clearSignature').addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // Form submission
    document.getElementById('signatureForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const signatureData = canvas.toDataURL(); // Get signature as Base64 image

        // Clear previous data
        localStorage.removeItem('name');
        localStorage.removeItem('id');
        localStorage.removeItem('email');

        // Store data in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('signature', signatureData);

        // Redirect to display page
        window.location.href = 'display.html';
    });
});
