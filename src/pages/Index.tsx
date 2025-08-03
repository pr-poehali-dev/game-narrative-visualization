import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const gameLibrary = [
    { title: "The Witcher 3", progress: 87, nodes: 124, color: "from-purple-600 to-pink-600" },
    { title: "Cyberpunk 2077", progress: 43, nodes: 89, color: "from-blue-600 to-cyan-600" },
    { title: "Mass Effect", progress: 100, nodes: 156, color: "from-green-600 to-emerald-600" },
    { title: "Detroit", progress: 62, nodes: 78, color: "from-orange-600 to-red-600" },
  ];

  const recentActivity = [
    { action: "Explored new branch", time: "2m", game: "The Witcher 3" },
    { action: "Completed chapter", time: "15m", game: "Cyberpunk 2077" },
    { action: "Made critical choice", time: "1h", game: "Mass Effect" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-sm font-bold">S</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold">StoryGraph</h1>
                <p className="text-xs text-muted-foreground">Interactive Gaming Stories</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Icon name="Search" size={16} className="absolute left-3 top-3 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search stories, choices..."
                  className="pl-9 pr-4 py-2 bg-input border border-border rounded-full w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <Button variant="ghost" size="sm" className="rounded-full">
                <Icon name="Bell" size={16} />
              </Button>
              
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Explore Interactive Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dive deep into game narratives. Visualize choices, track consequences, and discover every possible storyline.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                  <Badge variant="secondary" className="text-xs">+12%</Badge>
                </div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Stories Explored</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="GitBranch" size={24} className="text-secondary" />
                  <Badge variant="secondary" className="text-xs">+8%</Badge>
                </div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-muted-foreground">Choices Made</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Target" size={24} className="text-accent" />
                  <Badge variant="secondary" className="text-xs">+25%</Badge>
                </div>
                <p className="text-2xl font-bold">89%</p>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-center justify-between mb-2">
                  <Icon name="Clock" size={24} className="text-purple-500" />
                  <Badge variant="secondary" className="text-xs">Today</Badge>
                </div>
                <p className="text-2xl font-bold">4.2h</p>
                <p className="text-sm text-muted-foreground">Time Played</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column - Game Library */}
          <div className="col-span-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Your Story Library</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Add Game
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  {gameLibrary.map((game, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardContent className="p-0">
                        <div className={`h-32 bg-gradient-to-br ${game.color} relative rounded-t-lg`}>
                          <div className="absolute inset-0 bg-black/20 rounded-t-lg" />
                          <div className="absolute top-4 right-4">
                            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                              <Icon name="Heart" size={16} />
                            </Button>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-semibold text-lg">{game.title}</h3>
                            <p className="text-sm opacity-90">{game.nodes} story nodes</p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">Progress</span>
                            <span className="text-sm font-medium">{game.progress}%</span>
                          </div>
                          <Progress value={game.progress} className="h-2" />
                          <div className="flex items-center justify-between mt-4">
                            <Button variant="ghost" size="sm">
                              <Icon name="BarChart3" size={14} className="mr-2" />
                              Analytics
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary">
                              <Icon name="Play" size={14} className="mr-2" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Favorites Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="Heart" size={20} className="mr-2 text-red-500" />
                  Favorite Moments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "The Baron's Family Quest", game: "The Witcher 3", impact: "High" },
                    { title: "Johnny Silverhand Choice", game: "Cyberpunk 2077", impact: "Critical" },
                    { title: "Shepard's Final Decision", game: "Mass Effect", impact: "Ending" },
                  ].map((moment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <div>
                          <h4 className="font-medium">{moment.title}</h4>
                          <p className="text-sm text-muted-foreground">{moment.game}</p>
                        </div>
                      </div>
                      <Badge variant={moment.impact === "Critical" ? "destructive" : "secondary"}>
                        {moment.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Analytics & Activity */}
          <div className="col-span-4 space-y-6">
            {/* Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="TrendingUp" size={18} className="mr-2" />
                  Story Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Choice Distribution */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Choice Distribution</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Heroic</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-1" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>Neutral</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="h-1" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>Renegade</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-1" />
                    </div>
                  </div>

                  {/* Weekly Activity */}
                  <div>
                    <h4 className="text-sm font-medium mb-3">Weekly Activity</h4>
                    <div className="h-16 flex items-end space-x-1">
                      {[40, 65, 30, 80, 45, 90, 55].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Activity" size={18} className="mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.game} • {activity.time} ago</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  View All Activity
                </Button>
              </CardContent>
            </Card>

            {/* Achievement */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Icon name="Trophy" size={18} className="mr-2" />
                  Latest Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">Story Explorer</h3>
                  <p className="text-sm text-muted-foreground mb-2">Discovered 50 unique story branches</p>
                  <Badge className="bg-gradient-to-r from-primary to-secondary">
                    Just unlocked!
                  </Badge>
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