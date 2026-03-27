'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
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
import Link from 'next/link';
import ClearButton from './Components/ClearButton';
import { Logout } from './Components/LogoutButton';
import { ViewHistory } from './Components/ViewHistory';
import { SubmitButton } from './Components/SubmiteButton';
import Header from './Components/Header';
import NMF_logo from '././../public/NMF_logo.png';



export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ...initialFormData,
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

  const handleLogout = () => {
    // 1. Remove the user from storage
    localStorage.removeItem('currentUser');

    // 2. Redirect to login page
    router.push('/login');
  };

  useLayoutEffect(() => {
    // 1. Check if a user is logged in
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!user) {
      // If no user, force them to login
      router.push('/login');
    } else {
      // 2. AUTO-FILL the form data
      setFormData(prev => ({
        ...prev,
        employeeName: user.name,
        employeeId: user.empId,
        department: user.dept,
        designation: user.desig,
        contactNumber: user.phone
      }));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 py-5 px-2 sm:px-2 flex items-center justify-center flex-wrap">
      <div className="max-w-6xl mx-auto bg-slate-100 shadow-2xl rounded-lg overflow-hidden ">

        {/* Header Decor */}
        <div className="h-0.5 bg-red-600" />

        <div className="p-2 py-8 md:p-8  md:px-15 ">
          <header className="text-center mb-10">
<Header />

            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              OFFICIAL DUTY FORM
            </h1>
            <p className="text-slate-900 mt-2">Field Visit & Permission Request</p>
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

            <hr className="border-t border-slate-300" />

            {/* Bottom */}
            <div className="pt-6 border-t border-slate-300 flex justify-between items-end gap-2">

              {/* Left Side: History & Logout (Stacked Up/Down) */}
              <div className="flex flex-col gap-2">
                <ViewHistory />
                <Logout handleLogout={handleLogout} />
              </div>

              {/* Right Side: Clear & Submit (Stacked Up/Down to save horizontal space) */}
              <div className=" flex flex-col sm:flex-col gap-2">
                <div className="">
                  <ClearButton onClear={() => setFormData(initialFormData)} />
                </div>

                <SubmitButton isSubmitting={isSubmitting} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}