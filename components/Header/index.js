import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import DataContext from "../../context/DataContext";
import { Container } from "..";
import userAvatar from "../../public/images/avatar/avatar.png";

import usersInfo from "../../data/usersInfo.json";
import languages from "../../data/languages.json";

export default function Header({ children }) {
    const [resumeActive, setResumeActive] = useState(false);
    const [reposcount, setReposCount] = useState(0);
    const [avatar, setAvatar] = useState("");
    const { openContactForm } = useContext(DataContext);

    const userName = usersInfo.github_username;

    // fetch github repos count
    async function getReposCount() {
        let res;
        if (localStorage.getItem("repo_counts") === null) {
            res = await fetch(`https://api.github.com/users/${userName}`);
            let data = await res.json();

            if (data && data.public_repos !== undefined) {
                const { public_repos, avatar_url } = data;
                localStorage.setItem(
                    "repo_counts",
                    JSON.stringify(public_repos)
                );
                // store github user avatar
                localStorage.setItem(
                    "github_avatar",
                    JSON.stringify(avatar_url)
                );
                setReposCount(public_repos);
            }
        }

        // get data from cahched localstorage
        let data = JSON.parse(localStorage.getItem("repo_counts"));
        let useravatar = JSON.parse(localStorage.getItem("github_avatar"));

        setReposCount(data);
        setAvatar(useravatar);

        return data;
    }

    useEffect(() => {
        (async () => {
            await getReposCount();
        })();
    }, []);

    return (
        <header
            className={`header w-full h-[100vh] relative bg-dark-200 md:h-auto`}
        >
            <Container>
                {children}

                {/* shows on desktop */}
                <div
                    className={`w-full h-[70vmin] flex align-center items-center justify-center flex-row p-[20px] flex-wrap mt-[50px]`}
                >
                    <div
                        className={`w-full h-full mb-[50px] relative md:w-[50%]`}
                    >
                        <div className={``}>
                            <span
                                data-aos="fade-up"
                                className={`py-[2px] px-[8px] bg-green-600 text-green-100 rounded-[3px] text-[12px] text-capitalize  `}
                            >
                                {usersInfo.user_skill}
                            </span>
                            <br />
                            <br />
                            <h1
                                data-aos="fade-right"
                                className={` text-[9vmin] md:text-[5vmin]`}
                            >
                                {usersInfo.tag_line}
                            </h1>
                            <br />
                            <span
                                data-aos="fade-in"
                                className={` text-[20px] md:text-[2vmin] `}
                            >
                                {usersInfo.subTitle}
                            </span>
                            <br />
                        </div>
                        <div
                            className={`relative top-[50px] flex align-start items-start justify-start w-full`}
                        >
                            <div
                                data-aos="zoom-in-left"
                                className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}
                            >
                                <h1
                                    className={` text-[35px] pt-[10px] pr-[10px] pb-0 pl-0 `}
                                >
                                    {new Date().getFullYear() -
                                        parseInt(usersInfo.tech_year) +
                                        1}
                                </h1>
                                <span
                                    className={` w-[50px] text-white-300 text-[10px] `}
                                >
                                    Years of Experience
                                </span>
                            </div>
                            <div
                                data-aos="zoom-in-right"
                                className={`w-[50%] mr-[20px] flex flex-row items-center justify-start`}
                            >
                                <h1
                                    className={` text-[35px] pt-[10px] pr-[10px] pb-0 pl-0 `}
                                >
                                    {reposcount}
                                </h1>
                                <span
                                    className={` w-[50px] text-white-300 text-[10px] `}
                                >
                                    Projects / Contributions
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-auto mt-[60px]">
                            <br />
                            <button
                                className="w-[20vw] border-[2px] border-solid border-green-200 px-5 py-3 bg-dark-100 rounded-[30px] scale-[.90] hover:scale-[.95] transition-all "
                                onClick={openContactForm}
                            >
                                Work With Me
                            </button>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        className={`main w-full h-auto hidden md:block md:w-[50%] relative `}
                    >
                        <div
                            className={`img-cont w-[250px] h-[250px] p-[15vmin] flex flex-col items-center justify-center bg-cover bg-center  rounded-[50%] `}
                        >
                            <style jsx>{`
                                .img-cont {
                                    background-image: url("${avatar}");
                                }
                            `}</style>
                            <img
                                data-aos="zoom-in-up"
                                src={avatar === "" ? userAvatar.src : avatar}
                                className={`avatar rounded-[50%] `}
                            />
                        </div>
                        <div data-aos="fade-up" className={`circleA`}>
                            <img
                                src={
                                    languages.languages.length === 0 &&
                                    languages.languages.length > 2
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        : languages.languages[0]
                                }
                                className={`langImgA`}
                            />
                        </div>
                        <div data-aos="fade-right" className={`circleB`}>
                            <img
                                src={
                                    languages.languages.length === 0 &&
                                    languages.languages.length > 2
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        : languages.languages[1]
                                }
                                className={`langImgB`}
                            />
                        </div>
                        <div data-aos="fade-left" className={`circleC`}>
                            <img
                                src={
                                    languages.languages.length === 0 &&
                                    languages.languages.length > 2
                                        ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                                        : languages.languages[2]
                                }
                                className={`langImgC`}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}
