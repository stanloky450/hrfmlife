// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import PrayerRequest from '@/models/PrayerRequest';

// export const runtime = 'nodejs';

// // GET all prayer requests
// export async function GET(request: NextRequest) {
//   try {
//     await dbConnect();

//     const { searchParams } = new URL(request.url);
//     const status = searchParams.get('status');
//     const limit = parseInt(searchParams.get('limit') || '50');

//     const query: any = {};
//     if (status) query.status = status;

//     const requests = await PrayerRequest.find(query)
//       .sort({ createdAt: -1 })
//       .limit(limit);

//     return NextResponse.json({ success: true, data: requests });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }

// // POST create prayer request
// export async function POST(request: NextRequest) {
//   try {
//     await dbConnect();

//     const body = await request.json();
//     const prayerRequest = await PrayerRequest.create(body);

//     return NextResponse.json(
//       { success: true, data: prayerRequest },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }
