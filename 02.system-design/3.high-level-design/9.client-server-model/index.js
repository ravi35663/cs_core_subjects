/*
==> Client Server Model:
    ->  This is the most common way for two machines to talk to each other
    ->  e.g:
        ->  [client] <--->  [Server]
            demand          does the job
        ->  Give me my profile info
        ->  delete the post
        ->  Spin up one server
    ->  The communication happens over the common network connecting the two.
    ->  Two protocols to exchange the data TCP(we almost 99.99% time use this) and UDP.

==> Some important properties of TCP (Transmission Control Protocol):
    ->  TCP connection requires 3-way handshake for setup: 
            -----> client send request
            <----- server response
            -----> client acknowledge
    ->  TCP connection requires 2-way handshake for teardown
            ----->  
            <-----
    ->  TCP connection does not break immediately after data is exchanges
        ->  break because of network interception
        ->  breaks because server/client initiated it
    ->  Hence: connection remains open-almost 'forever'

==> Protocol over TCP:
    ->  TCP does not dictate what data can be sent over it, a common format agreed upon by client & 
        server is called a protocol: HTTP
*/

/*
==> HTTP is just a format that client and server understands.
    ->  You can define your own format and make
        1)  Your client send data in it
        2)  your server parses & processes it
            [Client] <----> [Server]
                    "GET_K\n"
==> Properties of HTTP: 1.1:
    ->  There are many versions of it- HTTP 1.1/ HTTP 2/ HTTP 3
    ->  HTTP 1.1 is the most commonly used one
        1)  For client and server to talk over HTTP: 1.1, they need to establish TCP connection
        2)  Connection is typically terminated once response is sent to client
        3)  Almost new connection for every request/response;
            ->  Little expensive
        4)  Hence people pass " Connection: keep-alive" header (if this pass to header it server will alive)
            which tells client and server to not close the connection
            ->  Depends if server-follows it or not.
*/

/*
==> Web Socket:
    ->  Websockets are meant to do bi-directional communication
    ->  Websocket is a heart and soul of any real time application😅:
    ->  Key-features:
        ->  Server can proactively send data to client, without client asking for it.
        ->  Because there us no need for setting up TCP, every single time, we get really low latency 
            in communication.
    ->  WebSocket VS HTTP see in the picture a.png
    ->  Websocket is costly way of communication.
    ->  Any where you need "realtime", "low latency" communication for your end user over the internet think about websockets
    ->  e.g:
            chat, realtime like live streaming, stock market ticks
*/

/*
==> Exercises:
    ->  Build a chat application using socketIO
*/