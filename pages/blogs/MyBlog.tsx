import Head from 'next/head'
import Link from 'next/link'

export const MyBlog = () => {
  return (
    <div>
      <Head>
        <title>MyBlog</title>
        {/* each page can have its own HTML Header infos */}
      </Head>
      <h1>Here is My Blog</h1>
      <Link href="/">Back Home</Link>
    </div>
  )
}

export default MyBlog  // pages as routes need a default export!!