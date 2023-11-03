function Card() {
    return (
            <div className="card">
                <div className="image">
                    <img src="img/vsco_102423(2).jpg"></img>
                </div>
                <div className="name">
                    <h3>Sol Romão</h3>
                    <h4>Designer</h4>
                </div>
                <div className="contacts">
                    <a href="https://www.google.com/intl/pt-BR/gmail/about/"><button className="email"><i className="fa fa-envelope"> Email</i></button></a>
                    <a href="https://www.linkedin.com"><button className="linkedin"><i className="fa fa-linkedin-square"> Linkedin</i></button></a>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <p>Borned in Campo Grande Alegre, she seeks to expand the horizonts through her art.</p>
                </div>
                <div className="social">
                    <a href="https://twitter.com" className="twitter"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.facebook.com" className="facebook"><i className="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram"></i></a>
                    <a href="https://github.com/" className="github"><i className="fa fa-github"></i></a>
                </div>            
            </div>
    )
}

ReactDOM.render(<Card/>, document.getElementById("card"))

