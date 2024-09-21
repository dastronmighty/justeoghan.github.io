// Background Animation Script
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');

let particlesArray = [];
const mouse = {
    x: undefined,
    y: undefined,
    radius: 50
};

// Set canvas dimensions
function setCanvasDimensions() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

setCanvasDimensions();

// Update mouse position
canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Create Particle class
class Particle {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
        this.speed = {
            x: Math.random() * 1 - 0.1,
            y: Math.random() * 1 - 0.1
        };
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        // Move particles
        this.x += this.speed.x;
        this.y += this.speed.y;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
            this.speed.x *= -1;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.speed.y *= -1;
        }

        // Check mouse position
        if (mouse.x !== undefined && mouse.y !== undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                // Attract particles toward the mouse
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (mouse.radius - distance) / mouse.radius;
                let directionX = forceDirectionX * force * this.density * 0.6;
                let directionY = forceDirectionY * force * this.density * 0.6;

                this.x += directionX;
                this.y += directionY;
            } else {
                // Return to base position
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 50;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 50;
                }
            }
        }
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 9000;

    // Define neon colors
    const neonColors = ['#f200ff', '#9d00ff', '#00ff15', '#4afff9', '#cc00ff', '#e100ff'];

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 2;
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let color = neonColors[Math.floor(Math.random() * neonColors.length)];
        particlesArray.push(new Particle(x, y, size, color));
    }
}

function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) +
                ((particlesArray[a].y - particlesArray[b].y) ** 2);
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                let opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = `rgba(242, 255, 255, ${opacityValue})`; // Neon purple color
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}


// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', function () {
    setCanvasDimensions();
    init();
});

canvas.addEventListener('mousemove', function (event) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = event.clientX - rect.left;
    mouse.y = event.clientY - rect.top;
});

// Handle mouse out event
canvas.addEventListener('mouseout', function () {
    mouse.x = undefined;
    mouse.y = undefined;
});

// Error handling
window.addEventListener('error', function (e) {
    console.error('An error occurred in the animation:', e.error);
    // Attempt to restart the animation
    init();
    animate();
});

// Start the animation
init();
animate();