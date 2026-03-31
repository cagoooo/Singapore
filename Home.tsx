import { useState } from 'react';
import { ResponsiveTabs as Tabs, ResponsiveTabsContent as TabsContent, ResponsiveTabsList as TabsList, ResponsiveTabsTrigger as TabsTrigger } from '@/components/ResponsiveTabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, DollarSign, AlertCircle, ChevronDown, Menu, X } from 'lucide-react';
import { timeline, attractions, restaurants, budgetBreakdown, tips } from '@/lib/littleIndiaData';
import { LittleIndiaMap } from '@/components/LittleIndiaMap';

const categoryColors = {
  transport: 'bg-blue-100 text-blue-800',
  attraction: 'bg-purple-100 text-purple-800',
  food: 'bg-orange-100 text-orange-800',
  activity: 'bg-green-100 text-green-800',
  shopping: 'bg-pink-100 text-pink-800',
  art: 'bg-indigo-100 text-indigo-800',
  temple: 'bg-red-100 text-red-800',
  culture: 'bg-cyan-100 text-cyan-800',
};

const categoryIcons = {
  transport: '🚇',
  attraction: '🎨',
  food: '🍽️',
  activity: '🎯',
  shopping: '🛍️',
  art: '🖼️',
  temple: '🏛️',
  culture: '📚',
};

