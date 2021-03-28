import Head from 'next/head'
import Link from 'next/link'
import css from './pokemon.module.css'

/**
 * @abstract 1. create and EXPORT the props
 * @returns props
 */
 export const getStaticProps = async () => {
  const res  = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=200`)
  const pokemons = await res.json()

  return {
    props: {
      pokemons
    }
  }
}

interface Props{
  pokemons: any
}
/**
 * @abstract 2. consume the props
 * @param props generated by getStaticProps
 * @returns Pokemon component
 * @description List of names of available Pokemons
 */
export const Pokemon = ({ pokemons }: Props) => {

  const pokeLinks = pokemons.results.map(
    (p, i) => <div key={i}><Link href={`/pokemon/${p.name}`}>{`${i+1} - ${p.name}`}</Link></div>
  )

  return (
    <div>
      <Head>
        <title>Pokemons</title>
        {/* important for SEO */}
      </Head>
      
      <h1>{pokemons.results.length} Pokemons</h1>
      <h3>of 1118 in total</h3>
      <div className={css.poke}>{pokeLinks}</div>
      <p><Link href="/">Back Home</Link></p>
    </div>
  )
}
export default Pokemon  // pages as routes need a default export!!