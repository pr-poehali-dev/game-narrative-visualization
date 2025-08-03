import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const favoriteGames = [
    {
      id: 1,
      title: "Ведьмак 3: Дикая охота",
      image: "https://cdn.poehali.dev/files/a6577723-a35d-4b94-9685-c53cfa5ea1d0.png",
      progress: 75,
      rating: 4.9,
      genre: "RPG",
      playtime: "117/150 веток"
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      image: "https://cdn.poehali.dev/files/a6577723-a35d-4b94-9685-c53cfa5ea1d0.png",
      progress: 45,
      rating: 4.2,
      genre: "Action",
      playtime: "23/51 веток"
    },
    {
      id: 3,
      title: "Mass Effect",
      image: "https://cdn.poehali.dev/files/a6577723-a35d-4b94-9685-c53cfa5ea1d0.png",
      progress: 100,
      rating: 4.8,
      genre: "RPG",
      playtime: "42/42 ветки"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Боковая навигация */}
      <div className="fixed left-0 top-0 h-full w-16 bg-card border-r border-border flex flex-col items-center py-4 space-y-6">
        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
          <Icon name="Gamepad2" size={20} className="text-primary-foreground" />
        </div>
        
        <nav className="flex flex-col space-y-4">
          <Button variant="ghost" size="icon" className="text-primary">
            <Icon name="Home" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Heart" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="TrendingUp" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Users" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Trophy" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="User" size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="Settings" size={20} />
          </Button>
        </nav>
      </div>

      {/* Основной контент */}
      <div className="ml-16 p-6">
        {/* Шапка */}
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
                className="pl-10 pr-4 py-2 bg-input border border-border rounded-lg w-80 text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Левая колонка */}
          <div className="space-y-6">
            {/* Недавние сюжеты */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Недавние сюжеты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {favoriteGames.slice(0, 3).map((game) => (
                  <div key={game.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center">
                      <Icon name="Gamepad2" size={16} className="text-secondary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{game.title}</p>
                      <p className="text-xs text-muted-foreground">{game.playtime}</p>
                      <Progress value={game.progress} className="h-1 mt-1" />
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Последнее достижение */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Последнее достижение</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Исследователь сюжетов</p>
                    <p className="text-sm text-muted-foreground">Изучил 25 веток сюжета</p>
                    <p className="text-xs text-primary">2 часа назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Центральная колонка */}
          <div className="space-y-6">
            {/* Главная игра */}
            <Card className="relative overflow-hidden">
              <div className="absolute top-4 right-4 z-10">
                <Button variant="ghost" size="icon">
                  <Icon name="Heart" size={20} className="text-red-500" />
                </Button>
              </div>
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 relative flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">Ведьмак 3: Дикая охота</h3>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                        <span>4.9</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={16} />
                        <span>74</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Share2" size={16} />
                        <span>37</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Badge variant="secondary">RPG</Badge>
                      <Badge variant="secondary">Action</Badge>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-4">117/150 веток</p>
                  <Button className="w-full">
                    <Icon name="Play" size={16} className="mr-2" />
                    Продолжить
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Статистики */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="BarChart3" size={24} className="text-primary mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Процент завершения</p>
                  <p className="text-xl font-bold">75%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Icon name="Target" size={24} className="text-green-500 mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Веток пройдено</p>
                  <p className="text-xl font-bold">117</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4].map((star) => (
                      <Icon key={star} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <Icon name="Star" size={16} className="text-gray-300" />
                  </div>
                  <p className="text-sm text-muted-foreground">Поставьте оценку игре</p>
                  <p className="text-xl font-bold">4.5</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="space-y-6">
            {/* Избранное */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Избранное</CardTitle>
                <Button variant="ghost" size="icon">
                  <Icon name="Settings" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Покажи нам свои любимые игры. Они здесь!</p>
                <div className="space-y-3">
                  {favoriteGames.map((game) => (
                    <div key={game.id} className="p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{game.title}</h4>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                          <span className="text-xs">{game.rating}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{game.playtime}</p>
                      <Progress value={game.progress} className="h-1" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Аналитика */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Аналитика</CardTitle>
                <Button variant="ghost" size="icon">
                  <Icon name="TrendingUp" size={16} />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Изучай свои любимые игры. Они здесь!</p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Время в игре сегодня</span>
                    <span className="text-sm font-medium">2ч 34м</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Пройдено веток</span>
                    <span className="text-sm font-medium">7</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Новых достижений</span>
                    <span className="text-sm font-medium">3</span>
                  </div>
                  
                  <div className="pt-2">
                    <div className="h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg flex items-end justify-center p-2">
                      <div className="flex items-end space-x-1">
                        {[40, 65, 30, 80, 45, 70, 55].map((height, i) => (
                          <div 
                            key={i} 
                            className="w-2 bg-primary rounded-t"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">Активность за неделю</p>
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