import { useNavigate } from "react-router-dom";
const Nav = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/portfolio");
    }

    const goProjects = () => {
        navigate("/projects");
    }

    const goResume = () => {
        navigate("/resume");
    }

    const goContact = () => {
        navigate("/contact");
    }

    const goGit = () => {
        window.open("https://github.com/ltmccarthy9");
    }

    const goLinked = () => {
        window.open("https://www.linkedin.com/in/liam-mccarthy-b06b9a218/")
    }

    return (
        <div className="banner">
            <div onClick={goHome} className="name">
                <h1>Liam McCarthy</h1>
            </div>
            <div onClick={goProjects} className="nav-card">
                <h5>Projects</h5>
            </div>
            <div onClick={goResume} className="nav-card">
                <h5>Resume</h5>
            </div>
            <div onClick={goContact} className="nav-card">
                <h5>Contact</h5>
            </div>
            <div onClick={goGit} id="github" className="nav-card">
                <h5>GitHub</h5>
            </div>
            <div onClick={goLinked} id="linkedin" className="nav-card">
                <h5>LinkedIn</h5>
            </div>
        </div>
    );
}

export default Nav;