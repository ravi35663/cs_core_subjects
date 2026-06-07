//Good Example (Using Iterator Pattern):
// Now we hide traversal logic.
// Step 1: Create Iterator Interface
interface Iterator<T>{
    hasNext():boolean;
    next():T | null
}

class Video{
    constructor(public title: string){}
}

// Step 2: Create Playlist Iterator:
class PlaylistIterator implements Iterator<Video>{
    private index = 0;
    constructor(private videos:Video[]){}

    hasNext(): boolean {
        return this.index < this.videos.length;
    }   

    next():Video | null{
        if(!this.hasNext()) return null;
        return this.videos[this.index++];
    }
}

// Step 3: Update playlist: 
// Now playlist no longer exposes videos, it exposes iterator only
class Playlist{
    private videos:Video[] = [];
    add(video:Video){
        this.videos.push(video);
    }
    getIterator():Iterator<Video>{
        return new PlaylistIterator(this.videos);
    }
}

// Step 4: Client Code:
const playlist = new Playlist();
playlist.add(new Video("System design"));
playlist.add(new Video("DSA"));

const iterator = playlist.getIterator();
while(iterator.hasNext()){
    console.log(iterator.next()?.title);
}

/*
=> Why this is good design:
    - Client does not know storage structure
    - Playlist encapsulate
    - We can change storage without breaking client
    - Can Create multiple iterators:    
        - Reverse Iterator
        - Shuffle Iterator
        - Filtered Iterator
*/
/*
=>  Real World Use Case (YouTube):
    - Youtube Allows:
        - Play next
        - Play previous
        - Shuffle playlist
    -   All are different traversal strategies
*/