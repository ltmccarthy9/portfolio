
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

    const goElder = () => {
        window.open("https://github.com/lilyannekot/elder-warfare-kart-simulator");
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
                <ul>
                    <li>MVC design</li>
                    <li>Javascript/Handlebars/Express</li>
                    <li>MySQL/Sequelize</li>
                    <li>JQuery/JQueryUI</li>
                    <li>Bulma/Nodejs/Bcrypt</li>
                </ul>
            </p>
        </div>
        <div onClick={goEcomm} className="container proj">
            <h2>Ecommerce Backend</h2>
            <p>
                Backend, command line application of a mock Ecommerce database. Create, update,
                and delete items in the database.
                <ul>
                    <li>Javascript/Express</li>
                    <li>MySQL/Sequelize</li>
                </ul>
            </p>
        </div>
        <div onClick={goFriends} className="container proj">
            <h2>Friends First (development)</h2>
            <p>My personal take on a dating application.  Started the project
                solo but recently added a few team members for collaboration.
                <ul>
                    <li>Javascript/Express</li>
                    <li>MongoDB/Mongoose</li>
                    <li>React/React-Router/redux</li>
                    <li>Google Oauth/Bootstrap</li>
                </ul>
            </p>
        </div>
        <div onClick={goElder} className="container proj">
            <h2>Elder Warfare (group)</h2>
            <p>This was a group project filled with adversity.  We started out with four members,
                with the goal to create a fun turn based video game.  One of our members stopped responding
                halfway through the project, then quit altogether with no given reason.  This set us back quite a bit.  
                We then had to re-evaluate our goals
                and do the best we could to create a finished product.  Although the end result was not what we 
                originally set out to do, the experience taught me a lot about leadership, agile development, and the technologies we utilized.
                I was responsible for the battle page logic as well as a lot of refactoring for the entire application.
                <ul>
                    <li>Javascript/Express/GraphQL</li>
                    <li>MongoDB/Mongoose</li>
                    <li>React/React-Router/JWT/Bootstrap</li>
                </ul>
            </p>
        </div>
        <div onClick={goBoku} className="container proj">
            <h2>Bokuchan's (development)</h2>
            <p>Front-end freelance project that I'm currently working on for a 
                restaurant/sauce business.
                <ul>
                    <li>Javascript/React/React-Router</li>
                    <li>CSS-Bootstrap</li>
                </ul>
            </p>
        </div>
        </div>
        
        
    );
}

export default Projects;