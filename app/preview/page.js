'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, FileText, Calendar, CheckCircle } from 'lucide-react';

export default function PreviewPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center p-8 bg-white rounded-xl shadow-lg">
        <div className="text-gray-400 mb-4 flex justify-center">
           <FileText size={48} />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">No Data Found</h2>
        <p className="text-gray-500 mt-2 mb-6">It looks like you haven't submitted the form yet.</p>
        <button 
          onClick={() => router.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Editor
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white">Submission Preview</h1>
                <p className="text-blue-100 text-sm mt-1">Review your details before finalizing.</p>
              </div>
              <CheckCircle className="text-blue-200" size={40} />
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Dynamic Mapping of Data */}
              {Object.entries(data).map(([key, value]) => (
                <div key={key} className="border-b border-gray-50 pb-4 last:border-0 md:border-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()} {/* Formats camelCase to Normal Case */}
                  </p>
                  <p className="text-gray-800 font-medium break-words">
                    {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                  </p>
                </div>
              ))}

            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 border-t pt-8">
              <button 
                onClick={() => window.print()}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                Download PDF
              </button>
              {/* <button 
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition"
              >
                Confirm Submission
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}