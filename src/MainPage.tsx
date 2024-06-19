import photo from './pics/IMG_3222.jpg';
import { Link } from 'react-router-dom';

export function MainPage() {
  return (
    <>
      <div className="Main-page">
        <div className="photo-and-name">
          <img src={photo} alt="me" />
          <h2>
            Daria <br /> Eremeeva
          </h2>
          <div className="horizontal-line"></div>
          <p>
            Front-end <br /> developer
          </p>
        </div>
        <div className="info">
          <div className="greet">
            <h1>Hello</h1>
            <h3>Here&apos;s who I am & what I do</h3>
          </div>
          <div className="buttons">
            <Link to="/Resume">
              <button>RESUME</button>
            </Link>
            <Link to="/Projects">
              <button>PROJECTS</button>
            </Link>
          </div>
          <div className="about-me">
            <p>
              I&apos;m a beginner frontend developer with a passion for creating
              beautiful and functional web applications. I am passionate about
              web development and constantly learning new technologies. My goal
              is to become a professional frontend developer and create
              user-friendly and aesthetically pleasing web applications.
            </p>
            <div className="my-skills">
              <p>My skills:</p>
              <ul>
                <li>HTML5, JSX</li>
                <li>CSS3</li>
                <li>JavaScript, React, Redux</li>
                <li>Git, GitHub, GitHub Pages</li>
                <li>Docker, Webpack</li>
                <li>API Development and Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
