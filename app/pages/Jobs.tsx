// // app/pages/Jobs.tsx
// import React from "react";
// import { connectToDatabase } from "@/app/Lib/mongodb";
// import Job from "@/app/models/Job";

// export default async function Jobs() {
//   await connectToDatabase();
//   const jobs = await Job.find().sort({ date_posted: -1 }).limit(20).lean();

//   return (
//     <div>
//       <main className="max-w-4xl mx-auto p-6">
//         <h1 className="text-3xl font-bold mb-6">Latest Frontend Jobs</h1>
//         <div className="space-y-4">
//           {jobs.map((job: any) => (
//             <div key={job._id} className="border p-4 rounded-lg hover:shadow-md">
//               <h2 className="text-xl font-semibold">{job.title}</h2>
//               <p className="text-gray-600">
//                 {job.company} — {job.location}
//               </p>
//               <a
//                 href={job.apply_url}
//                 target="_blank"
//                 className="text-blue-600 mt-2 inline-block"
//               >
//                 Apply
//               </a>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
