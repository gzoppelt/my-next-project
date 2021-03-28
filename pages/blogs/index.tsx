import Head from 'next/head'
import Link from 'next/link'

export const Blogs = () => {
  return (
    <div>
      <Head>
        <title>Next: Blogs</title>
        {/* each page can have its own HTML Header infos */}
      </Head>
      <h1>Welcome to Blogs</h1>
      <p><Link href="/blogs/MyBlog">My Blog</Link></p>
      <p><Link href="/">Back Home</Link></p>
    </div>
  )
}

export default Blogs  // pages as routes need a default export!!