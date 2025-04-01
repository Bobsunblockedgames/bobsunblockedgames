document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Create gradient elements
    const gradient1 = document.createElement('div');
    const gradient2 = document.createElement('div');
    gradient1.className = 'gradient-1';
    gradient2.className = 'gradient-2';
    body.appendChild(gradient1);
    body.appendChild(gradient2);

    // Update mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth animation function
    function animate() {
        // Smooth interpolation
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        // Update gradient positions
        gradient1.style.transform = `translate(${currentX}px, ${currentY}px)`;
        gradient2.style.transform = `translate(${currentX * 0.5}px, ${currentY * 0.5}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}); 