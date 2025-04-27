
import { motion } from "framer-motion";
import { Smartphone, Tablet, Laptop, ChevronDown } from "lucide-react";
import CategorySection from "@/components/CategorySection";

const smartphonesData = [
  {
    id: "sm1",
    name: "iPhone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484426d5?q=80&w=2070&auto=format&fit=crop",
    type: "smartphone",
    price: "119 990 ₽",
    rating: 5,
    isNew: true,
    specs: {
      processor: "A17 Pro",
      memory: "8 ГБ",
      display: "6.7\", OLED, 120 Гц",
      battery: "4422 мАч",
      camera: "48 МП + 12 МП + 12 МП",
      os: "iOS 17",
      storage: "256 ГБ"
    }
  },
  {
    id: "sm2",
    name: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1707808612104-7cbdd569f25e?q=80&w=1887&auto=format&fit=crop",
    type: "smartphone",
    price: "109 990 ₽",
    rating: 5,
    isNew: true,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      memory: "12 ГБ",
      display: "6.8\", AMOLED, 120 Гц",
      battery: "5000 мАч",
      camera: "200 МП + 50 МП + 12 МП + 10 МП",
      os: "Android 14",
      storage: "512 ГБ"
    }
  },
  {
    id: "sm3",
    name: "Xiaomi 14 Ultra",
    image: "https://images.unsplash.com/photo-1611740677496-3e0ef378e189?q=80&w=2070&auto=format&fit=crop",
    type: "smartphone",
    price: "74 990 ₽",
    rating: 4,
    specs: {
      processor: "Snapdragon 8 Gen 3",
      memory: "16 ГБ",
      display: "6.73\", AMOLED, 120 Гц",
      battery: "5300 мАч",
      camera: "50 МП + 50 МП + 50 МП + 50 МП",
      os: "Android 14",
      storage: "512 ГБ"
    }
  }
];

const tabletsData = [
  {
    id: "tb1",
    name: "iPad Pro M3",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    type: "tablet",
    price: "109 990 ₽",
    rating: 5,
    isNew: true,
    specs: {
      processor: "Apple M3",
      memory: "16 ГБ",
      display: "12.9\", mini-LED, 120 Гц",
      battery: "10758 мАч",
      camera: "12 МП + 10 МП",
      os: "iPadOS 17",
      storage: "1 ТБ"
    }
  },
  {
    id: "tb2",
    name: "Samsung Galaxy Tab S9 Ultra",
    image: "https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=2070&auto=format&fit=crop",
    type: "tablet",
    price: "89 990 ₽",
    rating: 4,
    specs: {
      processor: "Snapdragon 8 Gen 2",
      memory: "12 ГБ",
      display: "14.6\", AMOLED, 120 Гц",
      battery: "11200 мАч",
      camera: "13 МП + 8 МП",
      os: "Android 13",
      storage: "512 ГБ"
    }
  },
  {
    id: "tb3",
    name: "Xiaomi Pad 6 Pro",
    image: "https://images.unsplash.com/photo-1585770536735-27993a080595?q=80&w=1887&auto=format&fit=crop",
    type: "tablet",
    price: "44 990 ₽",
    rating: 4,
    specs: {
      processor: "Snapdragon 8+ Gen 1",
      memory: "8 ГБ",
      display: "11\", IPS, 144 Гц",
      battery: "8600 мАч",
      camera: "13 МП",
      os: "Android 13",
      storage: "256 ГБ"
    }
  }
];

const laptopsData = [
  {
    id: "lp1",
    name: "MacBook Pro 16 M3 Max",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2070&auto=format&fit=crop",
    type: "laptop",
    price: "359 990 ₽",
    rating: 5,
    isNew: true,
    specs: {
      processor: "Apple M3 Max 16-ядер",
      memory: "64 ГБ",
      display: "16.2\", Liquid Retina XDR, 120 Гц",
      battery: "100 Вт⋅ч",
      storage: "2 ТБ SSD"
    }
  },
  {
    id: "lp2",
    name: "ASUS ROG Zephyrus G16",
    image: "https://images.unsplash.com/photo-1605134513573-384dcf99a44c?q=80&w=2069&auto=format&fit=crop",
    type: "laptop",
    price: "184 990 ₽",
    rating: 4,
    specs: {
      processor: "Intel Core i9-14900H",
      memory: "32 ГБ DDR5",
      display: "16\", IPS, 240 Гц",
      battery: "90 Вт⋅ч",
      storage: "1 ТБ SSD"
    }
  },
  {
    id: "lp3",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    type: "laptop",
    price: "199 990 ₽",
    rating: 4,
    specs: {
      processor: "Intel Core i7-1365U",
      memory: "32 ГБ LPDDR5",
      display: "14\", OLED, 60 Гц",
      battery: "57 Вт⋅ч",
      storage: "1 ТБ SSD"
    }
  }
];

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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
        </div>
        
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
            <a href="#smartphones" className="flex flex-col items-center text-sm text-muted-foreground hover:text-primary transition">
              <span>Прокрутите вниз</span>
              <ChevronDown size={20} className="mt-1" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Category Sections */}
      <CategorySection 
        id="smartphones"
        title="Смартфоны" 
        description="Самые современные смартфоны с передовыми характеристиками. Сравните процессоры, камеры, дисплеи и другие параметры."
        icon="📱"
        devices={smartphonesData}
      />
      
      <CategorySection 
        id="tablets"
        title="Планшеты" 
        description="Планшеты для работы и развлечений с большими экранами и высокой производительностью."
        icon="🔲"
        devices={tabletsData}
      />
      
      <CategorySection 
        id="laptops"
        title="Ноутбуки" 
        description="Мощные ноутбуки для любых задач: от офисной работы до профессионального видеомонтажа и игр."
        icon="💻"
        devices={laptopsData}
      />
    </main>
  );
};

export default Index;
