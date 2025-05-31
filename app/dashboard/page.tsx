import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Package,
  RefreshCw,
  MoreHorizontal,
  FileText,
  BarChart3,
} from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$128,745",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
    },
    {
      title: "New Orders",
      value: "356",
      change: "+8.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "New Customers",
      value: "42",
      change: "-2.7%",
      trend: "down",
      icon: Users,
      color: "text-orange-600 bg-orange-100",
    },
    {
      title: "Pending Tasks",
      value: "17",
      change: "0%",
      trend: "neutral",
      icon: CheckCircle,
      color: "text-purple-600 bg-purple-100",
    },
  ]

  const activities = [
    {
      type: "sale",
      title: "New Sale",
      description: "Order #38294 was placed for $1,200",
      time: "2 hours ago",
      icon: DollarSign,
      color: "text-green-600 bg-green-100",
    },
    {
      type: "customer",
      title: "New Customer",
      description: "John Smith registered a new account",
      time: "5 hours ago",
      icon: Users,
      color: "text-blue-600 bg-blue-100",
    },
    {
      type: "task",
      title: "Task Completed",
      description: "Inventory check was completed by Jane",
      time: "Yesterday",
      icon: CheckCircle,
      color: "text-green-600 bg-green-100",
    },
    {
      type: "alert",
      title: "Low Stock Alert",
      description: "Product SKU-7829 is running low on stock",
      time: "Yesterday",
      icon: AlertCircle,
      color: "text-red-600 bg-red-100",
    },
  ]

  const quickActions = [
    { title: "New Order", icon: ShoppingCart, color: "text-blue-600 bg-blue-100" },
    { title: "Add Product", icon: Package, color: "text-green-600 bg-green-100" },
    { title: "Create Invoice", icon: FileText, color: "text-purple-600 bg-purple-100" },
    { title: "Generate Report", icon: BarChart3, color: "text-orange-600 bg-orange-100" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-in slide-in-from-top duration-500">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back! Here's an overview of your business performance</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="month">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 animate-in slide-in-from-bottom delay-${(index + 1) * 100}`}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center text-sm mt-1">
                  {stat.trend === "up" && <TrendingUp className="h-4 w-4 text-green-600 mr-1" />}
                  {stat.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600 mr-1" />}
                  <span
                    className={`font-medium ${
                      stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-gray-500 ml-1">vs last period</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="animate-in slide-in-from-left duration-700 delay-500">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Revenue Trends</CardTitle>
                <CardDescription>Monthly revenue over time</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Chart visualization would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in slide-in-from-right duration-700 delay-600">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>Distribution of sales across categories</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Export
                </Button>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-2"></div>
                  <p>Donut chart would go here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="animate-in slide-in-from-bottom duration-700 delay-700">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates and notifications</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors animate-in slide-in-from-right duration-500 delay-${(index + 1) * 100}`}
                >
                  <div className={`p-2 rounded-full ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900">{activity.title}</h4>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="animate-in slide-in-from-bottom duration-700 delay-800">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Card
                key={index}
                className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in scale-in-50 delay-${(index + 1) * 100}`}
              >
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className={`p-3 rounded-full ${action.color} mb-3`}>
                    <action.icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-medium text-gray-900">{action.title}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
