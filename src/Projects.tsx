import React from 'react';
import DeliveryAppImg from './pics/foodelivery-web.jpg'
import WeatherForecastApp from './pics/weather-web.png'
import TaskManagerImg from './pics/task-manager-web.png'

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Delivery App',
    description:
      'This website is a demo version of delivery application. Providing options for ordering food and drinks. Usage of mapy.cz API helps precise address location',
    imageUrl: DeliveryAppImg,
    link: 'https://dariabergg.github.io/foodelivery/#/',
  },
  {
    id: 1,
    title: 'Weather Forecast',
    description:
      'This website is a demo version of simple weather forecast application. It provides users with current weather conditions and other weather-related information for a specified location at this point in time. Users can input their desired location to receive accurate weather predictions. It&apos;s a useful tool for planning outdoor activities, travel, or simply staying informed about weather conditions in different areas.',
    imageUrl: WeatherForecastApp,
    link: 'https://dariabergg.github.io/weather-forecast/',
  },
  {
    id: 3,
    title: 'Task Manager',
    description:
      'This website is a demo version of task manager tool application. It helps users organize and manage their tasks by providing features such as creating tasks, categorizing tasks by statuses. Task manager apps are commonly used for personal productivity, project management, and team coordination.',
    imageUrl: TaskManagerImg,
    link: 'https://dariabergg.github.io/task-manager/',
  },
];

export const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <h1>Projects</h1>
      {projects.map((project) => (
        <>
          <h3>{project.title}</h3>
          <div className="projects-box" key={project.id}>
            <div className="left">
              <img src={project.imageUrl} alt={`${project.title}-pic`} />
            </div>
            <div className="right">
              <h4>Description</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                link
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
