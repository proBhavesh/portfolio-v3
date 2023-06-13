import {
    Layout,
    Intro,
    Container,
    Projects,
    Contact,
    Footer,
    Quote,
    DomHead,
} from "../components";
import { useEffect, useContext } from "react";
import DataContext from "../context/DataContext";
import Aos from "aos";
import { DataContextProvider } from "../context/DataContext.js";
// const { openContactForm } = useContext(DataContext);

export default function HomePage() {
    useEffect(() => {
        Aos.init({ duration: "1000" });
        // openContactForm();
    }, []);

    return (
        <DataContextProvider>
            <DomHead />
            <Layout>
                <Container>
                    <Intro />
                    <Quote />
                    <Projects />
                </Container>
                <Contact />
                <Footer />
            </Layout>
        </DataContextProvider>
    );
}
