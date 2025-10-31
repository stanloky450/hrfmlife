// import mongoose, { Schema, Document } from 'mongoose';

// export interface IPrayerRequest extends Document {
//   name: string;
//   email?: string;
//   phone?: string;
//   message: string;
//   status: 'pending' | 'praying' | 'answered';
//   isPrivate: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

// const PrayerRequestSchema: Schema = new Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Please provide your name'],
//     },
//     email: {
//       type: String,
//     },
//     phone: {
//       type: String,
//     },
//     message: {
//       type: String,
//       required: [true, 'Please provide your prayer request'],
//     },
//     status: {
//       type: String,
//       enum: ['pending', 'praying', 'answered'],
//       default: 'pending',
//     },
//     isPrivate: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.models.PrayerRequest || mongoose.model<IPrayerRequest>('PrayerRequest', PrayerRequestSchema);
