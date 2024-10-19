import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main className="flex items-start bg-gray-100 ">
      <Sidebar />

      <div className="px-8 py-4 w-full overflow-x-hidden">
        <Navbar />

        <section className="text-slate-900 py-6">{children}</section>
      </div>
    </main>
  );
};

export default Layout;
