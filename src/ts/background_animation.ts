import { Mouse, Particle, CreateParticle, UpdateParticle, DrawParticle } from './types';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#backgroundanimation') as HTMLCanvasElement;

    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    if (!ctx) {
        console.error('2D context not available on canvas');
        return;
    }

    let particlesArray: Particle[] = [];
    const mouse: Mouse = {
        x: undefined,
        y: undefined,
        radius: 100, // Larger radius to create a bigger effect area
    };

    function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    setCanvasDimensions();

    canvas.addEventListener('mousemove', (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    canvas.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    const createParticle: CreateParticle = (x, y, size, color) => ({
        x,
        y,
        size,
        color,
        baseX: x,
        baseY: y,
        density: (Math.random() * 30) + 1,
        speed: {
            x: Math.random() * 0.2 - 0.1,
            y: Math.random() * 0.2 - 0.1,
        },
    });

    const updateParticle: UpdateParticle = (particle, mouse, canvasWidth, canvasHeight) => {
        // Undulating movement for base animation
        particle.x += Math.sin(particle.density) * 0.5; // Undulating wave motion
        particle.y += Math.cos(particle.density) * 0.5;

        // Reverse direction if particle goes off the canvas
        if (particle.x > canvasWidth || particle.x < 0) {
            particle.speed.x *= -1;
        }
        if (particle.y > canvasHeight || particle.y < 0) {
            particle.speed.y *= -1;
        }

        // If mouse is interacting, apply force, otherwise return to base smoothly
        if (mouse.x !== undefined && mouse.y !== undefined) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = forceDirectionX * force * particle.density * 0.6;
                const directionY = forceDirectionY * force * particle.density * 0.6;

                particle.x += directionX;
                particle.y += directionY;
            }
        }

        // Always gradually return to base position if not affected by the mouse
        if (particle.x !== particle.baseX) {
            const dx = particle.x - particle.baseX;
            particle.x -= dx / 20; // Smoothly move towards baseX
        }
        if (particle.y !== particle.baseY) {
            const dy = particle.y - particle.baseY;
            particle.y -= dy / 20; // Smoothly move towards baseY
        }

        return particle;
    };


    const drawParticle: DrawParticle = (ctx, particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    };

    function init() {
        particlesArray = [];
        const numberOfParticles = 50;

        const neonColors = ['#f200ff', '#9d00ff', '#00ff15', '#4afff9', '#cc00ff', '#e100ff'];

        for (let i = 0; i < numberOfParticles; i++) {
            const size = (Math.random() * 5) + 2;
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const color = neonColors[Math.floor(Math.random() * neonColors.length)];
            particlesArray.push(createParticle(x, y, size, color));
        }
    }

    function connect(mouseParticle: Particle | null) {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) +
                    ((particlesArray[a].y - particlesArray[b].y) ** 2);
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    ctx.strokeStyle = `rgba(242, 255, 255, 1)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }

        // If mouse is active, connect nearby particles to it
        if (mouseParticle && mouse.x !== undefined && mouse.y !== undefined) {
            for (let i = 0; i < particlesArray.length; i++) {
                const distance = ((particlesArray[i].x - mouse.x) ** 2) + ((particlesArray[i].y - mouse.y) ** 2);
                if (distance < mouse.radius ** 2) {
                    ctx.strokeStyle = `rgba(255, 255, 255, 0.7)`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(mouseParticle.x, mouseParticle.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a large "attractor" particle at mouse location
        let mouseParticle: Particle | null = null;
        if (mouse.x !== undefined && mouse.y !== undefined) {
            mouseParticle = {
                x: mouse.x,
                y: mouse.y,
                size: 10, // Large attractor particle
                color: '#ffffff',
                baseX: mouse.x,
                baseY: mouse.y,
                density: 1,
                speed: { x: 0, y: 0 }
            };
            drawParticle(ctx, mouseParticle);
        }

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i] = updateParticle(particlesArray[i], mouse, canvas.width, canvas.height);
            drawParticle(ctx, particlesArray[i]);
        }

        // Connect particles and mouse attractor
        connect(mouseParticle);
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        setCanvasDimensions();
        init();
    });

    init();
    animate();
});
