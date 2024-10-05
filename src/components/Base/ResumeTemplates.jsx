"use client";
import { useState } from 'react';

export default function ResumeTemplates() {
  const [resumeTemplates] = useState([
    {
      id: 1,
      name: 'Template 01',
      imageUrl: '/formats/format1.png', 
    },
    {
      id: 2,
      name: 'Template 02',
      imageUrl: '/formats/format2.png', 
    },
    {
      id: 3,
      name: 'Template 03',
      imageUrl: '/formats/format3.png',
    },
    {
      id: 4,
      name: 'Template 04',
      imageUrl: '/formats/format4.png',
    }
  ]);

  const handleTemplateSelect = (template) => {
    console.log(`Selected template: ${template.name}`);
  };

  return (
    <>
      <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-xl text-gray-800 pt-32 bowl'>
          here are the templates 🤯🧾
        </h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-16 pb-16">
          {resumeTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-72 h-auto"
            >
             
              <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
                {template.imageUrl ? (
                  <img
                    src={template.imageUrl}
                    alt={`Resume template - ${template.name}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-500">Image Not Available</span>
                )}
              </div>

             
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {template.name}
                </h2>
                <button
                  onClick={() => handleTemplateSelect(template)}
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Lets Build
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
