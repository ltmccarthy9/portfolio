import resume from './pictures/res22.png'

const Resume = () => {
    return(
        <div style={{display: "flex"}}>
            <a className='res-link' href="/resume/Liam_McCarthy.pdf" download>Download</a>
        <img className='resume' style={{borderStyle: "solid", height: "900px", width: "700px"}}src={resume}/>
        </div>
    );
}

export default Resume;