
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Smartphone, Tablet, Laptop, HeadsetIcon, Home } from "lucide-react";
import { motion } from "framer-motion";

const ListItem = ({
  className,
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  title: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-primary p-1.5 text-white"
          >
            <Smartphone size={20} />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-primary"
          >
            ГаджетХаб
          </motion.span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                )}>
                  <Home size={18} />
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Устройства</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/#smartphones"
                    title="Смартфоны"
                  >
                    Самые популярные и новейшие модели смартфонов с детальными характеристиками.
                  </ListItem>
                  <ListItem
                    href="/#tablets"
                    title="Планшеты"
                  >
                    Широкий выбор планшетов для работы и развлечений с подробными спецификациями.
                  </ListItem>
                  <ListItem
                    href="/#laptops"
                    title="Ноутбуки"
                  >
                    Мощные и компактные ноутбуки для любых задач от ведущих производителей.
                  </ListItem>
                  <ListItem
                    href="/#compare"
                    title="Сравнение устройств"
                  >
                    Удобное сравнение характеристик всех типов устройств.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/support">
                <NavigationMenuLink className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                )}>
                  <HeadsetIcon size={18} />
                  Поддержка
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
