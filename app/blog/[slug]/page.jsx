// pages/data/[slug].js
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import { transformerCopyButton } from '@rehype-pretty/transformers'

export default async function BlogPage({ params }) {
  // console.log(params.slug);
  // data/datas.js
  // const data =
  //   {
  //     id: 1,
  //     title: "First data",
  //     description: "This is the first data description.",
  //     slug: "first-data",
  //     author: "Author One",
  //     publishedDate: "2024-09-01",
  //     image: "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     html: "<p>This is the first data description.</p>"
  //   };
  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    return notFound();
  }
  const fileContent = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(fileContent);
   
  const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: data.title})
  .use(rehypeFormat)
  .use(rehypePrettyCode,{
    theme : 'github-dark',
    transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
  })
  .use(rehypeStringify)
  .process(content);
  const htmlContent = file.toString();
  // console.log(data,content);
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-primary-foreground shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-auto mb-4 rounded"
        />
        <blockquote className="italic text-lg mb-4 border-l-4 border-secondary-foreground px-4">
          {data.description}
        </blockquote>
        <q className="italic text-gray-600 mb-4">
          By {data.author} on {data.date}
        </q>
        <div
          className="prose dark:prose-invert max-w-3xl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </div>
  );
}
