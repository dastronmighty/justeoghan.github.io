import React, { useRef, useEffect } from 'react';
import p5 from "p5";
import { Boid } from './Boid';
import { ClusterClass } from './ClusterClass';
import { Cluster } from './types';
import './Hero.css'

const HeroSection: React.FC = () => {
    const sketchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let myp5: p5;

        const sketch = (p: p5) => {
            let boids: Boid[] = [];
            const BOID_COUNT = 100;
            let clusters: Cluster[] = [];
            let distanceThreshold = 50;

            // Define pastel colors with RGBA
            const pastelColors: { [key: string]: number[] } = {
                white: [0, 0, 0, 200],
                pastelBlue: [89, 144, 245, 200],
                pastelGreen: [119, 221, 119, 200],
                pastelRed: [255, 105, 97, 200],
            };

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                p.background(230, 230, 230);

                // Initialize boids
                for (let i = 0; i < BOID_COUNT; i++) {
                    boids.push(new Boid(p.random(p.width), p.random(p.height), p));
                }
            };

            p.draw = () => {
                p.background(220, 220, 220, 150); // Semi-transparent background for trailing effect

                // Reset clusters
                clusters = [];

                // Assign boids to clusters
                assignClusters();

                // Assign colors to clusters based on their sizes
                assignClusterColors();

                // Update and display boids
                for (let boid of boids) {
                    boid.edges(p.width, p.height);
                    boid.flock(boids);
                    boid.update();
                    if (boid.cluster) {
                        boid.show(boid.cluster.color);
                    }
                }
            };

            function assignClusters() {
                for (let boid of boids) {
                    let added = false;
                    for (let cluster of clusters) {
                        for (let member of cluster.members) {
                            let d = p.dist(
                                boid.position.x,
                                boid.position.y,
                                member.position.x,
                                member.position.y
                            );
                            if (d < distanceThreshold) {
                                cluster.members.push(boid);
                                boid.cluster = cluster;
                                added = true;
                                break;
                            }
                        }
                        if (added) break;
                    }
                    if (!added) {
                        // Create a new cluster
                        let newCluster = new ClusterClass();
                        newCluster.members.push(boid);
                        clusters.push(newCluster);
                        boid.cluster = newCluster;
                    }
                }
            }

            function assignClusterColors() {
                for (let cluster of clusters) {
                    let size = cluster.members.length;
                    if (size >= 1 && size <= 5) {
                        cluster.color = pastelColors.white;
                    } else if (size > 5 && size <= 10) {
                        cluster.color = pastelColors.pastelBlue;
                    } else if (size > 10 && size <= 20) {
                        cluster.color = pastelColors.pastelGreen;
                    } else {
                        cluster.color = pastelColors.pastelRed;
                    }
                }
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight);
            };
        };

        myp5 = new p5(sketch, sketchRef.current!);

        return () => {
            myp5.remove(); // Clean up the p5 instance on component unmount
        };
    }, []);

    return (
        <header className="relative w-full h-screen ">
            <div ref={sketchRef} className="absolute top-0 left-0 w-full h-full"></div>
            <div className="absolute inset-0 clip-angled-transition-hero "></div>
            <div className="absolute inset-0 bg-gray-100 border-angled-transition-hero"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-black z-20">
                <h1 className="relative text-5xl md:text-6xl lg:text-7xl font-bold">
                    Eoghan Hogan
                    <span className="absolute left-0 bottom-[-10px] w-full h-1 bg-blue-400 transform rotate-2"></span>
                </h1>
                <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl">Imagine. Create. Commit.</h2>
            </div>
        </header>
    );
};

export default HeroSection;
