import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';
import { memo } from 'react';
import Link from 'next/link';

interface BlogPortableTextProps {
  value: PortableTextBlock[];
}

const BlogPortableText: React.FC<BlogPortableTextProps> = ({ value }) => {
  const components: PortableTextComponents = {
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic text-gray-800">{children}</em>
      ),
      link: ({ children, value }) => (
        <Link 
          href={value?.href || '#'} 
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
          target={value?.href?.startsWith('mailto:') ? undefined : '_blank'}
          rel={value?.href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
          {children}
        </Link>
      ),
    },
    block: {
      normal: ({ children }) => (
        <p className="mb-6 text-gray-700 leading-relaxed text-base lg:text-lg">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl lg:text-3xl font-bold mb-5 text-gray-900 leading-tight">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-900">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg lg:text-xl font-semibold mb-3 text-gray-900">
          {children}
        </h4>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-300 pl-6 my-6 italic text-gray-600 text-lg">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="space-y-2 pl-6 mb-6 list-disc marker:text-gray-400">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="space-y-2 pl-6 mb-6 list-decimal marker:text-gray-400">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="text-gray-700 leading-relaxed">
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className="text-gray-700 leading-relaxed">
          {children}
        </li>
      ),
    },
  };

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div className="blog-content space-y-4 max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
};

export default memo(BlogPortableText);
