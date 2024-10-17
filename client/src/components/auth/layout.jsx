import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left section with background image */}
      <div
        className="hidden lg:flex items-center justify-center w-1/2 px-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/elegant-glamor-woman-fashion-suit-posing-colorful-blue-background_729149-84201.jpg')", // Replace with your image URL
        }}
      >
      </div>
      {/* Right section for the form */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;




