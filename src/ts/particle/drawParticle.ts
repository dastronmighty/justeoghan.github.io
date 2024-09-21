import { DrawParticle } from '../types';

export const drawParticle: DrawParticle = (ctx, particle) => {
    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.shadowBlur = 20;
    ctx.shadowColor = particle.color;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
};
