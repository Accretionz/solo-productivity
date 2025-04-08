"use client";
import { createPost } from "@/actions/post";
import { useActionState } from "react";

export default function Job() {
  const initialState = {
    formFields: {
      job_title: "",
      company_name: "",
      location: "",
      applied_date: "",
      application_url: "",
      salary: "",
    },
    error: "",
  };

  const [state, formAction, ispending] = useActionState(
    createPost,
    initialState
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-lg bg-gray-800 shadow-2xl rounded-lg p-6 overflow-y-auto h-full max-h-screen">
        <h1 className="text-3xl font-extrabold text-center text-white mb-6">
          Create Job
        </h1>

        <form action={formAction} className="space-y-4">
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Job Title
            </span>
            <input
              type="text"
              placeholder="Enter job title"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="job_title"
              required
            />
          </label>
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Company
            </span>
            <input
              type="text"
              placeholder="Enter company name"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="company_name"
              required
            />
          </label>
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Location
            </span>
            <input
              type="text"
              placeholder="Enter location"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="location"
              required
            />
          </label>
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Application URL
            </span>
            <input
              type="url"
              placeholder="Enter application URL"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="application_url"
              required
            />
          </label>
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Applied Date
            </span>
            <input
              type="date"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="applied_date"
              required
            />
          </label>
          <label className="block">
            <span className="block text-lg font-medium text-gray-300">
              Salary
            </span>
            <input
              type="number"
              placeholder="Enter salary"
              className="mt-2 block w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              name="salary"
              required
            />
          </label>

          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg shadow-md hover:shadow-lg transition duration-200 cursor-pointer"
            >
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
