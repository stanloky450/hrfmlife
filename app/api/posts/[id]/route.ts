// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import Post from '@/models/Post';

// export const runtime = 'nodejs';

// interface RouteParams {
//   params: Promise<{
//     id: string;
//   }>;
// }

// // GET single post
// export async function GET(request: NextRequest, context: RouteParams) {
//   try {
//     await dbConnect();
//     const { id } = await context.params;

//     const post = await Post.findById(id);

//     if (!post) {
//       return NextResponse.json(
//         { success: false, error: 'Post not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: post });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }

// // PUT update post
// export async function PUT(request: NextRequest, context: RouteParams) {
//   try {
//     await dbConnect();
//     const { id } = await context.params;
//     const body = await request.json();

//     const post = await Post.findByIdAndUpdate(id, body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!post) {
//       return NextResponse.json(
//         { success: false, error: 'Post not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: post });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }

// // DELETE post
// export async function DELETE(request: NextRequest, context: RouteParams) {
//   try {
//     await dbConnect();
//     const { id } = await context.params;

//     const post = await Post.findByIdAndDelete(id);

//     if (!post) {
//       return NextResponse.json(
//         { success: false, error: 'Post not found' },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, data: {} });
//   } catch (error: any) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 400 }
//     );
//   }
// }
