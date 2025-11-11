import { PortableText, PortableTextComponents } from '@portabletext/react';
import { PortableTextBlock } from 'next-sanity';
import { memo } from 'react';

interface CareerPortableTextProps {
  value: PortableTextBlock[];
}

const CareerPortableText: React.FC<CareerPortableTextProps> = ({ value }) => {
  const components: PortableTextComponents = {
    marks: {
      strong: ({ children }) => (
        <strong className="font-semibold text-gray-900">{children}</strong>
      ),
      em: ({ children }) => (
        <em className="italic">{children}</em>
      ),
    },
    block: {
      normal: ({ children, value }) => {
        // Handle bullet list items with proper nesting
        if (value.listItem === 'bullet') {
          const level = value.level || 1;
          
          // Different styling for different levels
          if (level === 1) {
            // Top-level items (often headers like "Corporate Actions & Restructuring:")
            return (
              <li className="mb-3 text-gray-900 font-medium list-disc ml-0">
                {children}
              </li>
            );
          } else if (level === 2) {
            // Sub-items (detailed descriptions)
            return (
              <li className="mb-2 text-[#393939] list-disc ml-6">
                {children}
              </li>
            );
          } else {
            // Further nested items if any
            return (
              <li className="mt-1 text-[#393939] list-disc ml-12">
                {children}
              </li>
            );
          }
        }
        
        // Regular paragraph for non-list items
        return (
          <p className="mb-4 text-[#393939] leading-relaxed">
            {children}
          </p>
        );
      },
      h1: ({ children }) => (
        <h1 className="text-2xl font-bold mb-3 text-gray-900">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-xl font-bold mb-3 text-gray-900">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-lg font-bold mb-2 text-gray-900">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-base font-bold mb-2 text-gray-900">{children}</h4>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="space-y-1 pl-0">
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className="space-y-1 pl-5 list-decimal">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children, value }) => {
        const level = value.level || 1;
        
        if (level === 1) {
          // Top-level bullet items (section headers)
          return (
            <li className="mb-3 font-medium text-gray-900">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>{children}</div>
              </div>
            </li>
          );
        } else if (level === 2) {
          // Sub-level bullet items
          return (
            <li className="my-2 text-[#393939] ml-5">
              <div className="flex items-start">
                <span className="w-1.5 h-1.5 bg-white border border-gray-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>{children}</div>
              </div>
            </li>
          );
        } else {
          // Further nested items
          return (
            <li className="mb-1 text-[#393939] ml-10">
              <div className="flex items-start">
                <span className="w-1 h-1 bg-white border border-gray-100 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <div>{children}</div>
              </div>
            </li>
          );
        }
      },
      number: ({ children, value }) => {
        const level = value.level || 1;
        const marginLeft = level === 1 ? 'ml-0' : level === 2 ? 'ml-4' : 'ml-8';
        return (
          <li className={`mb-1 ${marginLeft}`}>
            {children}
          </li>
        );
      },
    },
  };

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div className="portable-text-content space-y-2">
      <PortableText value={value} components={components} />
    </div>
  );
};

export default memo(CareerPortableText);
