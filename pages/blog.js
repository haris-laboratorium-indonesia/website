import { useState } from "react";
import Container from "/components/Container";
import BlogPost from "/components/BlogPost";
import { getAllFilesFrontMatter } from "/lib/mdx";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

const blogPost = [
  {
    title:
      "Everything I Know About Style Guides, Design Systems, and Component Libraries",
    summary:
      "A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices.",
    slug: "style-guides-component-libraries-design-systems",
  },

  {
    title: "How Stripe Designs Beautiful Websites",
    summary:
      "Examining the tips and tricks used to make Stripe's website design a notch above the rest.",
    slug: "how-stripe-designs-beautiful-websites",
  },
  {
    title: "Creating a Monorepo with Lerna & Yarn Workspaces",
    summary:
      "In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.",
    slug: "monorepo-lerna-yarn-workspaces",
  },
];

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Layout browserTitle="Blog" description="Blog HarisLab">
      <Title name="Blog" />
      <Container
        title="Blog - HarisLab"
        description="Laboratorium untuk Pelajar."
      >
        <div className="flex flex-col items-start justify-center max-w-5xl mx-auto mb-16">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on this site.
            Use the search below to filter by title.`}
          </p>
          <div className="relative w-full mb-4">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          {!searchValue && (
            <>
              <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
                Most Popular
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {blogPost.map((a) => (
                  <BlogPost title={a.title} summary={a.summary} slug={a.slug} />
                ))}
              </div>
            </>
          )}
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Posts
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </div>{" "}
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
