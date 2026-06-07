// Problem: Always Download Again
class VideoDownloader{
    download(videoId:string):string{
        console.log("Downloading from server ......");
        return `Video data for ${videoId}`;
    }
}
const downloader = new VideoDownloader();
downloader.download("abc") // slow
downloader.download("abc") // slow again
downloader.download("abc") // slow again
/*
=> Problems in BAD Example:
    -   No Caching:
        Every call --> network call (which is slow and costly)
    
    -   No Control:
        -   Anyone can download any video
        -   No Security

    -   No Optimization:
        -   No lazy loading
        -   No reuse
        -   No monitoring

    -   Tight Coupling:
        -   Client depends directly on heavy class
*/