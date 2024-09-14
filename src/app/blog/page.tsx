import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import sampleBlogs from '@/config/sampleblogs';
import React from 'react'
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs, { readFileSync } from "fs"
import matter from 'gray-matter';
import { Metadata } from 'next';
const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map((file)=>{
  const fileContent = readFileSync(`content/${file}`, "utf-8")
  const {data} = matter(fileContent);
  return data;
})
 
const BlogList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={blog.imageUrl ? blog.imageUrl : '/df.jpeg'}
              alt={blog.title}
              width={6400}
              height={3600}
              className="rounded-lg mb-4 object-cover w-full h-60"
            />
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {blog.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {blog.description}
            </p>
            <Link href={`blogpost/${blog.slug}`} className={buttonVariants({ variant: "default" })}>
              Read
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export const metadata: Metadata =  {
  title: "Blog - MUTANTS",
  description: "Discover insightful articles and tutorials on technology, coding, software development, and more. Stay updated with the latest trends and expand your knowledge with X13B's expertly crafted blog posts.",
}
export default BlogList;
