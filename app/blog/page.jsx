import Link from "next/link";
const blogs = [
  {
    id: 1,
    title: "First Blog",
    description: "This is the first blog description.",
    slug: "first-blog",
    author: "Author One",
    publishedDate: "2024-09-01",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Second Blog",
    description: "This is the second blog description.",
    slug: "second-blog",
    author: "Author Two",
    publishedDate: "2024-09-05",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Third Blog",
    description: "This is the third blog description.",
    slug: "third-blog",
    author: "Author Three",
    publishedDate: "2024-09-10",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Fourth Blog",
    description: "This is the fourth blog description.",
    slug: "fourth-blog",
    author: "Author Four",
    publishedDate: "2024-09-12",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    title: "Fifth Blog",
    description: "This is the fifth blog description.",
    slug: "fifth-blog",
    author: "Author Five",
    publishedDate: "2024-09-14",
    image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const BlogPage = () => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-6 m-6">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 w-80 cursor-pointer overflow-hidden"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300"
          />
          <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {blog.description}
          </p>
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-block mt-4 px-6 py-2 bg-secondary border border-primary hover:bg-primary-foreground text-primary rounded-lg"
          >
            Read more
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
