import { Boid } from './Boid';

export interface Cluster {
    members: Boid[];
    color: number[];
}
