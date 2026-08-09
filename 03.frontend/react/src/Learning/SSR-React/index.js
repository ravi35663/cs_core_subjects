/*
    Server-Side-Rendering(SSR) in react:
        Server-side rendering (SSR) in React is the process of rendering React 
        components on the server, and then sending the fully rendered HTML to the 
        client. 
        This improves performance and SEO because the initial page load is faster and
        search engines can crawl the content more easily.

        Key Points:
        1) Improved Performance: Faster initial load times since the HTML is 
           pre-rendered on the server.
        2) Better SEO: Search engines can index the fully rendered HTML content.
        3) Hydration: After the HTML is loaded, React attaches event listeners and 
           makes the page interactive on the client side.
*/
//Using Next.js, a popular React framework for SSR:

const Home = ({data})=>{
    return <div>{data}</div>
}

// This function gets called at build time

export async function getServerSideProps(){
    const res = await fetch('https://example.com');
    data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}
/*
    In this example, getServerSideProps fetches data on the server and passes it to 
    the HomePage component, which is then rendered on the server and sent to the 
    client.

*/
export default Home;