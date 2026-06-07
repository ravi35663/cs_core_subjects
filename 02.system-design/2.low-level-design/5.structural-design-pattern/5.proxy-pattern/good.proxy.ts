// Step 1: Common Interface (Subject): Both real & proxy follow this.
interface VideoService{
    download(videoId:string): string;
}

// Step 2: Real Object (Heavy Class): This does real work.
class RealVideoDownloader implements VideoService{
    download(videoId: string): string {
        console.log("Downloading from the server .....");
        return `Video data for ${videoId}`;
    }
}

// Step 3: Proxy (Middleman)
class VideoDownloaderProxy implements VideoService{
    private readDownloader = new RealVideoDownloader();
    private cache = new Map<string,string>();

    download(videoId: string): string {
        // Checked in cache
        if(this.cache.has(videoId)){
            console.log("Returning from cache ....");
            return this.cache.get(videoId) as string;
        }
        // Security check
        if(!this.hasAccess(videoId)){
            throw new Error("Access denied");
        }
        const data = this.readDownloader.download(videoId);
        this.cache.set(videoId,data);
        return data;
    }

    private hasAccess(videoId:string):boolean{
        return true// You can write the logic here
    }
}
// Step 4: Usage (Clean Way):
const downloader: VideoService = new VideoDownloaderProxy();
downloader.download('abc') // Get from the server and cached should be slow
downloader.download('abc') // fast and get from the cache
downloader.download('abc') // fast and get from the cache