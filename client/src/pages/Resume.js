import resume from './pictures/res15.png'

const Resume = () => {
    return(
        <div className='res-box'>
            <a className='res-link' href="/resume/Liam_McCarthy.pdf" download>Download</a>
        <img alt='Liam McCarthy resume' className='resume' style={{borderStyle: "solid", height: "900px", width: "700px", marginTop: "0px", marginBottom: "70px"}}src={resume}/>
        </div>
    );
}

export default Resume;