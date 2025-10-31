import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PrayerRequest from '@/models/PrayerRequest';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

// GET single prayer request
export async function GET(request: NextRequest, context: RouteParams) {
  try {
    await dbConnect();
    const { id } = await context.params;

    const prayerRequest = await PrayerRequest.findById(id);

    if (!prayerRequest) {
      return NextResponse.json(
        { success: false, error: 'Prayer request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: prayerRequest });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// PUT update prayer request
export async function PUT(request: NextRequest, context: RouteParams) {
  try {
    await dbConnect();
    const { id } = await context.params;
    const body = await request.json();

    const prayerRequest = await PrayerRequest.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!prayerRequest) {
      return NextResponse.json(
        { success: false, error: 'Prayer request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: prayerRequest });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE prayer request
export async function DELETE(request: NextRequest, context: RouteParams) {
  try {
    await dbConnect();
    const { id } = await context.params;

    const prayerRequest = await PrayerRequest.findByIdAndDelete(id);

    if (!prayerRequest) {
      return NextResponse.json(
        { success: false, error: 'Prayer request not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
