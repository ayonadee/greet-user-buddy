
import GreetingForm from "@/components/GreetingForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f5f3ff]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome!</h1>
        <p className="text-gray-600">Enter your name and get a personal greeting</p>
      </div>
      <GreetingForm />
    </div>
  );
};

export default Index;