export default function Home() {
  const [selectedAttractions, setSelectedAttractions] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedTimeline, setExpandedTimeline] = useState<string | null>(null);

  const toggleAttraction = (id: string) => {
    const newSelected = new Set(selectedAttractions);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedAttractions(newSelected);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-orange-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
              <span className="text-2xl sm:text-3xl flex-shrink-0">🇸🇬</span>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent truncate">
                  小印度旅遊指南
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 truncate">4/3 路線 C</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 sm:py-8">
        {/* Overview Cards - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Card className="border-orange-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">總時間</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-orange-600">8-10 小時</div>
              <p className="text-xs text-gray-500 mt-1">含用餐和購物</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">人均預算</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-green-600">80-130 新幣</div>
              <p className="text-xs text-gray-500 mt-1">不含購物</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">難度等級</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-blue-600">輕鬆</div>
              <p className="text-xs text-gray-500 mt-1">適合全家族</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-xs sm:text-sm font-medium text-gray-600">推薦指數</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl font-bold text-yellow-600">⭐⭐⭐⭐⭐</div>
              <p className="text-xs text-gray-500 mt-1">5/5 分</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 bg-white/50 backdrop-blur-sm border border-orange-200 overflow-x-auto">
            <TabsTrigger value="timeline" className="text-xs sm:text-sm">📅 時間表</TabsTrigger>
            <TabsTrigger value="attractions" className="text-xs sm:text-sm">🎨 景點</TabsTrigger>
            <TabsTrigger value="food" className="text-xs sm:text-sm">🍽️ 美食</TabsTrigger>
            <TabsTrigger value="map" className="hidden sm:block text-xs sm:text-sm">🗺️ 地圖</TabsTrigger>
            <TabsTrigger value="tips" className="hidden sm:block text-xs sm:text-sm">💡 貼士</TabsTrigger>
          </TabsList>

          {/* Timeline Tab - Mobile Optimized */}
          <TabsContent value="timeline" className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
            <div className="space-y-2 sm:space-y-3">
              {timeline.map((item) => (
                <Card
                  key={item.id}
                  className="border-l-4 border-l-orange-400 hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm cursor-pointer"
                  onClick={() => setExpandedTimeline(expandedTimeline === item.id ? null : item.id)}
                >
                  <CardHeader className="pb-2 sm:pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2 flex-wrap">
                          <span className="text-xl sm:text-2xl flex-shrink-0">{categoryIcons[item.category as keyof typeof categoryIcons]}</span>
                          <Badge className={`${categoryColors[item.category as keyof typeof categoryColors]} text-xs`}>
                            {item.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm sm:text-lg line-clamp-2">{item.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1 sm:mt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
                          <span className="font-semibold text-orange-600">{item.time}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                            {item.duration}
                          </span>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${expandedTimeline === item.id ? 'rotate-180' : ''}`} />
                    </div>
                  </CardHeader>
                  
                  {expandedTimeline === item.id && (
                    <CardContent className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                      <p className="text-gray-700">{item.description}</p>
                      <div className="flex items-start gap-2 text-gray-600">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{item.location}</span>
                      </div>
                      {item.cost && (
                        <div className="flex items-center gap-2 text-green-600 font-semibold">
                          <DollarSign className="w-4 h-4" />
                          {item.cost}
                        </div>
                      )}
                      {item.tips && item.tips.length > 0 && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 sm:p-3">
                          <p className="text-xs sm:text-sm font-semibold text-amber-900 mb-1 sm:mb-2">💡 貼士：</p>
                          <ul className="text-xs sm:text-sm text-amber-800 space-y-1">
                            {item.tips.map((tip, idx) => (
                              <li key={idx}>• {tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Attractions Tab - Mobile Optimized */}
          <TabsContent value="attractions" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {attractions.map((attraction) => (
                <Card
                  key={attraction.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer bg-white/50 backdrop-blur-sm border-orange-200"
                  onClick={() => toggleAttraction(attraction.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2 flex-wrap">
                          <span className="text-xl sm:text-2xl flex-shrink-0">{categoryIcons[attraction.category as keyof typeof categoryIcons]}</span>
                          <Badge className={`${categoryColors[attraction.category as keyof typeof categoryColors]} text-xs`}>
                            {attraction.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-sm sm:text-base line-clamp-2">{attraction.name}</CardTitle>
                        <CardDescription className="text-xs text-gray-500 mt-1 line-clamp-1">
                          {attraction.nameEn}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {selectedAttractions.has(attraction.id) && (
                    <CardContent className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <p className="text-gray-700">{attraction.description}</p>
                      <div className="space-y-1 sm:space-y-2">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                          <span className="text-gray-600">{attraction.address}</span>
                        </div>
                        {attraction.openingHours && (
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                            <span className="text-gray-600">{attraction.openingHours}</span>
                          </div>
                        )}
                      </div>
                      {attraction.highlights.length > 0 && (
                        <div>
                          <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-1 sm:mb-2">✨ 亮點：</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {attraction.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Food Tab - Mobile Optimized */}
          <TabsContent value="food" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <div className="space-y-3 sm:space-y-4">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="bg-white/50 backdrop-blur-sm border-orange-200">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 sm:mb-2 flex-wrap">
                          <span className="text-xl">🍽️</span>
                          <Badge className="bg-orange-100 text-orange-800 text-xs">{restaurant.type}</Badge>
                        </div>
                        <CardTitle className="text-sm sm:text-base line-clamp-2">{restaurant.name}</CardTitle>
                        <CardDescription className="text-xs sm:text-sm mt-1">{restaurant.rating}</CardDescription>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-base sm:text-lg font-bold text-green-600">{restaurant.averageCost}</div>
                        <p className="text-xs text-gray-500">人均</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-4 text-xs sm:text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-600" />
                      <span className="text-gray-600">{restaurant.address}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">🍴 推薦菜色：</p>
                      <div className="space-y-2">
                        {restaurant.recommendations.map((rec, idx) => (
                          <div key={idx} className="bg-orange-50 border border-orange-200 rounded-lg p-2 sm:p-3">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2">{rec.name}</h4>
                              <span className="text-xs sm:text-sm font-bold text-green-600 flex-shrink-0">{rec.price}</span>
                            </div>
                            <p className="text-xs text-gray-600">{rec.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Map Tab */}
          <TabsContent value="map" className="mt-4 sm:mt-6">
            <Card className="bg-white/50 backdrop-blur-sm border-orange-200 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">小印度景點地圖</CardTitle>
                <CardDescription className="text-xs sm:text-sm">點擊地圖上的標記查看景點詳情</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 sm:h-96 rounded-lg overflow-hidden border border-orange-200">
                  <LittleIndiaMap />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips" className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(tips).map(([key, tipList]) => (
                <Card key={key} className="bg-white/50 backdrop-blur-sm border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-sm sm:text-base">
                      {key === 'timeManagement' && '⏰ 時間管理'}
                      {key === 'dining' && '🍽️ 飲食提醒'}
                      {key === 'shopping' && '🛍️ 購物提醒'}
                      {key === 'safety' && '🛡️ 安全與禮儀'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      {tipList.map((tip, idx) => (
                        <li key={idx} className="flex gap-2 text-gray-700">
                          <span className="text-orange-600 font-bold flex-shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Budget Breakdown */}
              <Card className="bg-white/50 backdrop-blur-sm border-orange-200 sm:col-span-2">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">💰 消費預算估算</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    {budgetBreakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between py-1 sm:py-2 border-b border-orange-100 last:border-b-0">
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-gray-800 line-clamp-1">{item.item}</p>
                          <p className="text-xs text-gray-500">{item.note}</p>
                        </div>
                        <span className="font-bold text-green-600 flex-shrink-0 ml-2">{item.cost}</span>
                      </div>
                    ))}
                    <div className="mt-2 sm:mt-4 pt-2 sm:pt-4 border-t-2 border-orange-300 flex items-center justify-between">
                      <p className="font-bold text-gray-800">總計</p>
                      <p className="font-bold text-base sm:text-lg text-orange-600">80-130 新幣</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notes */}
              <Card className="bg-red-50 border-red-200 sm:col-span-2">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base flex items-center gap-2 text-red-800">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    ⚠️ 重要提醒
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-red-900">
                  <p>• 維拉瑪卡里亞曼興都廟中午 12:00-16:00 不開放</p>
                  <p>• 進入廟宇需脫鞋，進出前搖鈴表示尊重</p>
                  <p>• 帶現金方便支付小攤販（部分攤位不接受卡）</p>
                  <p>• 新加坡陽光強烈，做好防曬</p>
                  <p>• 全天步行，穿著舒適鞋類很重要</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-200 bg-white/50 backdrop-blur-sm mt-8 sm:mt-12">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">🇸🇬 新加坡小印度</h3>
              <p className="text-xs sm:text-sm text-gray-600">探索新加坡最具文化特色的社區，體驗印度文化、美食和購物的完整體驗。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">📍 主要景點</h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• 陳東齡故居</li>
                <li>• 竹腳中心</li>
                <li>• 小印度拱廊</li>
                <li>• 維拉瑪卡里亞曼興都廟</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">💡 實用信息</h3>
              <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                <li>• 總時間：8-10 小時</li>
                <li>• 人均預算：80-130 新幣</li>
                <li>• 難度等級：輕鬆</li>
                <li>• 適合全家族</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-600">
            <p>© 2026 小印度自助旅遊指南 | 為家族旅遊精心規劃</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
