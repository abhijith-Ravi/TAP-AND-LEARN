import { auth } from "../../../../firebase/firebaseconfig";
import { signOut } from "firebase/auth";

export async function POST() {
  try {
    await signOut(auth);

    return Response.json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    });
  }
}
