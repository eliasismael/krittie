const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 w-full ">
      <div className="container mx-auto text-center">
        <p className="mt-2">© {new Date().getFullYear()} Krittie</p>
        <p className="text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
