// import Container from "@/src/components/ui/Container";
// import FXErrorBoundary from "@/src/components/ui/FXErrorBoundary";
// import Sidebar from "@/src/components/ui/Sidebar";
// import { ReactNode, Suspense } from "react";

// const layout = ({ children }: { children: ReactNode }) => {
//   return (
//     <Container>
//       <main className="grid grid-cols-4 gap-12">
//         <div className="col-span-4 md:col-span-1">
//           <FXErrorBoundary
//             fallback={
//               <p className="text-danger-500 h-96 w-full">Error Boundary...</p>
//             }
//           >
//             <Suspense
//               fallback={
//                 <p className="text-danger-500 h-96 w-full">
//                   Suspense Loading...
//                 </p>
//               }
//             >
//               <Sidebar />
//             </Suspense>
//           </FXErrorBoundary>
//         </div>

//         <div className="col-span-4 md:col-span-3 rounded-lg p-3 bg-gradient-to-t to-default-100 from-transparent">
//           {children}
//         </div>
//       </main>
//     </Container>
//   );
// };

// export default layout;

import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
