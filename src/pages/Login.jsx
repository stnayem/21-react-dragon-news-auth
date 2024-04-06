import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const location = useLocation();
    console.log("Location in login: ", location);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log("Successfully login: ", result.user);
                navigate(location?.state ? (location.state) : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar />
            <div className="mx-auto">
                <h2 className="text-3xl my-6 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have a account? <Link className="text-blue-600" to="/register">Register</Link></p>
            </div>

        </div>
    );
};

export default Login;