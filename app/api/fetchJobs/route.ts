// app/api/fetchJobs/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Remove "what=frontend developer" to fetch all jobs
    const res = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${process.env.ADZUNA_APP_ID}&app_key=${process.env.ADZUNA_APP_KEY}&results_per_page=50`
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    const data = await res.json();
    return NextResponse.json(data); // data.results has all jobs
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
