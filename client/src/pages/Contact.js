import emailjs from "emailjs-com";

const Contact = () => {
    var form = document.getElementById("myForm");
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_tiqpggf', 
            'template_9jtmf4q', 
            e.target, 
            'I2zMX8u1udcOtjqfy').then(res=>{
                console.log(res);
                alert("Your message was sent successfully.")
            }).catch(err=>{
                console.log(err)
                alert(err);
            });

            form.reset();
    }
    return(
        <div className="container contact-section">
           <div className="contact-me">
        <h1 style={{textAlign: "center", fontWeight: "bolder"}}>Contact Me</h1>
        <h3 style={{textAlign: "center", fontWeight: "lighter", marginTop: "1em"}}>ltmccarthy9@gmail.com</h3>
        <div className='contactCard'>
        <form id="myForm" onSubmit={sendEmail}>
        
                <label style={{fontWeight: 'bolder'}} htmlFor="examplename" className="form-label">Name</label>
                <input style={{marginBottom: '20px'}}type="name" name="name" className="form-control contact-name" id="examplename" aria-describedby="nameHelp"></input>
            
            
                <label style={{fontWeight: 'bolder'}} htmlFor="exampleInputEmail" className="form-label">Email address</label>
                <input style={{marginBottom: '20px'}} type="email" name="user_email" className="form-control contact-name" id="exampleInputEmail" aria-describedby="emailHelp"></input>
            
            
                <label style={{fontWeight: 'bolder'}} htmlFor="message" className="form-label ">Message</label>
                <textarea type="message" name="message" className="form-control contact-name" id="message" rows='4'/>
            
            <button style={{margin: "10px"}} type="submit" className="btn btn-light sub">Submit</button>
        </form>
        </div>
        
      </div>
        </div>
    );
}

export default Contact;