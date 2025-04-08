"use client";
import { useEffect, useState } from "react";
import { getAllPost } from "@/actions/post";
import { useRouter } from "next/navigation";

export default function HomeDashboard() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getAllPost();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto w-full p-8 text-white">
      <>
        <div className="w-11/12 mx-auto bg-[#181818] rounded-3xl p-10 text-center mb-[25px]">
          <h1 className="text-6xl font-bold text-white mt-5 mb-5 w-3/4 mx-auto flex items-center justify-center">
            Job Synthesis
          </h1>
          <p className="text-xl text-white mb-7 w-3/4 mx-auto">
            It only takes one yes. So keep going until you get it.
          </p>
          <button
            className="bg-white text-black font-medium mb-5 py-2 px-6 rounded-full inline-flex items-center transition-transform transform hover:bg-gray-200 cursor-pointer"
            onClick={() => router.push("/Job")}
          >
            Submit New Job Application
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Dashboard stats section */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[25px] mb-[25px]">
          {/* Requests in Progress */}
          <div className="bg-[#181818] bg-opacity-90 rounded-3xl p-8">
            <h2 className="text-white text-xl font-medium mb-2">
              Job Applications
            </h2>
            <p className="text-5xl font-bold text-white mb-1">{jobs.length}</p>
            <p className="text-gray-400 mb-6">Sent</p>
            <button
              className="border-2 border-white text-white font-medium py-2 px-6 rounded-full inline-flex items-center cursor-pointer"
              onClick={() => router.push("/JobView")}
            >
              View Job Applications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Completed Requests */}
          <div className="bg-[#181818] bg-opacity-90 rounded-3xl p-8">
            <h2 className="text-white text-xl font-medium mb-2">
              Completed Requests
            </h2>
            <p className="text-5xl font-bold text-white mb-1">12</p>
            <p className="text-gray-400 mb-6">Resolved</p>
            <button className="border-2 border-white text-white font-medium py-2 px-6 rounded-full inline-flex items-center">
              Access Your Completed Data
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom row stats */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-[25px]">
          {/* Total Tasks */}
          <div className="bg-[#181818] bg-opacity-90 rounded-3xl p-8">
            <h2 className="text-white text-xl font-medium mb-2">Total Tasks</h2>
            <p className="text-5xl font-bold text-white mb-1">15</p>
            <p className="text-gray-400 mb-6">Requests Submitted</p>
            <button className="border-2 border-white text-white font-medium py-2 px-6 rounded-full inline-flex items-center">
              View History
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Bounties Paid */}
          <div className="bg-[#181818] bg-opacity-90 rounded-3xl p-8">
            <h2 className="text-white text-xl font-medium mb-2">
              Bounties Paid
            </h2>
            <p className="text-5xl font-bold text-white mb-1">$2,500</p>
            <p className="text-gray-400 mb-6">paid to contributors</p>
            <button className="border-2 border-white text-white font-medium py-2 px-6 rounded-full inline-flex items-center">
              Track Bounties
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    </div>
  );
}
