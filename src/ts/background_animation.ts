import { createParticle } from './particle/createParticle';
import { updateParticle } from './particle/updateParticle';
import { drawParticle } from './particle/drawParticle';
import { Particle, Mouse } from './types';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('backgroundanimation') as HTMLCanvasElement;

    // Check if canvas is present in the DOM
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    // Get the 2D drawing context
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('2D context not available on canvas');
        return;
    }

    // Particle array and mouse object
    let particlesArray: Particle[] = [];
    const mouse: Mouse = { x: undefined, y: undefined, radius: 150 };

    // Maximum number of particles allowed
    const maxParticles = 100;

    // Set canvas dimensions
    function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Initialize the particles
    function initParticles() {
        particlesArray = [];
        const numberOfParticles = 80;
        const neonColors = ['#f200ff', '#9d00ff', '#00ff15', '#4afff9', '#cc00ff', '#e100ff'];

        for (let i = 0; i < numberOfParticles; i++) {
            const size = Math.random() * 5 + 5;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const color = neonColors[Math.floor(Math.random() * neonColors.length)];
            particlesArray.push(createParticle(x, y, size, color));
        }
    }

    // Connect particles with lines based on proximity
    function connectParticles() {
        particlesArray.forEach((particleA, a) => {
            particlesArray.forEach((particleB, b) => {
                if (b <= a) return; // Skip already checked particles
                const distance = (particleA.x - particleB.x) ** 2 + (particleA.y - particleB.y) ** 2;
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    ctx.strokeStyle = 'rgba(242, 255, 255, 0.5)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particleA.x, particleA.y);
                    ctx.lineTo(particleB.x, particleB.y);
                    ctx.stroke();
                }
            });
        });
    }

    // Animate the particles (main animation loop)
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before drawing

        // Update and draw particles, and remove those moving towards the mouse
        particlesArray = particlesArray.filter(particle => {
            updateParticle(particle, mouse, canvas.width, canvas.height); // Update particle
            drawParticle(ctx, particle); // Draw particle on the canvas

            // Return only particles not marked for removal
            return !particle.remove;
        });

        connectParticles(); // Connect particles with lines if necessary

        // Call animate recursively for the next frame
        requestAnimationFrame(animate);
    }

    // Event listener for mouse movement to track mouse position
    canvas.addEventListener('mousemove', event => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    // Event listener for mouse out (to stop interaction when mouse leaves canvas)
    canvas.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    // Event listener for adding particles on click
    canvas.addEventListener('click', event => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const neonColors = ['#f200ff', '#9d00ff', '#00ff15', '#4afff9', '#cc00ff', '#e100ff'];
        const size = Math.random() * 5 + 5;
        const color = neonColors[Math.floor(Math.random() * neonColors.length)];

        // Add a new particle
        particlesArray.push(createParticle(x, y, size, color));

        // If we have more than maxParticles, remove the oldest particle
        if (particlesArray.length > maxParticles) {
            particlesArray.shift(); // Remove the first particle in the array
        }
    });

    // Handle window resizing
    window.addEventListener('resize', () => {
        setCanvasDimensions();
        initParticles(); // Re-initialize particles when the window size changes
    });

    // Set up canvas dimensions, initialize particles, and start the animation loop
    setCanvasDimensions();
    initParticles();
    animate(); // Start the animation loop
});
