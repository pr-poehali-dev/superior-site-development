import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navItems = [
    { name: 'Экзамены', icon: 'BookOpen' },
    { name: 'Поступление', icon: 'UserCheck' },
    { name: 'Программы', icon: 'GraduationCap' },
    { name: 'Финансы', icon: 'CreditCard' },
    { name: 'Общежития', icon: 'Home' },
    { name: 'Документы', icon: 'FileText' },
    { name: 'Календарь', icon: 'Calendar' },
    { name: 'Контакты', icon: 'Phone' }
  ];

  const popularServices = [
    {
      title: 'Список экзаменов по специальностям',
      action: 'Открыть',
      badge: 'Актуально',
      badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
    },
    {
      title: 'Сроки приема документов',
      action: 'Календарь',
      badge: 'Важно',
      badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
    },
    {
      title: 'Общежития и стоимость',
      action: 'Смотреть',
      badge: 'Новое',
      badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
    },
    {
      title: 'Стипендии и гранты',
      action: 'Подробнее',
      badge: 'Популярно',
      badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
    }
  ];

  const examSchedule = [
    { date: '6 сентября', subject: 'Математика (ЕГЭ)', time: '10:00', type: 'Русский язык (ЕГЭ)', duration: '180 мин' },
    { date: '9 сентября', subject: 'Информатика (ЕГЭ)', time: '14:00', type: 'Физика', duration: '180 мин' },
    { date: '13 сентября', subject: 'Архитектура и градостроительство', time: '10:00', type: 'Творческий', duration: '240 мин' },
    { date: '16 сентября', subject: 'Дизайн', time: '10:00', type: 'Творческий', duration: '180 мин' },
    { date: '20 сентября', subject: 'Экономика', time: '14:00', type: 'Собеседование', duration: '60 мин' }
  ];

  const usefulLinks = [
    { title: 'Официальный сайт УРФУ', desc: 'Главная страница университета' },
    { title: 'Конкурсные списки', desc: 'Актуальная информация по конкурсам и проходным баллам' },
    { title: 'Памятка абитуриента (Минобрнауки)', desc: 'Официальное руководство для абитуриентов' },
    { title: 'Памятка по студентам', desc: 'Советы и инфо для поступивших' },
    { title: 'Документы для зачисления', desc: 'Необходимые документы для поступления' },
    { title: 'Документы о поступлении', desc: 'Правила и регламенты для поступления' },
    { title: 'Telegram: URFU Assistant', desc: 'Бот для вопросов абитуриентов' },
    { title: 'Telegram-бот URFU Assistant', desc: 'Бот для ответов на вопросы абитуриентов' }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Сервисы УРФУ</h1>
                <p className="text-sm text-muted-foreground">Экзамены • Поступление • Программы • Финансы • Общежития • Стипендии • Контакты</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsDark(!isDark)}
              className="hover:scale-105 transition-transform"
            >
              <Icon name={isDark ? 'Sun' : 'Moon'} size={18} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="outline"
              className="h-20 flex-col space-y-2 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              <Icon name={item.icon as any} size={20} />
              <span className="text-xs font-medium">{item.name}</span>
            </Button>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Абитуриентам и студентам УРФУ — просто и по делу
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Экзамены, сроки, программы, общежития и стипендии — в одном месте.
                Заберите актуальные сводки в Калуге.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Проверить даты экзаменов
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Как подать документы
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Popular Services */}
            <Card className="mb-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Star" size={20} className="mr-2 text-primary" />
                  Популярные сейчас
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularServices.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className="flex-1">
                        <h4 className="font-medium group-hover:text-primary transition-colors">{service.title}</h4>
                        <Badge className={`mt-2 ${service.badgeColor}`}>
                          {service.badge}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm" className="hover:scale-105 transition-transform">
                        {service.action}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactive Schedule */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-primary" />
                  1. Вступительные экзамены и сроки
                </CardTitle>
                <CardDescription>
                  Проходные баллы, календарь дат и дополнительные испытания. Обновлено 4 ден. 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="calendar" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="calendar">Календарь</TabsTrigger>
                    <TabsTrigger value="math">Математика и информатика</TabsTrigger>
                    <TabsTrigger value="architecture">Архитектура и градостроительство</TabsTrigger>
                    <TabsTrigger value="design">Дизайн</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="calendar" className="mt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                      <div className="space-y-3">
                        <h4 className="font-semibold">Даты экзаменов:</h4>
                        {examSchedule.map((exam, idx) => (
                          <div key={idx} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{exam.subject}</p>
                                <p className="text-sm text-muted-foreground">{exam.type}</p>
                              </div>
                              <div className="text-right text-sm">
                                <p className="font-medium">{exam.date}</p>
                                <p className="text-muted-foreground">{exam.time}</p>
                                <p className="text-primary text-xs">{exam.duration}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="math" className="mt-6">
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Прикладная математика и информатика</h4>
                        <p className="text-sm text-muted-foreground mb-3">Очная/заочная/очно-заочная формы: 190/190/конкурс</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p><strong>Математика:</strong> ВГЭ</p>
                            <p><strong>Русский язык:</strong> ВГЭ</p>
                          </div>
                          <div>
                            <p><strong>Стоимость:</strong> от 130 000 руб.</p>
                            <p><strong>Общежитие:</strong> от 90-900 руб.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">Информатика и вычислительная техника</h4>
                        <p className="text-sm text-muted-foreground mb-3">Проходные баллы ЕГЭ от прошлого года. Очная форма: от 200 баллов</p>
                        <div className="space-y-2 text-sm">
                          <p><strong>• Математика (ЕГЭ)</strong></p>
                          <p><strong>• Русский язык (ЕГЭ)</strong></p>
                          <p><strong>• Информатика (ЕГЭ)</strong></p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="architecture" className="mt-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Архитектура</h4>
                      <p className="text-sm text-muted-foreground mb-3">Стоимость от 130 000 руб., аккредитованные программы, конкурс до 90 баллов</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Вступительные экзамены:</strong></p>
                        <p>• Математика (ЕГЭ)</p>
                        <p>• Русский язык (ЕГЭ)</p>
                        <p>• Творческое испытание (черчение)</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="design" className="mt-6">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Дизайн</h4>
                      <p className="text-sm text-muted-foreground mb-3">Дизайн формы до 90-100 баллов, Очная от программы</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>Специализации:</strong></p>
                        <p>• Графический дизайн</p>
                        <p>• Промышленный дизайн</p>
                        <p>• Дизайн среды</p>
                        <p><strong>Творческое испытание:</strong> до 180 мин</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Краткая информация */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Краткая информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  <strong>Приемная комиссия работает в Екатеринбурге до апреля-середины августа</strong>
                  для очных специальностей по очной форме и по всем специальностям до конца августа.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Приемная математика и информатика</strong></p>
                  <div className="pl-4 space-y-1">
                    <p>• Математика (ВГЭ)</p>
                    <p>• Русский язык (ВГЭ)</p>
                    <p>• Информатика (ВГЭ)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Полезные ссылки */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Link" size={16} className="mr-2" />
                  Полезные ссылки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {usefulLinks.map((link, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 text-left justify-start hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                    >
                      <div>
                        <p className="font-medium text-xs leading-tight">{link.title}</p>
                        <p className="text-xs opacity-70 mt-1">{link.desc}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;