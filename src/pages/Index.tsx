
import { Globe, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ESGSection from "@/components/ESGSection";
import { LampContainer } from "@/components/ui/lamp";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-foreground to-muted-foreground py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            AI-Powered ESG Solutions
            <br />
            <span className="text-2xl md:text-4xl font-normal mt-4 block text-muted-foreground">
              Transforming environmental, social, and governance initiatives
            </span>
          </motion.h1>
        </LampContainer>
      </section>

      {/* ESG Sections */}
      <ESGSection
        id="environmental"
        title="Environmental Impact"
        description="Leveraging AI to monitor and optimize environmental performance"
        icon={<Globe className="w-8 h-8 text-primary" />}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Carbon Tracking</h3>
            <p className="text-muted-foreground">Real-time monitoring of carbon emissions and environmental impact.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Resource Optimization</h3>
            <p className="text-muted-foreground">AI-driven suggestions for efficient resource utilization.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Sustainability Metrics</h3>
            <p className="text-muted-foreground">Comprehensive analysis of sustainability initiatives and outcomes.</p>
          </div>
        </div>
      </ESGSection>

      <ESGSection
        id="social"
        title="Social Responsibility"
        description="Enhancing social impact through AI-driven insights"
        icon={<Users className="w-8 h-8 text-primary" />}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Community Engagement</h3>
            <p className="text-muted-foreground">AI-powered analysis of community initiatives and their impact.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Diversity & Inclusion</h3>
            <p className="text-muted-foreground">Data-driven insights for improving workplace diversity.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Employee Wellbeing</h3>
            <p className="text-muted-foreground">Monitoring and enhancing employee satisfaction and growth.</p>
          </div>
        </div>
      </ESGSection>

      <ESGSection
        id="governance"
        title="Governance Transparency"
        description="Ensuring compliance and transparency through AI"
        icon={<Shield className="w-8 h-8 text-primary" />}
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Risk Management</h3>
            <p className="text-muted-foreground">AI-powered risk assessment and mitigation strategies.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Compliance Monitoring</h3>
            <p className="text-muted-foreground">Automated compliance tracking and reporting systems.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ethical Framework</h3>
            <p className="text-muted-foreground">Development and monitoring of ethical business practices.</p>
          </div>
        </div>
      </ESGSection>
    </div>
  );
};

export default Index;
