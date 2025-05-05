
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, FileCheck, Key, Users, Coins, Check } from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Поиск недвижимости",
      description: "Определите критерии и начните поиск подходящих вариантов",
      icon: <Home className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>На этом этапе необходимо:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Определить район и бюджет</li>
            <li>Указать тип и площадь недвижимости</li>
            <li>Выбрать необходимые удобства</li>
            <li>Сформировать список из 3-5 объектов для просмотра</li>
          </ul>
          <p className="text-muted-foreground mt-4">Наши менеджеры подберут варианты, соответствующие вашим требованиям, и согласуют удобное время для просмотра.</p>
        </div>
      )
    },
    {
      id: 2,
      title: "Просмотр объектов",
      description: "Посетите выбранные объекты вместе с нашим агентом",
      icon: <Building className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Просмотр объектов включает в себя:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Встречу с агентом в назначенное время</li>
            <li>Осмотр квартиры/помещения и оценку состояния</li>
            <li>Проверку работоспособности коммуникаций</li>
            <li>Знакомство с инфраструктурой района</li>
            <li>Обсуждение условий аренды на месте</li>
          </ul>
          <p className="text-muted-foreground mt-4">После осмотра вы можете сразу принять решение или запросить дополнительную информацию.</p>
        </div>
      )
    },
    {
      id: 3,
      title: "Оформление документов",
      description: "Подготовка и подписание договора аренды",
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Необходимые документы для оформления:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Паспортные данные арендатора</li>
            <li>Договор аренды с указанием всех условий</li>
            <li>Акт приема-передачи имущества</li>
            <li>Опись имущества (при необходимости)</li>
            <li>Документы, подтверждающие права собственности арендодателя</li>
          </ul>
          <p className="text-muted-foreground mt-4">Наши юристы проверят документы и подготовят договор, защищающий интересы обеих сторон.</p>
        </div>
      )
    },
    {
      id: 4,
      title: "Заключение договора",
      description: "Согласование финальных условий и подписание договора",
      icon: <Key className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Этапы заключения договора:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Согласование условий с собственником</li>
            <li>Подписание договора обеими сторонами</li>
            <li>Внесение депозита и первой арендной платы</li>
            <li>Получение ключей от недвижимости</li>
          </ul>
          <p className="text-muted-foreground mt-4">Компания "Этажи" выступает гарантом безопасности сделки и обеспечивает юридическую чистоту.</p>
        </div>
      )
    },
    {
      id: 5,
      title: "Сопровождение",
      description: "Поддержка на протяжении всего срока аренды",
      icon: <Users className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Наше сопровождение включает:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Решение возникающих вопросов с арендодателем</li>
            <li>Помощь при возникновении споров</li>
            <li>Консультации по условиям договора</li>
            <li>Помощь при продлении или расторжении договора</li>
            <li>Юридическую поддержку в течение всего срока аренды</li>
          </ul>
          <p className="text-muted-foreground mt-4">Наши клиенты могут рассчитывать на профессиональную поддержку 24/7.</p>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Этажи</h1>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">О нас</Button>
            <Button variant="ghost">Услуги</Button>
            <Button variant="ghost">Контакты</Button>
            <Button>Заказать звонок</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Аренда недвижимости с ООО "Этажи"</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ваш надежный проводник в мире аренды недвижимости. Следуйте нашему пошаговому алгоритму для комфортного поиска и заключения сделки.
          </p>
        </div>

        <div className="mb-10">
          <div className="flex justify-between max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative flex flex-col items-center ${index < steps.length - 1 ? "after:content-[''] after:absolute after:top-5 after:w-full after:h-1 after:bg-gray-200 after:left-1/2" : ""}`}
              >
                <button
                  onClick={() => goToStep(index)}
                  className={`z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= index 
                      ? "bg-primary text-white" 
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {currentStep > index ? <Check className="h-5 w-5" /> : step.id}
                </button>
                <span className={`text-sm mt-2 font-medium ${
                  currentStep >= index ? "text-primary" : "text-gray-500"
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader className="flex flex-row items-start space-y-0 gap-4">
            {steps[currentStep].icon}
            <div>
              <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
              <CardDescription className="text-lg mt-1">{steps[currentStep].description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="min-h-[200px]">
              {steps[currentStep].content}
            </div>
            <div className="flex justify-between mt-10">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Назад
              </Button>
              <Button 
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
              >
                Далее
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <Coins className="h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold">Особые условия для клиентов "Этажи"</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Страхование залога</h3>
              <p>Мы предлагаем уникальную программу страхования депозита, что обеспечивает защиту ваших средств.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Юридическая защита</h3>
              <p>Полное юридическое сопровождение сделки и помощь в решении любых споров с арендодателем.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Персональный менеджер</h3>
              <p>За каждым клиентом закрепляется персональный менеджер, который всегда на связи.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Бонусная программа</h3>
              <p>Накапливайте бонусы за каждую сделку и используйте их для оплаты наших услуг в будущем.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ООО "Этажи"</h3>
              <p className="text-gray-300">Лидер рынка аренды и продажи недвижимости. Более 10 лет опыта и тысячи довольных клиентов.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-300">г. Москва, ул. Примерная, 123</p>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
              <p className="text-gray-300">info@etazhi.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="text-gray-300">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-300">Сб: 10:00 - 18:00</p>
              <p className="text-gray-300">Вс: выходной</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 ООО "Этажи". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
