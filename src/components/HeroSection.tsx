
import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?q=80&w=2071&auto=format&fit=crop" 
          alt="Гаджеты" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Все характеристики<br />
            <span className="text-primary">современных гаджетов</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground"
        >
          Подробный каталог смартфонов, планшетов и ноутбуков с детальными техническими характеристиками
        </motion.p>
        
        <CategoryButtons />
      </div>
      
      <ScrollDownIndicator onScrollDown={onScrollDown} />
    </section>
  );
};

const CategoryButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap justify-center gap-4"
    >
      <a href="#smartphones" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition">
        <Smartphone size={20} />
        Смартфоны
      </a>
      <a href="#tablets" className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg font-medium transition">
        <Tablet size={20} />
        Планшеты
      </a>
      <a href="#laptops" className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-lg font-medium transition">
        <Laptop size={20} />
        Ноутбуки
      </a>
    </motion.div>
  );
};

const ScrollDownIndicator = ({ onScrollDown }: { onScrollDown: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a 
          href="#smartphones" 
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition"
          onClick={(e) => {
            e.preventDefault();
            onScrollDown();
          }}
        >
          <span>Прокрутите вниз</span>
          <ChevronDown size={20} className="mt-1" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
