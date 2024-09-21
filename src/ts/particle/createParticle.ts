import { CreateParticle } from '../types';

export const createParticle: CreateParticle = (x, y, size, color) => ({
    x,
    y,
    size,
    color,
    baseX: x,
    baseY: y,
    density: (Math.random() * 30) + 10,
    speed: {
        x: Math.random() * 0.4 - 0.1,
        y: Math.random() * 0.4 - 0.1,
    },
});
