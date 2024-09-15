// pages/blog/[slug].js

export default function BlogPage({ params }){
    console.log(params.slug);
  // data/blogs.js
const blog =
  {
    id: 1,
    title: "First Blog",
    description: "This is the first blog description.",
    slug: "first-blog",
    author: "Author One",
    publishedDate: "2024-09-01",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    html: "<p>This is the first blog description.</p>"
  };
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-primary-foreground shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4 rounded" />
        <blockquote className="italic text-lg mb-4 border-l-4 border-secondary-foreground px-4">{blog.description}</blockquote>
        <p className="italic text-gray-600 mb-4">By {blog.author} on {blog.publishedDate}</p>
        <div className="prose" dangerouslySetInnerHTML={{ __html: blog.html }} ></div>
      </div>
    </div>
  );
};
