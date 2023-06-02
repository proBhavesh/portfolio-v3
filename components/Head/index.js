import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>{userInfo.github_username} Portfolio - {pageName} </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="Bhavesh- Personal Portfolio." />
            <meta name="description" content="Driven by a mission to create impactful solutions with a focus on user experience, teamwork, and knowledge sharing." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/benrobo/portfolio-v3/" />
            <meta property="og:title" content="Bhavesh - Personal Portfolio" />
            <meta property="og:description" content="Transforming complex problems into elegant solutions with the power of code." />
            <meta property="og:image" content="https://github.com/proBhavesh/portfolio-v3/blob/master/public/images/portfolioImage.png?raw=true" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://bhavesh.engineer/" />
            <meta property="twitter:title" content="Bhavesh - Personal Portfolio" />
            <meta property="twitter:description" content="Transforming complex problems into elegant solutions with the power of code." />
            <meta property="twitter:image" content="https://github.com/Benrobo/baaymax-assets/blob/main/app.png?raw=true" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

