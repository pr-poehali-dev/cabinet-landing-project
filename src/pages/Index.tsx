import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">
                Новинка 2025
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
                Тумба ЛДСП
                <span className="text-orange-500"> с 3 ящиками</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Стильная и практичная тумба из качественного ЛДСП. 
                Идеальное решение для хранения в любом интерьере.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">от 12 900₽</div>
                  <div className="text-sm text-gray-500">с доставкой</div>
                </div>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Заказать сейчас
                  <Icon name="ShoppingCart" className="ml-2" size={20} />
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Icon name="Truck" size={16} />
                  Доставка 1-3 дня
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Гарантия 2 года
                </div>
              </div>
            </div>
            <div className="rounded-2xl h-96 overflow-hidden shadow-lg">
              <img 
                src="/img/213f5aec-76b4-4e07-b8cc-59e083b77143.jpg" 
                alt="Тумба ЛДСП с 3 ящиками"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Почему выбирают нашу тумбу?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Качество материалов, продуманный дизайн и доступная цена
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Hammer" className="text-orange-500" size={32} />
                </div>
                <CardTitle className="font-montserrat">Качественный ЛДСП</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Экологически чистый материал класса E1. 
                  Устойчив к влаге и механическим повреждениям.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Boxes" className="text-orange-500" size={32} />
                </div>
                <CardTitle className="font-montserrat">3 просторных ящика</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Большой объем хранения с плавными направляющими. 
                  Идеально для одежды, белья и аксессуаров.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" className="text-orange-500" size={32} />
                </div>
                <CardTitle className="font-montserrat">Стильный дизайн</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Современный минималистичный дизайн. 
                  Подходит к любому интерьеру от классики до лофта.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Характеристики */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Технические характеристики
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="font-montserrat text-orange-700">Размеры и материал</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Высота:</span>
                      <span className="font-semibold">75 см</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ширина:</span>
                      <span className="font-semibold">80 см</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Глубина:</span>
                      <span className="font-semibold">40 см</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Материал:</span>
                      <span className="font-semibold">ЛДСП 18мм</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="font-montserrat text-orange-700">Особенности</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span>Металлические направляющие</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span>Регулируемые ножки</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span>Экологичное покрытие</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-500" size={16} />
                      <span>Простая сборка</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Отзывы покупателей
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={24} />
              ))}
              <span className="text-lg font-semibold ml-2">4.9 из 5</span>
              <span className="text-gray-500">(127 отзывов)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Отличная тумба! Качество материала превзошло ожидания. 
                  Ящики выдвигаются очень плавно, места много."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-orange-700">М</span>
                  </div>
                  <div>
                    <div className="font-semibold">Мария К.</div>
                    <div className="text-sm text-gray-500">2 недели назад</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Заказывал для спальни. Собрал за час, инструкция понятная. 
                  Тумба устойчивая и красивая."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-orange-700">А</span>
                  </div>
                  <div>
                    <div className="font-semibold">Андрей П.</div>
                    <div className="text-sm text-gray-500">1 месяц назад</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                  ))}
                  <Icon name="Star" className="text-gray-300" size={16} />
                </div>
                <p className="text-gray-700 mb-4">
                  "Хорошее качество за свою цену. Доставили быстро. 
                  Единственный минус - немного царапин на упаковке."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-orange-700">Е</span>
                  </div>
                  <div>
                    <div className="font-semibold">Елена С.</div>
                    <div className="text-sm text-gray-500">3 недели назад</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма заказа */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
              Оформить заказ
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Заполните форму и мы свяжемся с вами в течение 15 минут
            </p>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <Input placeholder="Введите имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Адрес доставки
                    </label>
                    <Textarea placeholder="Укажите адрес для доставки" rows={3} />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">Тумба ЛДСП с 3 ящиками</div>
                        <div className="text-sm text-gray-500">Количество: 1 шт.</div>
                      </div>
                      <div className="text-2xl font-bold text-orange-500">12 900₽</div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6">
                    Заказать за 12 900₽
                    <Icon name="CreditCard" className="ml-2" size={20} />
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
              Контакты и доставка
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-orange-200 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-orange-500" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600 mb-2">+7 (495) 123-45-67</p>
                <p className="text-sm text-gray-500">Ежедневно с 9:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-orange-500" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-2">info@tumba-mebel.ru</p>
                <p className="text-sm text-gray-500">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-orange-500" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-gray-600 mb-2">По всей России</p>
                <p className="text-sm text-gray-500">Москва и МО - бесплатно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold font-montserrat">Тумба ЛДСП</h3>
            <p className="text-gray-400">Качественная мебель для вашего дома</p>
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <Icon name="Facebook" className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            <Icon name="Instagram" className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            <Icon name="Phone" className="text-gray-400 hover:text-white cursor-pointer" size={24} />
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Тумба ЛДСП. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;