import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Post from '@/models/Post';

export const runtime = 'nodejs';

// GET all posts
export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const featured = searchParams.get('featured');
    const limit = parseInt(searchParams.get('limit') || '10');

    const query: any = {};
    if (category) query.category = category;
    if (published !== null) query.published = published === 'true';
    if (featured !== null) query.featured = featured === 'true';

    const posts = await Post.find(query)
      .sort({ createdAt: -1 })
      .limit(limit);

    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// POST create new post
export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const post = await Post.create(body);

    return NextResponse.json({ success: true, data: post }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
