import React, { ReactElement } from 'react'

import ExternalLinkIcon from './icons/ExternalLinkIcon'
import CodeIcon from './icons/CodeIcon'
import ReduxIcon from './icons/ReduxIcon'
import ReactIcon from './icons/ReactIcon'
import JavaScriptIcon from './icons/JavaScriptIcon'
import JQueryIcon from './icons/JQueryIcon'
import SassIcon from './icons/SassIcon'
import HTMLIcon from './icons/HTMLIcon'
import CSSIcon from './icons/CSSIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'
import { TProject } from './Portfolio'
import Image from 'next/image'

const components: Record<string, ReactElement> = {
  redux: <ReduxIcon />,
  react: <ReactIcon />,
  javascript: <JavaScriptIcon />,
  typescript: <TypeScriptIcon />,
  jquery: <JQueryIcon />,
  sass: <SassIcon />,
  html: <HTMLIcon />,
  css: <CSSIcon />,
}

type Props = {
  project: TProject
}

export const Project = ({ project }: Props) => {
  return (
    <div className="project">
      <div className="project-title">
        <h3>{project.name}</h3>
      </div>
      <div className="project-buttons">
        <a
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
          className="button-website"
          role="button"
        >
          <ExternalLinkIcon />
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="button-code"
          role="button"
        >
          <CodeIcon />
        </a>
      </div>
      <div className="project-image">
        <Image
          src={project.image}
          alt={project.name}
          loading="lazy"
          width={350}
          height={484}
        />
      </div>
      <div className="project-technologies">
        {project.icons.map((icon) => (
          <div
            className="tech-icon"
            key={icon}
          >
            {components[icon]}
          </div>
        ))}
      </div>
    </div>
  )
}
