import Link from 'next/link';
import { getSanityContent } from '../../lib/sanity/sanity';
import ImageUrlFor from '../../lib/sanity/ImageUrlFor';
import BlogContainer from '../../layouts/BlogContainer';
// import Image from "next/image";
import PreviewImage from '../../components/PreviewImage';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { compareAsc, format } from 'date-fns';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Logo from '../../components/Logo';
import SearchBox from '../../components/UI/SearchBox';
import { motion } from 'framer-motion';

export default function Reviews({ blogPosts }) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-center h-full bg-backgroundImage bg-funnyMan2 bg-no-repeat bg-fixed pb-24 sm:pb-4`}
    >

      <div className="flex self-end absolute px-10">{/* <SearchBox /> */}</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full text-money-dAccent1  sm:space-y-0 gap-3 pt-16">
        {blogPosts.map(
          ({
            title,
            slug,
            authorName,
            publishedDate,
            subtitle,
            id,
            previewImage,
          }) => (
            <div key={id}>
              <Link href={`/reviews/${slug}`} className="">
                <div
                  className={`flex flex-col hover:shadow-2xl dark:bg-gradient-to-b dark:from-money-dAccent1 dark:to-black bg-white bg-opacity-70 dark:bg-opacity-70 border-2 border-opacity-50  border-black dark:text-money-textLight2 rounded-2xl cursor-pointer relative max-w-sm`}
                >
                  <div className="text-4xl sm:text-3xl text-center font-bold py-4 sm:py-4 drop-shadow-md">
                    {title}
                  </div>
                  <div className="self-center min-h-0">
                    <img src={previewImage} alt={title} />
                  </div>
                  <p className="place-self-end text-md mt-2 px-4 text-gray-700 dark:text-gray-400">
                    Author: {authorName}
                  </p>
                  <p className=" place-self-end text-sm mb-2 px-4 text-gray-700 dark:text-gray-400">
                    {format(new Date(publishedDate), 'PP').toString()}
                  </p>
                  <h3 className="absolute translate-y-44 text-money-dAccent1 sm:translate-y-36 p-2 bg-money-lAccent1 bg-opacity-95 text-md align-top rounded-r-3xl">
                    {subtitle}
                  </h3>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </motion.div>
  );
}

export async function getStaticProps(context) {
  const data = await getSanityContent({
    query: `
    query BlogPosts {
      allBlogPost {
        _id,
        title,
        subtitle,
        publishedDate,
        slug {
          current
        },
        author {
          fullName
        },
        featureImage {
          asset {
            url
          },
        },
      },
    },
    `,
  });
  const blogPosts = data.allBlogPost.map((blogPost) => ({
    title: blogPost.title,
    subtitle: blogPost.subtitle,
    slug: blogPost.slug.current,
    authorName: blogPost.author.fullName,
    publishedDate: blogPost.publishedDate,
    id: blogPost._id,
    previewImage: blogPost.featureImage.asset.url,
  }));

  return {
    props: { blogPosts },
    revalidate: 3600,
    // fallback: false, // will be passed to the page component as props
  };
}
