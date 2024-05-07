import app from "@/config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const auth = getAuth(app);
  const router = useRouter();
  const signout = () => {
    auth.signOut();
    router.replace("/signin");
  };

  return (
    <section className="flex items-center justify-center w-screen border-b-2 border-solid border-gray-400">
      <div className="flex items-center justify-between py-3.5 px-3 lg:px-6 w-full max-w-7xl">
        <div className="text-2xl  text-white  pb-2">
          <i className="mr-2">Lo</i>
          <span className="bg-[#00B2FF] font-bold text-white px-2 py-1">
            GO
          </span>
        </div>

        <div>
          <ul>
            <button className="text-xl tracking-wider font-semibold cursor-pointer hover:underline text-[#00B2FF]" onClick={signout}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
