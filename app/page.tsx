import MainLayout from "@/layout/main/Index";

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Welcome to Divenza
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for complete IT solutions and digital services.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
