import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUserName = (userName) => `@${userName}`
  return (
    <section className='App'>
    <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="JhonmaSG" 
        name="Jhon Mario Serrano Gordillo" />

    <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing={false} 
        userName="midudev" 
        name="Miguel Angel Durán" />

    <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="Directo" 
        name="Roncancio tamarindo" />

    <TwitterFollowCard 
        formatUserName={formatUserName} 
        isFollowing 
        userName="JuanMarcelo" 
        name="Juan David Marcelo Lopez" />
    </section>
  )
}
