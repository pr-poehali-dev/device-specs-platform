
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export interface DeviceProps {
  id: string;
  name: string;
  image: string;
  type: "smartphone" | "tablet" | "laptop";
  price: string;
  rating: number;
  specs: {
    processor: string;
    memory: string;
    display: string;
    battery?: string;
    camera?: string;
    os?: string;
    storage?: string;
  };
  isNew?: boolean;
}

const DeviceCard = ({ device }: { device: DeviceProps }) => {
  const [showSpecs, setShowSpecs] = useState(false);
  
  const getDeviceIcon = () => {
    switch(device.type) {
      case "smartphone": return "📱";
      case "tablet": return "🔲";
      case "laptop": return "💻";
      default: return "📱";
    }
  };

  return (
    <Card className="device-card-hover overflow-hidden h-full flex flex-col">
      <CardHeader className="relative p-0">
        <div className="h-48 w-full overflow-hidden bg-accent/30">
          <img 
            src={device.image} 
            alt={device.name} 
            className="w-full h-full object-contain p-4"
          />
        </div>
        {device.isNew && (
          <Badge className="absolute top-2 right-2 bg-primary pulse-glow">
            Новинка
          </Badge>
        )}
      </CardHeader>
      <CardContent className="pt-4 flex-grow">
        <CardTitle className="text-lg mb-1 line-clamp-2">{device.name}</CardTitle>
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm">{getDeviceIcon()} {device.type === "smartphone" ? "Смартфон" : device.type === "tablet" ? "Планшет" : "Ноутбук"}</span>
          <div className="flex ml-auto">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-sm ${i < device.rating ? "text-amber-500" : "text-gray-300"}`}>
                ★
              </span>
            ))}
          </div>
        </div>
        <CardDescription className="text-lg font-semibold text-primary">
          {device.price}
        </CardDescription>
        
        {showSpecs && (
          <div className="mt-3 space-y-1.5 text-sm">
            <p><span className="font-medium">Процессор:</span> {device.specs.processor}</p>
            <p><span className="font-medium">Память:</span> {device.specs.memory}</p>
            <p><span className="font-medium">Дисплей:</span> {device.specs.display}</p>
            {device.specs.battery && (
              <p><span className="font-medium">Батарея:</span> {device.specs.battery}</p>
            )}
            {device.specs.camera && (
              <p><span className="font-medium">Камера:</span> {device.specs.camera}</p>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2 pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1"
          onClick={() => setShowSpecs(!showSpecs)}
        >
          {showSpecs ? "Скрыть" : "Характеристики"}
        </Button>
        <Button size="sm" className="flex-1">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default DeviceCard;
