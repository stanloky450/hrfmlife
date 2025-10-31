// import mongoose, { Schema, Document } from 'mongoose';

// export interface IPost extends Document {
//   title: string;
//   content: string;
//   excerpt: string;
//   author: string;
//   category: 'announcement' | 'event' | 'testimony' | 'blog';
//   imageUrl?: string;
//   published: boolean;
//   featured: boolean;
//   eventDate?: Date;
//   eventLocation?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

// const PostSchema: Schema = new Schema(
//   {
//     title: {
//       type: String,
//       required: [true, 'Please provide a title'],
//       maxlength: [200, 'Title cannot be more than 200 characters'],
//     },
//     content: {
//       type: String,
//       required: [true, 'Please provide content'],
//     },
//     excerpt: {
//       type: String,
//       required: [true, 'Please provide an excerpt'],
//       maxlength: [300, 'Excerpt cannot be more than 300 characters'],
//     },
//     author: {
//       type: String,
//       required: [true, 'Please provide an author'],
//     },
//     category: {
//       type: String,
//       enum: ['announcement', 'event', 'testimony', 'blog'],
//       required: [true, 'Please provide a category'],
//     },
//     imageUrl: {
//       type: String,
//     },
//     published: {
//       type: Boolean,
//       default: false,
//     },
//     featured: {
//       type: Boolean,
//       default: false,
//     },
//     eventDate: {
//       type: Date,
//     },
//     eventLocation: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
