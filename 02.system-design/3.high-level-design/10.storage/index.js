/*
==> Blob storages and S3:
    ->  Blob : Binary Large object that is any binary file (any file)
    ->  S3 is blog storage (Binary file is any file like .txt, img .et centra)
    ->  Earlier when people uploaded any files, they uploaded it to "server" and were stored on the 
        hard disk attacked to it.
    ->  Getting a file was simple, make an API call, the handler reads the files & return.
    ->  This is precisely how /static folders/routed worked
    ->  When user uploads the file "a.tx" 
        ->  accept it on HTTP Post
        ->  Create a absolute path using folder mapped to '/static/'
            /home/ravi/www/static/a.txt
        ->  Stored the file ^ location
    ->  When user requests '/static/a.txt'
        ->  Get the path from the url
        ->  create absolute path
            /home/ravi/www/static/a.txt
        ->  Read the file and return
    ->  Early days of the internet, this worked well for quite some time, but won't work with multiple 
        servers, because each server will have its own disk and scaling are become challenge
    ->  Hence, we need an infinitely scalable network attached storage/ file system and this is what is 
        S3/Blob Storage. See in the picture a.png
    ->  Any 'file' that needs to be accessible ny any server, is stored at places accessible by all.

==> On s3 you have:
    ->  buckets: (namespace) eg: insta-images, my-bucket (any unique name across the world)
    ->  key: path of the file within bucket
        s3://[insta-images]/[user123/7621.png]
               Bucket         key
    ->  You can seamlessly, create the file, replace the file, delete the file, read entire file or 
        segment of it
*/              

/*
==> Advantages of S3:
    ->  Cheap, durable storage
    ->  Can Store literally any file (images, video,audio,text,DB backup, DB CSV, anything)
    ->  Scalable and available
    ->  Integration with a lot of AWS and BigData services   
*/

/*
==> Disadvantages:
    ->  Reads on s3 are slow, so if you want quick reads, you should not use s3, SSD and HDD attached 
        to instances are better
    ->  Not a fully fledge file system
*/

/*
==> You should use s3 when you want to store 'blob' that is centrally accessible 
    ->  Database backup
    ->  Log archival
    ->  Static website hosting
    ->  BigData storage
    ->  infrequently accessed data dumping ground
*/

/*
==> Exercise:
    1)  Go through s3 documentation and explore the API
    2)  *** Read about ACL(Access control limit) on S3 , like you provide access to see your files by others
    3)  If possible, play around with its APIs
*/