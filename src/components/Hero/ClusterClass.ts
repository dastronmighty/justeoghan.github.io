import { Cluster } from './types';
import { Boid } from './Boid';

export class ClusterClass implements Cluster {
    members: Boid[];
    color: number[];

    constructor() {
        this.members = [];
        this.color = [255, 255, 255, 200]; // Default to white
    }
}
