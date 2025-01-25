// export default function CheckoutError() {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         <h2 className="text-xl text-red-500">Something went wrong...</h2>
//       </div>
//     );
//   }
  
  import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function CheckoutError() {
  return (
    <div className="h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <AlertTriangle className="text-red-500 w-16 h-16 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Payment Failed!
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Something went wrong with your payment. Please try again or contact support.
        </p>
        <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 rounded-md">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
