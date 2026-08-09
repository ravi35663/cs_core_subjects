// Bad Example (No Iterator):
/*
=>  Problem:
    - Client directly accesses internal video array
    - If tomorrow playlist storage changes -> client breaks
*/
class Video{
    constructor(public title: string){}
}

class Playlist{
    public videos:Video[] = [];
    add(video:Video){
        this.videos.push(video);
    }
}

const playlist = new Playlist();
playlist.add(new Video('System design'))
playlist.add(new Video("DSA"));

for(let item of playlist.videos){
    console.log("Title is: ",item.title);
}
/*
=>  Problems:
    - Client knows:
        - Internal storage is array
        - Looping logic
        - Access structure
    - If tomorrow:
        - video: Map<string,Video>
        - Client Code breaks
        - Encapsulation is violated
*/

