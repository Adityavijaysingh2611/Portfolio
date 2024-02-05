import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/utracker.jpg';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }

  .projectItem__link {
    text-decoration: none;
    color: var(--white);
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 2rem;
    transition: var(--transition);
    &:hover {
      color: var(--secondary-color);
      transform: scale(1.1);
      cursor: pointer;
      text-decoration: underline;
      text-underline-offset: 5px;
      text-decoration-thickness: 2px;
      /* text-decoration-color: var(--white); */
      /* text-decoration-style: dotted; */
      /* text-decoration-skip-ink: none; */
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  link,
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info ">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>

        {link && (
          <a
            className="projectItem__link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        )}
      </div>
    </ProjectItemStyles>
  );
}
