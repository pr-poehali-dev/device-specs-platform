
import { useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import CategoriesContainer from '@/components/CategoriesContainer';
import { smartphonesData, tabletsData, laptopsData } from '@/data/devicesData';

const Index = () => {
  const smartphonesRef = useRef<HTMLDivElement>(null);
  
  const scrollToSmartphones = () => {
    smartphonesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    {
      id: "smartphones",
      title: "Смартфоны",
      description: "Самые современные смартфоны с передовыми характеристиками. Сравните процессоры, камеры, дисплеи и другие параметры.",
      icon: "📱",
      devices: smartphonesData
    },
    {
      id: "tablets",
      title: "Планшеты",
      description: "Планшеты для работы и развлечений с большими экранами и высокой производительностью.",
      icon: "🔲",
      devices: tabletsData
    },
    {
      id: "laptops",
      title: "Ноутбуки",
      description: "Мощные ноутбуки для любых задач: от офисной работы до профессионального видеомонтажа и игр.",
      icon: "💻",
      devices: laptopsData
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onScrollDown={scrollToSmartphones} />
      
      {/* Categories Section */}
      <div ref={smartphonesRef}>
        <CategoriesContainer categories={categories} />
      </div>
    </main>
  );
};

export default Index;
