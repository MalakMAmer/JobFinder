// import { NextResponse } from "next/server";
// import axios from "axios";
// import crypto from "crypto";
// import { connectToDatabase } from "@/lib/mongodb";
// import Job from "@/models/Job";

// export async function GET() {
//   await connectToDatabase();

//   // Example using JSearch (RapidAPI)
//   const options = {
//     method: "GET",
//     url: "https://jsearch.p.rapidapi.com/search",
//     params: {
//       query: "frontend developer",
//       num_pages: "1",
//       page: "1",
//     },
//     headers: {
//       "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
//       "x-rapidapi-host": "jsearch.p.rapidapi.com",
//     },
//   };

//   try {
//     const { data } = await axios.request(options);
//     const jobs = data.data || [];

//     const docs = jobs.map((j: any) => {
//       const title = j.job_title || "";
//       const company = j.employer_name || "";
//       const location = j.job_city || "";
//       const fingerprint = crypto.createHash("sha256")
//         .update(title + company + location)
//         .digest("hex");

//       return {
//         source: "jsearch",
//         source_id: j.job_id,
//         title,
//         company,
//         location,
//         date_posted: new Date(j.job_posted_at_datetime_utc),
//         apply_url: j.job_apply_link,
//         description_text: j.job_description,
//         fingerprint,
//       };
//     });

//     const ops = docs.map((job: any) => ({
//       updateOne: {
//         filter: { fingerprint: job.fingerprint },
//         update: { $setOnInsert: job, $set: { fetched_at: new Date() } },
//         upsert: true,
//       },
//     }));

//     const result = await Job.bulkWrite(ops);
//     return NextResponse.json({ ok: true, inserted: result.upsertedCount });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
