"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchBlogs } from "../../services/blog";
import Link from "next/link";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const blogsFetch = async () => {
      const result = await fetchBlogs();
      const response = result.data;
      console.log(response)

      setData(response);
      setLoading(false);
    };
    blogsFetch();
  }, []);

  return (
    <div className="w-full p-8 mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <button className="rounded-2xl p-3 border">Blogs</button>
            <h2 className="text-4xl mt-2">Sound Insights</h2>
          </div>
          <div className="max-w-xl">
            <p className="text-xl">
              Stay updated with the latest trends in audio technology, speaker
              innovations, and expert tips to enhance your listening experience.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 p-8">
          {data.map((item, index) => {
            const { title, publishedAt, coverImage, slug } = item;
            const imgUrl = coverImage?.url;

            return (
              <div
                key={index}
                className="hover:border-gray-500 transition-transform hover:-translate-y-1"
              >
                <Link href={`/blogs/${slug}`}>
                <img 
                src={imgUrl ? `http://localhost:1337${imgUrl}` : "/assets/blog1.jpeg"}
                 className="rounded-2xl h-[250px] w-full object-cover" alt="blog" /> </Link>
                <h5 className="text-2xl py-3">{title}</h5>
                <p>Feb 1, 2025</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
