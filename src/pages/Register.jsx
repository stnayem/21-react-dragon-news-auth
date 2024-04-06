import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photo, password);

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <Navbar />
            <div className="mx-auto">
                <h2 className="text-3xl my-6 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="mb-8 text-center">Have already an account? <Link className="text-blue-600" to="/login">Login</Link></p>
            </div>

        </div>
    );
};

export default Register;