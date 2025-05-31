import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Printer,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react"

export default function ListsPage() {
  const customers = [
    {
      id: "CUST-001",
      name: "Acme Corporation",
      email: "contact@acme.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      created: "2024-01-15",
      revenue: 125000,
    },
    {
      id: "CUST-002",
      name: "TechStart Inc",
      email: "hello@techstart.com",
      phone: "+1 (555) 234-5678",
      status: "Active",
      created: "2024-01-20",
      revenue: 89000,
    },
    {
      id: "CUST-003",
      name: "Global Solutions",
      email: "info@globalsol.com",
      phone: "+1 (555) 345-6789",
      status: "Inactive",
      created: "2024-01-25",
      revenue: 45000,
    },
    {
      id: "CUST-004",
      name: "Innovation Labs",
      email: "team@innovlabs.com",
      phone: "+1 (555) 456-7890",
      status: "Pending",
      created: "2024-02-01",
      revenue: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* List Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-in slide-in-from-top duration-500">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customer List</h1>
            <p className="text-gray-600 mt-1">Manage your customer records</p>
          </div>
          <div className="flex items-center gap-3">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Customer
            </Button>
            <Select>
              <SelectTrigger className="w-32">
                <MoreHorizontal className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="export">
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </div>
                </SelectItem>
                <SelectItem value="import">
                  <div className="flex items-center">
                    <Upload className="h-4 w-4 mr-2" />
                    Import
                  </div>
                </SelectItem>
                <SelectItem value="print">
                  <div className="flex items-center">
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-in slide-in-from-bottom duration-500 delay-100">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search customers..." className="pl-10" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-3 animate-in slide-in-from-bottom duration-500 delay-200">
          <span className="text-sm font-medium text-gray-700">Active Filters:</span>
          <Badge variant="secondary" className="gap-1">
            Status: Active
            <button className="ml-1 hover:bg-gray-300 rounded-full w-4 h-4 flex items-center justify-center text-xs">
              ×
            </button>
          </Badge>
          <Button variant="ghost" size="sm" className="text-blue-600">
            Clear All
          </Button>
        </div>

        {/* List Table */}
        <Card className="animate-in slide-in-from-bottom duration-500 delay-300">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 w-12">
                      <Checkbox />
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">
                      Customer ID
                      <ArrowUpDown className="inline h-4 w-4 ml-1" />
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">
                      Name
                      <ArrowUpDown className="inline h-4 w-4 ml-1" />
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">Email</th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">Phone</th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">
                      Created
                    </th>
                    <th className="text-left p-4 font-medium text-gray-900 cursor-pointer hover:bg-gray-100">
                      Revenue
                    </th>
                    <th className="text-center p-4 font-medium text-gray-900 w-24">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr
                      key={customer.id}
                      className={`border-b hover:bg-gray-50 transition-colors animate-in slide-in-from-bottom duration-300 delay-${(index + 1) * 100}`}
                    >
                      <td className="p-4">
                        <Checkbox />
                      </td>
                      <td className="p-4 font-medium text-blue-600">{customer.id}</td>
                      <td className="p-4 font-medium text-gray-900">{customer.name}</td>
                      <td className="p-4 text-gray-600">{customer.email}</td>
                      <td className="p-4 text-gray-600">{customer.phone}</td>
                      <td className="p-4">
                        <Badge className={getStatusColor(customer.status)}>{customer.status}</Badge>
                      </td>
                      <td className="p-4 text-gray-600">{formatDate(customer.created)}</td>
                      <td className="p-4 font-medium text-gray-900">{formatCurrency(customer.revenue)}</td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-in slide-in-from-bottom duration-500 delay-400">
          <div className="text-sm text-gray-600">Showing 1 to 4 of 4 entries</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-blue-600 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Show:</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-600">per page</span>
          </div>
        </div>
      </div>
    </div>
  )
}
