
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const { toast } = useToast();

  const handleGreet = () => {
    if (!name.trim()) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      });
      return;
    }
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="flex flex-col items-center space-y-6 max-w-md mx-auto p-6">
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full text-lg"
        onKeyPress={(e) => {
          if (e.key === "Enter") handleGreet();
        }}
      />
      <Button 
        onClick={handleGreet}
        className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] transition-all duration-300"
      >
        Greet Me!
      </Button>
      {greeting && (
        <div 
          className="text-2xl font-semibold text-gray-800 animate-fade-in mt-8"
          style={{
            animation: "fadeIn 0.5s ease-in"
          }}
        >
          {greeting}
        </div>
      )}
    </div>
  );
};

export default GreetingForm;
