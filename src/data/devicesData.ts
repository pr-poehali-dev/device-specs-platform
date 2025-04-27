
import { DeviceProps } from "@/components/DeviceCard";

export const smartphonesData: DeviceProps[] = [
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

export const tabletsData: DeviceProps[] = [
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

export const laptopsData: DeviceProps[] = [
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
