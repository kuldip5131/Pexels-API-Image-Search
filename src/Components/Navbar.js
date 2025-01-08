const Navbar = ({ setSearch }) => {

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary-subtle">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 text-center">
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("animal")}>Animal</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("technology")}>Technology</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("travel")}>Travel</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("car")}>Car</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("vegetables")}>Vegetables</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("shopping mall")}>Shopping Mall</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link active" href="#" onClick={() => setSearch("tree")}>Tree</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-4">
                <div class="d-flex justify-content-center">
                    <input type="text" class="form-control w-50" id="inputAddress"

                        placeholder="Search"

                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
}
export default Navbar;