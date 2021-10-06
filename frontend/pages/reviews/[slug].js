import { useState } from 'react';

//BACKEND API
import { getSanityContent } from '../../lib/sanity/sanity';

//SEO
import { NextSeo } from 'next-seo';

//MDX CONFIG AND COMPONENTS
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/dist/serialize';
import MDXconfig from '../../components/mdx/MDXcomponents';
import FeatureTitle from '../../components/mdx/FeatureTitle';
import TestComponent1 from '../../components/mdx/TestComponent1';
import LinkedInButton from '../../components/mdx/LinkedInButton';
import MDimage from '../../components/mdx/MDimage';
import { compareAsc, format } from 'date-fns';
import Image from 'next/image';
import SearchBox from '../../components/UI/SearchBox';
//PAGE COMPONENTS
import Logo from '../../components/Logo';
import BackToReview from '../../components/UI/BackToReview';

const mdxComponents = {
  FeatureTitle,
  TestComponent1,
  LinkedInButton,
  MDimage,
  ...MDXconfig,
};

// const [post, setPost] = useState({});

//IMPORTS FROM SLUG QUERY
const BlogSlug = ({
  title,
  subtitle,
  featureImage,
  publishedDate,
  author,
  source,
  // tags,
}) => {
  return (
    <>
      <NextSeo
        title={title}
        description={subtitle}
        titleTemplate={'%s | Best'}
        openGraph={{
          title: `${title}`,
          description: `${subtitle}`,
          url: `${featureImage}`,
          type: 'article',
          article: {
            publishedTime: `${publishedDate}`,
            modifiedTime: '',
            expirationTime: '',
            section: '',
            authors: [`${author}`],
            // tags: `${tags}`,
          },
          images: [
            {
              url: `${featureImage}`,
              width: 850,
              height: 650,
              alt: `${title}`,
            },
          ],
        }}
      />
      {/* SLUG HEADER */}
      <div className="grid grid-cols-2 w-full text-3xl tracking-tighter md:text-3xl font-bold border-opacity-50  border-b-2 border-black dark:border-white dark:border-b-2 dark:border-opacity-20 bg-white dark:bg-black dark:text-money-lAccent1 justify-items-center items-center sm:border-none">
        <h1 className="text-center self-center flex my-4 sm:hidden">
          <Logo />
          Blog
        </h1>
        <div className="">
          <BackToReview />
        </div>
      </div>

      {/* FEATURE IMAGE & TITLES */}

      <div className="dark:bg-black text-money-dAccent1 dark:text-money-textLight">
        <div className="grid grid-cols-1 max-w-7xl m-auto rounded-b-3xl overflow-hidden shadow-lg justify-items-center">
          <h1 className="text-3xl font-bold mt-2 m-4 ">{title}</h1>

          {featureImage && (
            <div className="">
              <Image
                className="rounded-lg"
                src={featureImage}
                alt={title + ' article'}
                height="500px"
                width="650px"
                responsive
              />
            </div>
          )}
          <div className="text-xl p-4 text-center drop-shadow-md">
            {subtitle}
          </div>

          {/* REVIEW BLOG AUTHOR & PUBLUSH DATE */}
        </div>
        <div className="mx-2 sm:m-4 sm:max-w-7xl m-auto dark:text-money-textLight">
          <MDXRemote {...source} components={mdxComponents} />
        </div>
      </div>
    </>
  );
};

//BACKEND GRAPHQL QUERIES
export const getStaticProps = async (context) => {
  const blogSlug = context.params.slug;

  if (!blogSlug) {
    return {
      notFound: true,
    };
  }

  const query = {
    query: `
      query PostBySlug($slug: String!) {
        allBlogPost(where: {slug: { current: { eq: $slug}}}) {
          title,
          subtitle,
          content,
          publishedDate,
          author{
            fullName,
          },
          categories {
            title,
          },
          featureImage{
              asset {
                url
            },
          },
        },
      }  
      `,
    variables: {
      slug: blogSlug,
    },
  };

  const data = await getSanityContent(query);
  // {
  //   console.log(data);
  // }

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    const tags = [''];

    const mdxContent = await serialize(data.allBlogPost[0].content);

    data.allBlogPost[0].categories.map((category) => {
      tags.push(category.title);
    });

    // console.log(data.allBlogPost[0].content);

    return {
      props: {
        title: data.allBlogPost[0].title,
        subtitle: data.allBlogPost[0].subtitle,
        publishedDate: data.allBlogPost[0].publishedDate,
        author: data.allBlogPost[0].author.fullName,
        featureImage: data.allBlogPost[0].featureImage.asset.url,
        tags: tags,
        source: mdxContent,
      },
      revalidate: 3600,
    };
  }
};

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
        query AllBlogPosts {
          allBlogPost {
            slug {
              current
            }
          }
        }
      `,
  });

  const posts = data.allBlogPost;

  return {
    paths: posts.map((p) => `/reviews/${p.slug.current}`),
    fallback: false,
  };
}

export default BlogSlug;
