// import { Button } from "@/components/ui/button";
// import { CheckCheck } from "lucide-react";
// import Link from "next/link";

// export default function CheckoutSuccess() {
//   return (
//     <div className="h-screen bg-purple-200">
//       <div className="mt-32 md:max-w-[50vw] mx-auto">
//         <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
//         <div className="text-center">
//           <h3 className="md:text-2xl text-base text-black font-semibold">
//             Payment Done!
//           </h3>
//           <p className="text-black my-2">
//             Thank you for your purchase. We hope you enjoy it!
//           </p>
//           <Button asChild className="mt-5">
//             <Link href="/">Go back</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <div className="h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <CheckCheck className="text-yellow-500 w-16 h-16 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Payment Successful!
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your purchase. We hope you enjoy your order!
        </p>
        <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 rounded-md">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
