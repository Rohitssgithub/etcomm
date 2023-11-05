import { NavLink } from "react-router-dom";
import FormatPrice from "../components/FormatPrice";

const ListView = ({ products }) => {
    return (
        <>
            <div className="container">
                {products.map((curElem) => {
                    const { id, name, image, price, description } = curElem;
                    return (
                        <div className="row list-view-section">
                            <div className="col-4 ">
                                <figure>
                                    <img src={image} alt={name} />
                                </figure>
                            </div>
                            <div className="col-4">
                                <h3>{name}</h3>
                                <p>
                                    <FormatPrice price={price} />
                                </p>
                                <p>{description.slice(0, 90)}...</p>

                                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                                    <button className="btn">Read More</button>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default ListView
