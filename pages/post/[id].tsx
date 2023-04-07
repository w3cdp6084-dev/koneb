import { useRouter } from "next/router";
import { getBlogPosts, getBlogPost } from "../../notion.js";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const blogPosts = await getBlogPosts();
  const paths = blogPosts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPost(params.id);
  return {
    props: {
      post
    },
    revalidate: 60
  };
}
