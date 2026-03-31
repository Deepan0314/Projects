import { Link } from "react-router-dom";
import  Button  from "../Components/Button"

export default function CTA() {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">
        Hungry? Order Now!
      </h3>
      <Button className="bg-yellow-500  hover:bg-yellow-400 cursor-pointer text-black px-6 py-3 rounded">
       <Link to="/menu"> View Menu </Link>
      </Button>
    </div>
  );
}