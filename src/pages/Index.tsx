
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clipboard, 
  Home, 
  FileCheck, 
  Phone, 
  Building, 
  Users, 
  ClipboardCheck, 
  Key, 
  ShieldCheck, 
  Check, 
  PanelLeftOpen 
} from "lucide-react";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Первичный контакт",
      description: "Прием обращения и выявление потребности клиента",
      icon: <Phone className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Действия сотрудника при первичном контакте:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Приветствие по корпоративному стандарту</li>
            <li>Заполнение формы первичного контакта в CRM</li>
            <li>Выявление основных требований к недвижимости:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Бюджет (минимальный/максимальный)</li>
                <li>Район (предпочтительные/исключаемые)</li>
                <li>Тип недвижимости (квартира, дом, помещение)</li>
                <li>Необходимая площадь и особые требования</li>
              </ul>
            </li>
            <li>Выявление срочности потребности</li>
            <li>Запись контактных данных клиента</li>
          </ul>
          <div className="bg-amber-50 p-4 rounded-md mt-6 border border-amber-200">
            <h4 className="font-medium text-amber-800 mb-2">Важно помнить:</h4>
            <p className="text-amber-700">Первый контакт формирует впечатление о компании. Всегда соблюдайте корпоративный стандарт общения и будьте доброжелательны.</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Подбор объектов",
      description: "Формирование списка подходящих объектов недвижимости",
      icon: <Clipboard className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Порядок действий при подборе объектов:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Работа с внутренней базой объектов недвижимости</li>
            <li>Проверка документов собственности и правового статуса объектов</li>
            <li>Связь с собственниками для уточнения актуальности и условий</li>
            <li>Анализ соответствия требованиям клиента:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Ценовые параметры (включая коммунальные платежи)</li>
                <li>Транспортная доступность</li>
                <li>Инфраструктура района</li>
                <li>Состояние объекта и ремонт</li>
              </ul>
            </li>
            <li>Формирование презентации из 3-8 объектов</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-md mt-6 border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Рекомендация:</h4>
            <p className="text-blue-700">Всегда имейте один "запасной" вариант на случай, если основные объекты не подойдут клиенту или окажутся уже занятыми.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Презентация клиенту",
      description: "Представление подобранных вариантов и организация просмотров",
      icon: <Home className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Этапы презентации объектов и организации просмотров:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Связь с клиентом и презентация подобранных вариантов:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>По телефону (краткое описание)</li>
                <li>По электронной почте (отправка презентации)</li>
                <li>При личной встрече (полный обзор)</li>
              </ul>
            </li>
            <li>Планирование маршрута просмотров в логическом порядке</li>
            <li>Согласование времени с клиентом и собственниками</li>
            <li>Подготовка документов для каждого объекта</li>
            <li>Информирование собственников о предстоящих просмотрах</li>
          </ul>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-md border">
              <h4 className="font-medium mb-2">Чек-лист перед просмотром:</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Уточнить актуальность объекта</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Подготовить распечатки с планировкой</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Заправить автомобиль или проверить маршрут</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border">
              <h4 className="font-medium mb-2">Что взять на просмотр:</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Папка с документацией по объектам</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Бахилы и средства защиты</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Договор-оферта и бланки для заключения</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Просмотр объектов",
      description: "Сопровождение клиента на просмотре и работа с возражениями",
      icon: <Building className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Порядок действий при просмотре объектов:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Встреча с клиентом в назначенное время и в оговоренном месте</li>
            <li>При показе объекта:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Подчеркивать преимущества объекта</li>
                <li>Объяснять возможности перепланировки (если применимо)</li>
                <li>Рассказывать об инфраструктуре района</li>
                <li>Отвечать на вопросы про коммуникации и условия</li>
              </ul>
            </li>
            <li>Работа с возражениями клиента на месте</li>
            <li>Фиксация реакции клиента на каждый объект</li>
            <li>Обсуждение с клиентом деталей объекта и возможностей торга</li>
          </ul>
          <div className="bg-green-50 p-4 rounded-md mt-6 border border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Как работать с возражениями:</h4>
            <p className="text-green-700 mb-2">Применяйте технику "Выслушать - Уточнить - Ответить - Убедиться".</p>
            <p className="text-green-700">Никогда не спорьте с клиентом. Если объект не подходит, отметьте это в CRM и предложите перейти к следующему варианту.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Проверка документов",
      description: "Юридическая проверка выбранного объекта",
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>После выбора клиентом объекта, необходимо провести проверку:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Запрос у собственника полного пакета документов:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Документы, подтверждающие право собственности</li>
                <li>Паспорт собственника</li>
                <li>Выписка из ЕГРН (не старше месяца)</li>
                <li>Технический/кадастровый паспорт</li>
                <li>Справки об отсутствии задолженностей</li>
              </ul>
            </li>
            <li>Передача документов юридическому отделу для проверки</li>
            <li>Оформление заключения о юридической чистоте</li>
            <li>Информирование клиента о результатах проверки</li>
          </ul>
          <div className="mt-6 bg-red-50 p-4 rounded-md border border-red-200">
            <h4 className="font-medium text-red-800 mb-2">Внимание! Стоп-факторы:</h4>
            <ul className="text-red-700 space-y-1">
              <li>Несоответствие данных собственника документам</li>
              <li>Наличие обременений или арестов</li>
              <li>Споры о наследстве или незавершенные судебные процессы</li>
              <li>Несогласованные перепланировки</li>
              <li>Несоответствие реальной площади документам</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Подготовка договора",
      description: "Согласование условий и составление договора аренды",
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Этапы подготовки договора аренды:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Согласование с клиентом и собственником основных условий:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Стоимость аренды и порядок оплаты</li>
                <li>Размер депозита (обычно 100% месячной платы)</li>
                <li>Срок аренды</li>
                <li>Права и обязанности сторон</li>
                <li>Условия расторжения договора</li>
              </ul>
            </li>
            <li>Формирование договора на основе утвержденного шаблона</li>
            <li>Составление акта приема-передачи имущества</li>
            <li>Формирование графика платежей</li>
            <li>Согласование даты подписания</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-50 rounded-md border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Комиссия агентства:</h4>
              <ul className="text-blue-700 space-y-1">
                <li>50-100% ежемесячной арендной платы</li>
                <li>Оплачивается при подписании договора</li>
                <li>Может быть разделена между сторонами</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-md border">
              <h4 className="font-medium mb-2">Внесение в договор:</h4>
              <ul className="space-y-1">
                <li>Условия индексации арендной платы</li>
                <li>Ответственность за коммунальные платежи</li>
                <li>Правила содержания и эксплуатации</li>
                <li>Сроки устранения неисправностей</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Подписание и оплата",
      description: "Заключение договора, передача ключей и оплата",
      icon: <Key className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Процедура подписания договора:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Организация встречи всех сторон в офисе компании</li>
            <li>Проверка документов, удостоверяющих личность</li>
            <li>Подписание договора в трех экземплярах:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Для арендатора</li>
                <li>Для арендодателя</li>
                <li>Для компании "Этажи"</li>
              </ul>
            </li>
            <li>Подписание акта приема-передачи имущества</li>
            <li>Прием оплаты:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Первый платеж за аренду</li>
                <li>Депозит</li>
                <li>Комиссия агентства</li>
              </ul>
            </li>
            <li>Передача ключей арендатору</li>
            <li>Фиксация показаний счетчиков</li>
          </ul>
          <div className="mt-4 p-4 bg-gray-50 rounded-md border">
            <h4 className="font-medium mb-2">Способы оплаты:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Наличными</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Банковской картой</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Переводом</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Через QR-код</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Через приложение</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Сопровождение клиента",
      description: "Дальнейшее сопровождение и разрешение спорных ситуаций",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      content: (
        <div className="space-y-4">
          <p>Работа с клиентом после заключения договора:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Контрольный звонок через 3 дня после заселения</li>
            <li>Ежемесячное напоминание об оплате</li>
            <li>Разрешение возникающих спорных ситуаций:
              <ul className="list-circle ml-8 mt-2 space-y-1">
                <li>Регистрация обращения в CRM</li>
                <li>Связь с собственником при необходимости</li>
                <li>Координация действий сторон при ремонтных работах</li>
                <li>Юридическая консультация по вопросам договора</li>
              </ul>
            </li>
            <li>Плановый контроль состояния объекта (каждые 3 месяца)</li>
            <li>Помощь при продлении или расторжении договора</li>
            <li>Работа над отзывом клиента</li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-purple-50 rounded-md border border-purple-200">
              <h4 className="font-medium text-purple-800 mb-2">Удержание клиента:</h4>
              <p className="text-purple-700">За 30 дней до окончания договора свяжитесь с клиентом для обсуждения продления. Предложите вариант с улучшенными условиями или скидкой.</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-md border border-amber-200">
              <h4 className="font-medium text-amber-800 mb-2">KPI сотрудника:</h4>
              <ul className="text-amber-700 space-y-1">
                <li>Количество повторных обращений</li>
                <li>Оценка качества сервиса</li>
                <li>Количество продлений договоров</li>
                <li>Скорость решения проблем</li>
              </ul>
            </div>
          </div>
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
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-2">Портал сотрудника</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost">Инструкции</Button>
            <Button variant="ghost">База знаний</Button>
            <Button variant="ghost">Обучение</Button>
            <Button variant="outline" className="gap-2">
              <Users className="h-4 w-4" />
              Мои клиенты
            </Button>
            <Button className="gap-2">
              <PanelLeftOpen className="h-4 w-4" />
              CRM
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Алгоритм работы с клиентами</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Пошаговая инструкция для менеджеров ООО "Этажи" по сопровождению клиентов в процессе аренды недвижимости.
          </p>
        </div>

        <div className="mb-10 overflow-x-auto">
          <div className="flex justify-between min-w-[800px] max-w-6xl mx-auto">
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
                <span className={`text-xs mt-2 font-medium ${
                  currentStep >= index ? "text-primary" : "text-gray-500"
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Card className="max-w-5xl mx-auto shadow-lg">
          <CardHeader className="flex flex-row items-start space-y-0 gap-4">
            <div className="bg-blue-50 p-2 rounded-lg">
              {steps[currentStep].icon}
            </div>
            <div>
              <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
              <CardDescription className="text-lg mt-1">{steps[currentStep].description}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="min-h-[300px]">
              {steps[currentStep].content}
            </div>
            <div className="flex justify-between mt-10">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 0}
                className="gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Назад
              </Button>
              <Button 
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="gap-2"
              >
                Далее
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-5xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center gap-4 mb-6">
            <Users className="h-10 w-10 text-primary" />
            <h2 className="text-2xl font-bold">Ключевые показатели эффективности</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-white">
              <h3 className="font-semibold text-lg mb-2">KPI по новым клиентам</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Первичных контактов:</span>
                  <span className="font-medium">15 в неделю</span>
                </li>
                <li className="flex justify-between">
                  <span>Конверсия в просмотры:</span>
                  <span className="font-medium">60%</span>
                </li>
                <li className="flex justify-between">
                  <span>Конверсия в сделки:</span>
                  <span className="font-medium">30%</span>
                </li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-gradient-to-br from-green-50 to-white">
              <h3 className="font-semibold text-lg mb-2">KPI по сопровождению</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>Время решения вопросов:</span>
                  <span className="font-medium">24 часа</span>
                </li>
                <li className="flex justify-between">
                  <span>Положительные отзывы:</span>
                  <span className="font-medium">≥ 90%</span>
                </li>
                <li className="flex justify-between">
                  <span>Продление договоров:</span>
                  <span className="font-medium">≥ 50%</span>
                </li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg bg-gradient-to-br from-purple-50 to-white">
              <h3 className="font-semibold text-lg mb-2">Бонусы и премии</h3>
              <ul className="space-y-1">
                <li className="flex justify-between">
                  <span>За превышение KPI:</span>
                  <span className="font-medium">+20%</span>
                </li>
                <li className="flex justify-between">
                  <span>За каждую рекомендацию:</span>
                  <span className="font-medium">1000₽</span>
                </li>
                <li className="flex justify-between">
                  <span>За повторное обращение:</span>
                  <span className="font-medium">+10%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Внутренний портал ООО "Этажи"</h3>
              <p className="text-gray-300">Система для эффективной работы с клиентами и повышения качества сервиса компании.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Поддержка сотрудников</h3>
              <p className="text-gray-300">Техническая поддержка: support@etazhi.ru</p>
              <p className="text-gray-300">HR-отдел: hr@etazhi.ru</p>
              <p className="text-gray-300">Отдел обучения: edu@etazhi.ru</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Полезные ресурсы</h3>
              <ul className="text-gray-300 space-y-1">
                <li>База знаний</li>
                <li>Корпоративный чат</li>
                <li>Система обучения</li>
                <li>CRM система</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 ООО "Этажи". Все материалы доступны только для внутреннего пользования.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
