import Order from "../Components/Order";
import PlaceOrder from "../Components/PlaceOrder";

export default function Checkout() {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold text-gray-800 ml-120 p-8">
                    Order Confirmation
                </h2>
                <div className="grid grid-cols-2 h-screen  space-y-4 gap-6">
                    <div className="grid grid-row-2 space-y-4 ml-10 ">
                        <div className="  h-fit  my-2 rounded-xl ">
                            <PlaceOrder />
                        </div>
                        <div className="border bg-gray-300 rounded-xl">B</div>
                    </div>
                    <div className="bg-gray-300 w-100 h-fit ml-35 rounded-xl my-2 border-2" >
                        <Order />
                    </div>

                </div>
            </div>
        </>
    );
}