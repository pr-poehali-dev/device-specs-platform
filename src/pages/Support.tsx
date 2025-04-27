
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Support = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Здравствуйте! Чем я могу вам помочь сегодня?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages([...messages, userMsg]);
    setNewMessage("");
    
    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponses = [
        "Спасибо за ваш вопрос! Наши специалисты изучают его и скоро ответят.",
        "Я понимаю вашу проблему. Давайте попробуем решить её вместе.",
        "Хороший вопрос! Рекомендую посмотреть раздел с характеристиками устройства.",
        "Могу предложить сравнить несколько моделей, чтобы сделать выбор проще."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date()
      };
      
      setMessages(msgs => [...msgs, botMsg]);
    }, 1000);
  };

  const submitQuestion = () => {
    if (!name || !email || !question) return;
    
    // In a real app, this would submit to backend
    alert(`Спасибо за ваш вопрос, ${name}! Мы ответим на ${email} в течение 24 часов.`);
    
    setName("");
    setEmail("");
    setQuestion("");
  };

  return (
    <main className="container py-12 px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-bold mb-4">Поддержка пользователей</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Получите быструю помощь от наших специалистов. Воспользуйтесь чатом для мгновенных ответов или оставьте заявку через форму.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="chat" className="mb-10">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="chat">Онлайн чат</TabsTrigger>
            <TabsTrigger value="form">Форма обращения</TabsTrigger>
          </TabsList>
          
          <TabsContent value="chat" className="mt-6">
            <Card className="border rounded-xl shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-col h-[500px]">
                  <div className="flex-1 overflow-y-auto mb-4 p-2">
                    {messages.map((msg) => (
                      <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {msg.sender === 'bot' && (
                          <Avatar className="mr-2 mt-0.5">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              <Bot size={16} />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div 
                          className={`rounded-lg py-2 px-3 max-w-[80%] ${
                            msg.sender === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted'
                          }`}
                        >
                          <p>{msg.content}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                          </p>
                        </div>
                        
                        {msg.sender === 'user' && (
                          <Avatar className="ml-2 mt-0.5">
                            <AvatarFallback className="bg-secondary">
                              <User size={16} />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="Введите сообщение..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} type="button">
                      <Send size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="form" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Электронная почта
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.ru"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="question" className="text-sm font-medium">
                      Ваш вопрос
                    </label>
                    <Textarea
                      id="question"
                      placeholder="Опишите подробно ваш вопрос или проблему..."
                      rows={6}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    onClick={submitQuestion} 
                    type="button" 
                    className="w-full"
                  >
                    Отправить запрос <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-between mt-10"
        >
          <div className="flex-1 rounded-lg border p-6 bg-card">
            <h3 className="text-xl font-semibold mb-3">Часто задаваемые вопросы</h3>
            <ul className="space-y-3">
              <li className="relative text-sm">
                <a href="#" className="story-link font-medium text-foreground hover:text-primary transition-colors">
                  Как сравнить характеристики разных устройств?
                </a>
              </li>
              <li className="relative text-sm">
                <a href="#" className="story-link font-medium text-foreground hover:text-primary transition-colors">
                  Где найти информацию о новинках?
                </a>
              </li>
              <li className="relative text-sm">
                <a href="#" className="story-link font-medium text-foreground hover:text-primary transition-colors">
                  Как часто обновляется информация?
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 rounded-lg border p-6 bg-card">
            <h3 className="text-xl font-semibold mb-3">Контактная информация</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Если вам нужна дополнительная помощь, вы можете связаться с нами:
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span> 
                <a href="mailto:support@gadgethub.ru" className="text-primary">
                  support@gadgethub.ru
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Телефон:</span> 
                <a href="tel:+78001234567" className="text-primary">
                  8 (800) 123-45-67
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Время работы:</span> 
                <span>Пн-Пт, 9:00-18:00</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Support;
