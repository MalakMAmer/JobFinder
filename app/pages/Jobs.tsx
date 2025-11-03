// app/pages/Jobs.tsx
import React from "react";

export default async function Jobs() {
  const res = await fetch("http://localhost:3000/api/fetchJobs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();
  const jobs = data.results || [];  // <--- Adzuna puts jobs inside "results"

  return (
    <div>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Frontend Jobs</h1>
        <div className="space-y-4">
          {jobs.length > 0 ? (
            jobs.map((job: any) => (
              <div
                key={job.id}
                className="border p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">
                  {job.company?.display_name || "Unknown Company"} —{" "}
                  {job.location?.display_name || "Location not specified"}
                </p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {job.description}
                </p>
                <a
                  href={job.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium mt-2 inline-block"
                >
                  Apply
                </a>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </main>
    </div>
  );
}
