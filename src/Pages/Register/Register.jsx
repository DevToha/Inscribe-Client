import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {


    const [showPassword, setShowPassword] = useState(false)

    return (
        <div>
            <div className="bg-[#f7f7f7] mt-10 shadow8 lg:py-5 md:py-5 py-1 px-1 lg:pl-[115px] md:pl-[153px] md:ml-[70px] lg:ml-[450px] rounded-3xl lg:w-[600px] md:w-[600px] w-[300px] ml-8">
            <div className=" md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 font-semibold w-[230px] lg:ml-[77px] ml-[40px] md:ml-[50px]">Please Register</h3>
                <form
                    // onSubmit={handleRegister}
                >
                    <input className="mb-4 lg:w-[352px]  w-[290px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="Name" name="name" id="" required />

                    <br />

                    <input className="mb-4 lg:w-[352px]  w-[290px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="Email Address" name="email" id="" required />

                    <br />

                    <input className="mb-4 lg:w-[352px]  w-[290px] py-2 px-4 border-2 border-gray-300 rounded-md" type="photoURL" placeholder="Photo URL" name="photoURL" id="" required />

                    <br />

                    <div className="relative">
                        <input className=" lg:w-[352px]  w-[290px] py-2 px-4 border-2 border-gray-300 rounded-md" type={showPassword ? "text" : "password"} placeholder="Password" name="password" id="" required />

                        <span className="absolute top-3 lg:left-[308px] md:left-[258px] left-[245px]" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <div className="lg:w-[352px]  w-[290px]">
                        {/* {
                            catchError && <p className="text-base font-medium text-red-500">{catchError}</p>
                        }

                        {
                            success && <p className="text-base font-medium text-green-600">{success}</p>
                        } */}
                    </div>
                    <br />
                    <input className="cursor-pointer mb-4 lg:w-[352px]  w-[290px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-500 text-white text-lg font-medium" type="submit" value="Register" />
                </form>
                <p className="text-black lg:ml-8 w-[290px]">ALREADY HAVE AN ACCOUNT ? <Link to="/logIn"><a className="text-blue-800 font-bold hover:underline" href="">LOG IN</a></Link></p>
            </div>
        </div>
        </div>
    );
};

export default Register;