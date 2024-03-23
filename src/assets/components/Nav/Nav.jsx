
const Nav = () => {
    return (
        <div>
            
            {/* navbar start */}
            <div className="my-10 navbar bg-base-100">
                <div className="navbar-start">
                    <a className="text-[32px] font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-normal text-base">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <label className="rounded-3xl input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>

                    <div className="btn btn-circle bg-green-400 flex">
                        <i className="fa-regular fa-circle-user text-2xl"></i>
                    </div>

                </div>
            </div>
            {/* navbar end */}
        </div>
    );
};

export default Nav;