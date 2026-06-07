// Bad Design (Without Bridge)
// Problem : Tight Coupling + class Explosion

abstract class VideoPlayer{
    abstract play():void;
}

class NetflixHDPlayer extends VideoPlayer{
    play(): void {
        console.log("Play Netflix in HD")
    }
}

class NetflixUltaHDPlayer extends VideoPlayer{
    play(): void {
        console.log("Play Netflix in Ultra HD");
    }
}

class Netflix4KPlayer extends VideoPlayer{
    play(): void {
        console.log("Play Netflix in 4K");
    }
}

class YouTubeHDPlayer extends VideoPlayer{
    play(): void {
        console.log("Play Youtube HD video");
    }
}

class Youtube4KPlayer extends VideoPlayer{
    play(): void {
        console.log('Play youtube in 4k')
    }
}
/*
=> Problems with bad design:
    - Class Explosion: New platform x new quality = new class
    - Hard to scale: Add 8K -> changes everywhere
    - Code Duplication: Same play logic repeated
    - Tight Coupling: Platform tied to quality
    - No Runtime Flexibility: Cannot switch HD to 4K dynamically
    - Violate SRP:  Class handles platform + quality

=> Note:
    This design will failed in production system like netflix
*/