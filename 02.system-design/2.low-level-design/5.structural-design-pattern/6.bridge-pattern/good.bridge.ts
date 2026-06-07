/*
=>  Good Design: Bridge Pattern:
    We separate:
        - Abstraction -> Video Platform
        - Implementation -> Video Quality
*/
// Step 1: Implementation Layer (Quality)
interface VideoQuality{
    render(): void;
}

class HDQuality implements VideoQuality{
    render(): void {
        console.log("Streaming in HD");
    }
}

class UltraHDQuality implements VideoQuality{
    render(): void {
        console.log("Streaming in Ultra HD");
    }
}

class FourKQuality implements VideoQuality{
    render(): void {
        console.log("Streaming in 4K Quality")
    }
}

// Step 2: Abstraction Layer (Platform)
abstract class VideoPlayer{
    protected quality:VideoQuality;

    constructor(quality:VideoQuality){
        this.quality = quality;
    }

    abstract play():void;
}
// Step 3: Concrete Abstractions:
class NetflixPlayer extends VideoPlayer{
    play(): void {
        console.log("Netflix");
        this.quality.render();
    }
}

class YoutubePlayer extends VideoPlayer{
    play(): void {
        console.log("Youtube: ");
        this.quality.render();
    }
}

class PrimePlayer extends VideoPlayer{
    play(): void {
        console.log("Playing video on prime")
        this.quality.render();
    }
}

// Step 4: Usage (Runtime flexibility):
const hd = new HDQuality();
const fourK = new FourKQuality();

const netflixHD = new NetflixPlayer(hd)
netflixHD.play();

const netflix4K = new NetflixPlayer(fourK);
netflix4K.play();

const youtube4k = new YoutubePlayer(fourK)
youtube4k.play();

/*
=>  With the help of this bridge pattern you can play 4k, hd and any other quality without 
    creating new class. Also you can introduce more qualities and more media players with 
    repeating the quality class again and again.
*/

/*
=> Why above bridge pattern is good design:
    - No class explosion:   Platform & quality grow independently
    - Open for extension:   Add 8K without touching the platform
    - Runtime Flexibility:  Change Quality dynamically
    - Follow SRP:   Here platform != Quality
    - Follow OCP:   No modification is needed
    - Clean Separation: UI vs Engine style architecture
*/