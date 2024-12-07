import Navbar from "@/src/components/ui/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main>{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        Footer
      </footer>
    </div>
  );
};

export default layout;
