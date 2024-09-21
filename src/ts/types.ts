export interface Mouse {
    x: number | undefined;
    y: number | undefined;
    radius: number;
}

export interface Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    baseX: number;
    baseY: number;
    density: number;
    speed: {
        x: number;
        y: number;
    };
}

export type CreateParticle = (x: number, y: number, size: number, color: string) => Particle;

export type UpdateParticle = (particle: Particle, mouse: Mouse, canvasWidth: number, canvasHeight: number) => Particle;

export type DrawParticle = (ctx: CanvasRenderingContext2D, particle: Particle) => void;