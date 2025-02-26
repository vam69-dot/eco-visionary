
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ESGSectionProps {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
}

const ESGSection = ({ id, title, description, icon, children }: ESGSectionProps) => {
  return (
    <section
      id={id}
      className="min-h-screen py-20 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            {icon}
          </div>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <Card className="p-8 glass card-hover">
          {children}
        </Card>
      </div>
    </section>
  );
};

export default ESGSection;
