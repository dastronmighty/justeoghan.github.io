import { UpdateParticle } from '../types';

export const updateParticle: UpdateParticle = (particle, mouse, canvasWidth, canvasHeight) => {
    // Move the particle by its speed
    particle.x += particle.speed.x;
    particle.y += particle.speed.y;

    // Reverse direction if the particle goes off the canvas (bounce effect)
    if (particle.x > canvasWidth || particle.x < 0) {
        particle.speed.x *= -1;
    }
    if (particle.y > canvasHeight || particle.y < 0) {
        particle.speed.y *= -1;
    }
    return particle;
};
