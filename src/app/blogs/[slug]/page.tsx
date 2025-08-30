import { apiFetch } from "../../../lib/api";

export default async function BlogDetails({ params }) {
  const { slug } = await params;
  const result = await apiFetch(`/posts?filters[slug][$eq]=${slug}&populate=*`);
  const blog = result.data[0]; // should be single post
  console.log(blog.coverImage)
  if (!blog) {
    return <div className="p-8">Blog not found</div>;
  }

  const { title, content, publishedAt, coverImage } = blog;
  const imgUrl = coverImage?.url;
  console.log(imgUrl)


  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-600">{new Date(publishedAt).toLocaleDateString()}</p>
      {imgUrl && (
       <img 
       src={imgUrl ? `http://localhost:1337${imgUrl}` : "/assets/blog1.jpeg"}
        className="rounded-2xl h-[250px] w-full object-cover" alt="blog" />
      )}
      <div className="prose max-w-none">
      <p className="text-xl ">  {content}</p>
      </div>
    </div>
  );
}
