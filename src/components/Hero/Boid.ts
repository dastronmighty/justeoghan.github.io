import { Vector, p5InstanceExtensions } from "p5";
import { Cluster } from './types';

export class Boid {
    p5: p5InstanceExtensions;
    position: Vector;
    velocity: Vector;
    acceleration: Vector;
    maxForce: number;
    maxSpeed: number;
    size: number;
    cluster: Cluster | null;

    constructor(x: number, y: number, p5: p5InstanceExtensions) {
        this.p5 = p5;
        this.position = Vector.fromAngle(Math.random() * Math.PI * 2).mult(100).add(x, y);
        this.velocity = Vector.random2D();
        this.velocity.setMag(Math.random() * 2 + 2);
        this.acceleration = this.p5.createVector(0, 0);
        this.maxForce = 0.2;
        this.maxSpeed = 4;
        this.size = 6;
        this.cluster = null;
    }

    edges(width: number, height: number) {
        if (this.position.x > width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = width;

        if (this.position.y > height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = height;
    }

    align(boids: Boid[]): Vector {
        let perceptionRadius = 50;
        let steering = this.p5.createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            let d = Vector.dist(this.position, other.position);
            if (other !== this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohesion(boids: Boid[]): Vector {
        let perceptionRadius = 50;
        let steering = this.p5.createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            let d = Vector.dist(this.position, other.position);
            if (other !== this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    separation(boids: Boid[]): Vector {
        let perceptionRadius = 24;
        let steering = this.p5.createVector(0, 0);
        let total = 0;
        for (let other of boids) {
            let d = Vector.dist(this.position, other.position);
            if (other !== this && d < perceptionRadius) {
                let diff = Vector.sub(this.position, other.position);
                diff.div(d * d); // Weight by distance
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids: Boid[]) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(1.0);
        cohesion.mult(1.0);
        separation.mult(1.5);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show(clusterColor: number[]) {
        let theta = this.velocity.heading() + this.p5.PI / 2;

        this.p5.fill(clusterColor[0], clusterColor[1], clusterColor[2], clusterColor[3]);
        this.p5.noStroke();

        this.p5.push();
        this.p5.translate(this.position.x, this.position.y);
        this.p5.rotate(theta);
        this.p5.beginShape();
        this.p5.vertex(0, -this.size * 2);
        this.p5.vertex(-this.size, this.size * 2);
        this.p5.vertex(this.size, this.size * 2);
        this.p5.endShape(this.p5.CLOSE);
        this.p5.pop();
    }
}
