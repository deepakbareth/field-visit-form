'use client';

export default function EmployeesPage() {
  const employees = [
    { id: "EMP101", name: "Deepak" },
    { id: "EMP102", name: "Rahul" },
    { id: "EMP103", name: "Amit" },
    { id: "EMP104", name: "Priya" },
    { id: "EMP105", name: "Neha" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-2xl font-bold mb-6">
        Employee List
      </h1>

      <div className="bg-white rounded-xl shadow p-4 space-y-3">

        {employees.map((emp) => (
          <div
            key={emp.id}
            className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
          >
            <span className="font-medium text-slate-800">
              {emp.name}
            </span>

            <span className="text-sm text-slate-500">
              {emp.id}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}