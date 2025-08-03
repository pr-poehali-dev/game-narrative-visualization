import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const recentGames = [
    {
      id: 1,
      title: "Ведьмак 3: Дикая охота",
      progress: 81,
      rating: "❤️"
    },
    {
      id: 2,
      title: "Ведьмак 3: Дикая охота",
      progress: 81,
      rating: "❤️"
    },
    {
      id: 3,
      title: "Ведьмак 3: Дикая охота",
      progress: 81,
      rating: "❤️"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Левая боковая панель */}
      <div className="w-16 bg-card border-r border-border flex flex-col items-center py-6 space-y-6">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
          <span className="text-sm font-bold">G</span>
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Button variant="ghost" size="icon" className="text-primary">
            <Icon name="Home" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="Bookmark" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="TrendingUp" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="Users" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="Trophy" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="User" size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="Settings" size={20} />
          </Button>
        </nav>

        <div className="mt-auto">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Icon name="HelpCircle" size={20} />
          </Button>
        </div>
      </div>

      {/* Основной контент */}
      <div className="flex-1 p-6">
        {/* Верхняя панель */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold mb-1">Привет, Кирилл!</h1>
            <p className="text-muted-foreground">Исследуй интерактивные игровые сюжеты!</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-3 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Найти момент или игру..."
                className="pl-10 pr-4 py-2.5 bg-input border border-border rounded-lg w-80 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Основная сетка как в макете */}
        <div className="grid grid-cols-12 gap-6">
          {/* Левая колонка - Недавние сюжеты и Последнее достижение */}
          <div className="col-span-3 space-y-6">
            {/* Недавние сюжеты */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Недавние сюжеты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentGames.map((game, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded flex items-center justify-center">
                        <Icon name="Gamepad2" size={16} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{game.title}</p>
                        <p className="text-xs text-muted-foreground">81 из 90</p>
                      </div>
                      <span className="text-sm">{game.rating}</span>
                    </div>
                    <Progress value={game.progress} className="h-1" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Последнее достижение */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Последнее достижение</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trophy" size={24} className="text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">Пока достижений нет</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Центральная колонка - Главная игра и статистики */}
          <div className="col-span-6 space-y-6">
            {/* Главная карточка игры */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Icon name="Heart" size={20} className="text-red-500 fill-current" />
                </Button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-orange-600 via-red-600 to-red-800 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-20 bg-black/40 rounded border-2 border-white/20 flex items-center justify-center">
                      <span className="text-2xl">🎮</span>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Ведьмак 3: Дикая охота</h2>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm">4.9</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">74</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={16} />
                        <span className="text-sm">37</span>
                      </div>
                    </div>
                    <p className="text-sm opacity-90 mb-4">117/150 веток</p>
                    <div className="flex space-x-2">
                      <Badge className="bg-white/20 text-white hover:bg-white/30">RPG</Badge>
                      <Badge className="bg-white/20 text-white hover:bg-white/30">Action</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Icon name="Play" size={16} className="mr-2" />
                  Продолжить
                </Button>
              </CardContent>
            </Card>

            {/* Нижние блоки статистики */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="BarChart3" size={24} className="text-primary mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground mb-1">Процент завершения</p>
                  <p className="text-2xl font-bold">75%</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="Target" size={24} className="text-green-500 mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground mb-1">Веток пройдено</p>
                  <p className="text-2xl font-bold">117</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <Icon name="Star" size={16} className="text-gray-400" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Поставьте оценку игре</p>
                  <p className="text-2xl font-bold">4.5</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Правая колонка - Избранное и Аналитика */}
          <div className="col-span-3 space-y-6">
            {/* Избранное */}
            <Card className="h-fit">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg">Избранное</CardTitle>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Icon name="Settings" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Покажи нам свои любимые игры. Они здесь!</p>
                <div className="h-32 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Icon name="Heart" size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Избранных игр пока нет</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Аналитика */}
            <Card className="h-fit">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-lg">Аналитика</CardTitle>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <Icon name="TrendingUp" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Изучай свои любимые игры. Они здесь!</p>
                <div className="h-32 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Icon name="BarChart3" size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Данных для аналитики пока нет</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;