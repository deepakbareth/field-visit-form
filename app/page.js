'use client';

import { useState } from 'react';
import EmployeeDetails from './Components/EmployeeDetails';
import DutyDetails from './Components/DutyDetails';
import DurationDetails from './Components/DurationDetails';
import TravelDetails from './Components/TravelDetails';
import ReportingDetails from './Components/ReportingDetails';
import Declaration from './Components/Declaration';
import ApprovalSection from './Components/ApprovalSection';
import Belongings from './Components/Belongings';
import { initialFormData } from './utils/formInitialData';
import { useRouter } from 'next/navigation';



export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({...initialFormData,
    // 1. Employee Details
    employeeName: '',
    employeeId: '',
    department: '',
    designation: '',
    contactNumber: '',

    // 2. Duty & Visit Details
    purpose: '',
    dutyType: 'NCR', // Defaulted to 'NCR' so a radio is pre-selected
    location: '',
    client: '',

    // 3. Duration of Duty
    startDate: '',
    endDate: '',
    totalDuration: '',

    // 4. Travel & Stay Details
    transport: '',
    accommodation: '',
    advance: '',
    amount: '',

    //5. Reporting & Responsibility
    managerName: '',
    deliverables: '',

    // 6. Declaration
    signature: '',
    declarationDate: '',

    // 7. Approval Section
    reportingManager: '',
    reportingManagerSign: '',
    reportingManagerDate: '',
    departmentHead: '',
    departmentHeadSign: '',
    departmentHeadDate: '',
    hrName: '',
    hrSign: '',
    hrDate: '',

    //8 Belongings
    belongings: ["", "", "", "", ""],
    remarks: "",

  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [name]: value,
      };

      if (name === "advance" && value === "No") {
        updatedData.amount = "";
      }

      // 🔥 Auto calculate duration
      if (updatedData.startDate && updatedData.endDate) {
        const start = new Date(updatedData.startDate);
        const end = new Date(updatedData.endDate);

        const diffMs = end - start;

        if (diffMs > 0) {
          const hours = Math.floor(diffMs / (1000 * 60 * 60));
          const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

          updatedData.totalDuration = `${hours}h ${minutes}m`;
        } else {
          updatedData.totalDuration = '';
        }
      }

      return updatedData;
    });
  };


  const handleBelongingsChange = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.belongings];
      updated[index] = value;

      return {
        ...prev,
        belongings: updated,
      };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating an API call
    console.log('Submitting Data:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
  // 🔥 Store data
  localStorage.setItem("formData", JSON.stringify(formData));

    setIsSubmitting(false); 
  // setFormData(initialFormData);
    alert('Form Submitted Successfully!');
      // 🔥 Store data
  router.push("/preview");
  
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-2 sm:px-2">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-slate-200">

        {/* Header Decor */}
        <div className="h-0.5 bg-blue-600" />

        <div className="p-8">
          <header className="text-center mb-10">
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
              OFFICIAL DUTY FORM
            </h1>
            <p className="text-slate-500 mt-2">Field Visit & Permission Request</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">

            <EmployeeDetails
              formData={formData}
              handleChange={handleChange}
            />
            <DutyDetails
              formData={formData}
              handleChange={handleChange}
            />
            <DurationDetails
              formData={formData}
              handleChange={handleChange}
            />
            <TravelDetails
              formData={formData}
              handleChange={handleChange}
            />
            <ReportingDetails
              formData={formData}
              handleChange={handleChange}
            />
            <Declaration
              formData={formData}
              handleChange={handleChange}
            />
            <ApprovalSection
              formData={formData}
              handleChange={handleChange}
            />
            <Belongings
              formData={formData}
              handleChange={handleChange}
              handleBelongingsChange={handleBelongingsChange}
            />

            <div className="pt-6 border-t border-slate-100 flex items-center justify-end gap-4">

<button
  type="button"
  onClick={() => setFormData(initialFormData)}
  className="bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-lg"
>
  Clear
</button>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2.5 rounded-md font-bold text-white transition-all
                  ${isSubmitting
                    ? 'bg-blue-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-95 shadow-md'}`}
              >
                {isSubmitting ? 'Processing...' : 'Submit Request'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}