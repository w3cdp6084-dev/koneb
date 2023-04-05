import { getBlogPosts } from "../notion";

export default function Home({ blogPosts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  return {
    props: {
      blogPosts
    },
    revalidate: 60 // 再生成間隔を秒単位で設定 (ここでは 1 分)
  };
}
