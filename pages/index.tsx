import Link from 'next/link'
import { useRouter } from 'next/router'

export const Home = () => {
  
  const router = useRouter()

  const handleClick = (e: any) => {
    e.preventDefault
    router.push('/pokemon')
  }
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li><Link href="/pokemon">Pokemons</Link></li>       {/* goes to page pokemon */}
        <li><Link href="/blogs">Blogs</Link></li>           {/* goes to /blogs/index */}
        <li><Link href="/blogs/MyBlog">My Blog</Link></li>  {/* duh! */}
      </ul>
      <button onClick={handleClick}>Go to Poky</button>
    </div>
  )
}

export default Home  // pages need a default export for routing!!