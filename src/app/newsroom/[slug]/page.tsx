import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { memo } from "react";
import { getBlogDetail } from "@/lib/sanityQueries";
import { BlogDetail } from "@/lib/types/blogs";
import BlogPortableText from "@/components/reusable/BlogPortableText";
import { notFound } from "next/navigation";

export const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blogPost: BlogDetail = await getBlogDetail(slug);
  
  if (!blogPost) {
    notFound();
  }

  // Format date to a readable format

  return (
    <>
      <Navbar />

      <div className="px-5 lg:px-56 mt-7 lg:mt-20">
        <div className="block lg:flex justify-between items-center gap-7">
          <TransitionVertical>
            <div className="w-full">
              <h1 className="text-[#727272] lg:text-base text-sm mb-2">
                {formatDate(blogPost.date)}
              </h1>

              <h1 className="text-xl lg:text-3xl font-semibold">
                {blogPost.title}
              </h1>
            </div>
          </TransitionVertical>
        </div>

        <div className="mt-8 lg:mt-12 max-w-5xl mx-auto text-justify">
          <TransitionVertical>
            {blogPost.content && (
              <BlogPortableText value={blogPost.content} />
            )}
          </TransitionVertical>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
