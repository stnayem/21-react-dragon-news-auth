import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, title, author, image_url, details } = news;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <p>{author?.name}</p>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 50
                            ? <p>{details.slice(0, 50)}... <Link to={`/news/${_id}`} className="font-semibold text-orange-600">Read More</Link></p>
                            : <p>{details}</p>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;