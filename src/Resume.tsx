export function Resume() {
  return (
    <>
      <div className="resume-page">
        <h1>Resume</h1>
        <h2>IT education</h2>
        <div className="education-box box1">
          <div className="left">
            <h3>2023 - now</h3>
            <p>
              Codecademy courses
              <br />
              Self-learning{' '}
            </p>
          </div>
          <div className="right">
            <h3>Cources</h3>
            <ul>
              <li>Learn JavaScript</li>
              <li>Learn Intermediate JavaScript</li>
              <li>Learn HTML</li>
              <li>Learn CSS: Responsive Design</li>
              <li>Learn Intermediate CSS</li>
              <li>Learn Git & GitHub</li>
            </ul>
            <h3>Career path</h3>
            <p>Front-End Engineer</p>
          </div>
        </div>
        <h2>School education</h2>
        <div className="education-box box2">
          <h3>2016 - 2020</h3>
          <p>Czech middle school of hotel business and gastronomy</p>
          <p className="location">Czech republic, Prague</p>
        </div>
      </div>
    </>
  );
}
