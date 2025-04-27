
import { ReactNode } from 'react';
import CategorySection from './CategorySection';
import { DeviceProps } from './DeviceCard';

interface CategoryData {
  id: string;
  title: string;
  description: string;
  icon: string;
  devices: DeviceProps[];
}

interface CategoriesContainerProps {
  categories: CategoryData[];
  children?: ReactNode;
}

const CategoriesContainer = ({ categories, children }: CategoriesContainerProps) => {
  return (
    <div className="bg-background">
      {children}
      {categories.map(category => (
        <CategorySection 
          key={category.id}
          id={category.id}
          title={category.title} 
          description={category.description}
          icon={category.icon}
          devices={category.devices}
        />
      ))}
    </div>
  );
};

export default CategoriesContainer;
