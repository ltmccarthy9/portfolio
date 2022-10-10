
const Projects = () => {

    const goManager = () => {
        window.open("https://github.com/laurasierra17/appointment-manager");
    }

    const goEcomm = () => {
        window.open("https://github.com/ltmccarthy9/e-commerce-backend");
    }

    const goFriends = () => {
        window.open("https://github.com/ltmccarthy9/friends-first");
    }

    const goBoku = () => {
        window.open("https://github.com/ltmccarthy9/bokuchans");
    }

    return(
        <div>
        <div onClick={goManager} className="container proj">
            <h2>Appointment Manager (group)</h2>
            <p>Full stack application of a mock hospital. The user can sign up
                and login to create, view, and delete appointments at their
                department of need and their doctor of choice at a specific time.
                I was responsible for the login/sign up as well as the appointment creation
                after selection of a department.
            </p>
        </div>
        <div onClick={goEcomm} className="container proj">
            <h2>Ecommerce Backend</h2>
            <p>
                Backend, command line application of a mock Ecommerce database. Create, update,
                and delete items in the database.
            </p>
        </div>
        <div onClick={goFriends} className="container proj">
            <h2>Friends First (development)</h2>
            <p>My personal take on a dating application.  Started the project
                solo but recently added a few team members for collaboration.
            </p>
        </div>
        <div onClick={goBoku} className="container proj">
            <h2>Bokuchan's (development)</h2>
            <p>Freelance project that I'm currently working on for a 
                restaurant/sauce business.
            </p>
        </div>
        </div>
        
        
    );
}

export default Projects;