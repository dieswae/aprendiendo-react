import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'dieswae_',
    name: 'Diego Andres',
    isFollowing: true
  },
  {
    userName: 'blondxprincess',
    name: 'Mari',
    isFollowing: false
  },
  {
    userName: 'taylorswift13',
    name: 'Taylor Swift',
    isFollowing: true
  },
  {
    userName: 'tkelce',
    name: 'Travis Kelce',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}