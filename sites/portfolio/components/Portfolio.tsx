import { Project } from './Project'

export type TProject = {
  name: string
  website: string
  code: string
  image: string
  icons: string[]
}

const projectsArray: TProject[] = [
  {
    name: 'Tic-Tac-Toe',
    website: 'https://mhogeveen.github.io/tic-tac-toe',
    code: 'https://github.com/mhogeveen/tic-tac-toe',
    image: '/tic_tac_toe.webp',
    icons: ['react', 'redux', 'typescript', 'sass'],
  },
  {
    name: 'Github Repo Timeline',
    website: 'https://mhogeveen.github.io/github_repo_timeline/',
    code: 'https://github.com/mhogeveen/github_repo_timeline',
    image: '/github_repo_timeline.webp',
    icons: ['react', 'redux', 'javascript', 'sass'],
  },
  {
    name: 'DnD Dice Roller',
    website: 'https://mhogeveen.github.io/dnd_dice_roller/',
    code: 'https://github.com/mhogeveen/dnd_dice_roller',
    image: '/dnd_dice_roller.webp',
    icons: ['react', 'redux', 'javascript', 'sass'],
  },
  {
    name: 'Checklist',
    website: 'https://mhogeveen.github.io/JavaScript_ToDoList/',
    code: 'https://github.com/mhogeveen/JavaScript_ToDoList',
    image: '/checklist.webp',
    icons: ['javascript', 'sass', 'html'],
  },
]

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="grid"
    >
      {projectsArray.map((projectItem) => (
        <Project
          project={projectItem}
          key={projectItem.name}
        />
      ))}
    </section>
  )
}
