// import mongoose, { Schema, Document } from "mongoose";

// export interface IUser extends Document {
// 	email: string;
// 	password: string;
// 	name: string;
// 	role: "superuser" | "admin" | "editor";
// 	createdAt: Date;
// 	updatedAt: Date;
// }

// const UserSchema: Schema = new Schema(
// 	{
// 		email: {
// 			type: String,
// 			required: [true, "Please provide an email"],
// 			unique: true,
// 			lowercase: true,
// 		},
// 		password: {
// 			type: String,
// 			required: [true, "Please provide a password"],
// 		},
// 		name: {
// 			type: String,
// 			required: [true, "Please provide a name"],
// 		},
// 		role: {
// 			type: String,
// 			enum: ["superuser", "admin", "editor"],
// 			default: "editor",
// 		},
// 	},
// 	{
// 		timestamps: true,
// 	}
// );

// export default mongoose.models.User ||
// 	mongoose.model<IUser>("User", UserSchema);
