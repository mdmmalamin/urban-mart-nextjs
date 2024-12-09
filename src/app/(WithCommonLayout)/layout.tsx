import Footer from "@/src/components/ui/Footer";
import Navbar from "@/src/components/ui/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default layout;
