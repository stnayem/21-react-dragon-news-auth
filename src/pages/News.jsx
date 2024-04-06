import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import { useParams, useLoaderData, useLocation } from "react-router-dom";

const News = () => {
    const location = useLocation();
    console.log("Location in login: ", location);
    const allNews = useLoaderData();
    const { _id } = useParams();
    const theNews = allNews.find(tempNews => tempNews._id === _id);
    const { title, author, image_url } = theNews;
    console.log(theNews);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">{title}</h2>
                    <img src={image_url} alt="" />
                    <p>{author?.name}</p>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;