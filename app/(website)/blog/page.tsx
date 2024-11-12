import React from 'react';
import blogs from './[slug]/db';  // import ตัวแปร blogs จากไฟล์ db

const BlogList = () => {
  const formatSlug = (slug: string) => {
    return slug.replace(/-/g, ' ');
  };

  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6"></h1>
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="text-gray-600"> {blog.slug}</div>
              <div className="text-lg font-medium mt-1">
                 {formatSlug(blog.slug)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;

//import slug from "./[slug]/db"