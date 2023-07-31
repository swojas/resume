function Contact(props) {
    return (
        <div className="contact">
            <h3>Contact</h3>
            <p><a href="https://github.com/swojas" target="_blank" rel="noopener noreferrer">GitHub: <i class="fab fa-github"></i></a></p>
            <p><a href="mailto: swojas12@gmail.com">Email: <i class="fa fa-envelope" aria-hidden="true"></i></a></p>
            <p><a href="https://www.linkedin.com/in/swojas-bhalunkar-225a8914a/" target="_blank" rel="noopener noreferrer">LinkedIn: <i class="fab fa-linkedin"></i></a></p>
            <a href={props.file} download="swojas-blaunkar-resume" target='_blank'>
                <button className="styled-button">Download Resume</button>
            </a>
        </div>
    );
}

export default Contact;
