import { signInWithEmailAndPassword } from "firebase/auth";
 
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { auth } from "../auth.";

const DemoLogin = () => {
 const navigate=useNavigate()
  const handleDemoLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(
       auth ,
        "gaurav231@gmail.com",
        "Gauravgaurav12"
      );

      toast("Demo User Logged In:", result.user);
        navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      onClick={handleDemoLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Demo Login
    </button>
  );
};

export default DemoLogin;