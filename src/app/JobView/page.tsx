"use client";
import { getAllPost } from "@/actions/post";
import { useEffect, useState } from "react";

// Define the type for a job object
interface Job {
  id: string;
  job_title: string;
  company_name: string;
  location: string;
  applied_date: string;
  application_url: string;
  salary: string;
}

export default function JobView() {
  const [jobs, setJobs] = useState<Job[]>([]); // Explicitly type the state

  useEffect(() => {
    const fetchJobs = async () => {
      const data: Job[] = await getAllPost(); // Ensure the data matches the Job type
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <div className="text-white">
      <h1 className="text-7xl mb-8">Job Listings</h1>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="p-4 border border-gray-700 rounded-lg bg-gray-800"
          >
            <h2 className="text-2xl font-bold">{job.job_title}</h2>
            <p>Company: {job.company_name}</p>
            <p>Location: {job.location}</p>
            <p>Applied Date: {job.applied_date}</p>
            <p>
              Application URL:{" "}
              <a
                href={job.application_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                {job.application_url}
              </a>
            </p>
            <p>Salary: {job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
