// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';

// const BlogGrid = () => {
//   const blogs = [
//     {
//       image: "/api/placeholder/400/300",
//       author: "Prabhakar Mehta",
//       date: "1 Jan 2023",
//       title: "Small business & Startup",
//       description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl Dynasty?",
//       tags: ["Tax & Audit", "Management"]
//     },
//     {
//       image: "/api/placeholder/400/300",
//       author: "Mahesh Kumar",
//       date: "1 Jan 2023",
//       title: "Scale-Up Company Offer",
//       description: "Mental models are simple expressions of complex processes.",
//       tags: ["Tax", "Research", "Competence"]
//     },
//     {
//       image: "/api/placeholder/400/300",
//       author: "Rakhi Verma",
//       date: "1 Jan 2023",
//       title: "Growing Business Package",
//       description: "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
//       tags: ["Audit", "Money Back"]
//     },
//     {
//       image: "/api/placeholder/400/300",
//       author: "Karan Kumar",
//       date: "1 Jan 2023",
//       title: "Scale-Up Company Offer",
//       description: "Collaboration can make our teams stronger, and our individual designs better.",
//       tags: ["Money", "Management"]
//     },
//     {
//       image: "/api/placeholder/400/300",
//       author: "Richa Singh",
//       date: "1 Jan 2023",
//       title: "Scale-Up Company Offer",
//       description: "JavaScript frameworks make development easy with their features and functionalities.",
//       tags: ["Tax Return", "News", "Audit"]
//     },
//     {
//       image: "/api/placeholder/400/300",
//       author: "Mira Nolan",
//       date: "1 Jan 2023",
//       title: "Scale-Up Company Offer",
//       description: "Starting a community doesn't need to be complicated, but how do you get started?",
//       tags: ["Private Limited Company", "Customer Success"]
//     }
//   ];

//   const getTagColor = (tag) => {
//     const colors = {
//       'Tax & Audit': 'text-purple-600',
//       'Management': 'text-blue-600',
//       'Tax': 'text-green-600',
//       'Research': 'text-blue-600',
//       'Competence': 'text-orange-600',
//       'Audit': 'text-purple-600',
//       'Money Back': 'text-blue-600',
//       'Money': 'text-purple-600',
//       'Tax Return': 'text-green-600',
//       'News': 'text-red-600',
//       'Private Limited Company': 'text-purple-600',
//       'Customer Success': 'text-blue-600'
//     };
//     return colors[tag] || 'text-gray-600';
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">EXPLORE OUR BLOGS</p>
//         <h1 className="text-3xl font-bold text-gray-900">Accelerate Digital Transformation</h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <div key={index} className="group">
//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 src={blog.image}
//                 alt={blog.title}
//                 className="w-full h-48 object-cover"
//               />
//             </div>
            
//             <div className="mt-4 space-y-3">
//               <div className="flex items-center space-x-2 text-sm text-gray-600">
//                 <span>{blog.author}</span>
//                 <span>•</span>
//                 <span>{blog.date}</span>
//                 {index < 3 && <span>•</span>}
//                 {index < 3 && <span>Today</span>}
//               </div>

//               <div className="flex items-center justify-between group">
//                 <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
//                 <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//               </div>

//               <p className="text-gray-600">{blog.description}</p>

//               <div className="flex flex-wrap gap-2">
//                 {blog.tags.map((tag, tagIndex) => (
//                   <span
//                     key={tagIndex}
//                     className={`${getTagColor(tag)} text-sm`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;































import React from 'react';
import { ArrowUpRight } from 'lucide-react';

type Blog = {
  image: string;
  author: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
};

const BlogGrid: React.FC = () => {
  const blogs: Blog[] = [
    {
      image: "/api/placeholder/400/300",
      author: "Prabhakar Mehta",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl Dynasty?",
      tags: ["Tax & Audit", "Management"]
    },
    {
      image: "/api/placeholder/400/300",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes.",
      tags: ["Tax", "Research", "Competence"]
    },
    {
      image: "/api/placeholder/400/300",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
      tags: ["Audit", "Money Back"]
    },
    {
      image: "/api/placeholder/400/300",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"]
    },
    {
      image: "/api/placeholder/400/300",
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with their features and functionalities.",
      tags: ["Tax Return", "News", "Audit"]
    },
    {
      image: "/api/placeholder/400/300",
      author: "Mira Nolan",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"]
    }
  ];

  const getTagColor = (tag: string): string => {
    const colors: { [key: string]: string } = {
      'Tax & Audit': 'text-purple-600',
      'Management': 'text-blue-600',
      'Tax': 'text-green-600',
      'Research': 'text-blue-600',
      'Competence': 'text-orange-600',
      'Audit': 'text-purple-600',
      'Money Back': 'text-blue-600',
      'Money': 'text-purple-600',
      'Tax Return': 'text-green-600',
      'News': 'text-red-600',
      'Private Limited Company': 'text-purple-600',
      'Customer Success': 'text-blue-600'
    };
    return colors[tag] || 'text-gray-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">EXPLORE OUR BLOGS</p>
        <h1 className="text-3xl font-bold text-gray-900">Accelerate Digital Transformation</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>{blog.author}</span>
                <span>•</span>
                <span>{blog.date}</span>
                {index < 3 && <span>•</span>}
                {index < 3 && <span>Today</span>}
              </div>

              <div className="flex items-center justify-between group">
                <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              <p className="text-gray-600">{blog.description}</p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${getTagColor(tag)} text-sm`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
