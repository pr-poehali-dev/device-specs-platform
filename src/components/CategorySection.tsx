
import { motion } from "framer-motion";
import DeviceCard, { DeviceProps } from "./DeviceCard";

interface CategorySectionProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  devices: DeviceProps[];
}

const CategorySection = ({ id, title, description, icon, devices }: CategorySectionProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id={id} className="py-12">
      <div className="container px-4 mx-auto">
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-2"
          >
            <span className="text-3xl">{icon}</span>
            <h2 className="text-3xl font-bold">{title}</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl"
          >
            {description}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {devices.map((device) => (
            <motion.div key={device.id} variants={item}>
              <DeviceCard device={device} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
