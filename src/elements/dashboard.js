import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  if (loading) return <h1>loading...</h1>;
  if (!user) route.push("/conponents/Login.js");
  if (user)
    return (
      <div style={{marginTop: "100px"}}>
        <h1>Welcome, {user.displayName} </h1>
        <button onClick={() => auth.signOut()}>sign out</button>
      </div>
    );
}
