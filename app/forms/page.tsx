import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, MoreHorizontal, Printer, Mail, Copy, Trash2, ChevronUp, Plus, Search } from "lucide-react"

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Form Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 animate-in slide-in-from-top duration-500">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customer Form</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm text-gray-600">Customer: CUST-2024-001</span>
              <Badge variant="secondary">Draft</Badge>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Select>
              <SelectTrigger className="w-32">
                <MoreHorizontal className="h-4 w-4" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="print">
                  <div className="flex items-center">
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </div>
                </SelectItem>
                <SelectItem value="email">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </div>
                </SelectItem>
                <SelectItem value="duplicate">
                  <div className="flex items-center">
                    <Copy className="h-4 w-4 mr-2" />
                    Duplicate
                  </div>
                </SelectItem>
                <SelectItem value="delete">
                  <div className="flex items-center">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Form Tabs */}
        <Tabs defaultValue="details" className="animate-in slide-in-from-bottom duration-500 delay-100">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Customer Details</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6 mt-6">
            {/* Basic Information Section */}
            <Card className="animate-in slide-in-from-bottom duration-500 delay-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Enter the customer's basic details</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="customer-name">Customer Name *</Label>
                  <Input id="customer-name" placeholder="Enter customer name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customer-type">Customer Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select customer type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual</SelectItem>
                      <SelectItem value="company">Company</SelectItem>
                      <SelectItem value="government">Government</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="customer@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Additional notes about the customer" rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Section */}
            <Card className="animate-in slide-in-from-bottom duration-500 delay-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Additional contact details</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ChevronUp className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax ID</Label>
                  <Input id="tax-id" placeholder="Enter tax identification number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="territory">Territory</Label>
                  <div className="flex gap-2">
                    <Input id="territory" placeholder="Select territory" className="flex-1" />
                    <Button variant="outline" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Customer Contacts Table */}
            <Card className="animate-in slide-in-from-bottom duration-500 delay-400">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Customer Contacts</CardTitle>
                    <CardDescription>Manage contact persons for this customer</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Contact
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3 font-medium text-gray-900">Name</th>
                        <th className="text-left p-3 font-medium text-gray-900">Email</th>
                        <th className="text-left p-3 font-medium text-gray-900">Phone</th>
                        <th className="text-left p-3 font-medium text-gray-900">Designation</th>
                        <th className="text-center p-3 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t animate-in slide-in-from-bottom duration-300 delay-100">
                        <td className="p-3">
                          <Input placeholder="Contact name" className="border-0 p-0 h-auto" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="email@example.com" className="border-0 p-0 h-auto" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="Phone number" className="border-0 p-0 h-auto" />
                        </td>
                        <td className="p-3">
                          <Input placeholder="Job title" className="border-0 p-0 h-auto" />
                        </td>
                        <td className="p-3 text-center">
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </td>
                      </tr>
                      <tr className="border-t text-center text-gray-500">
                        <td colSpan={5} className="p-8">
                          No contacts added yet
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="address" className="space-y-6 mt-6">
            <Card className="animate-in slide-in-from-bottom duration-500 delay-200">
              <CardHeader>
                <CardTitle>Address Information</CardTitle>
                <CardDescription>Customer's billing and shipping addresses</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="address-line1">Address Line 1</Label>
                  <Input id="address-line1" placeholder="Street address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address-line2">Address Line 2</Label>
                  <Input id="address-line2" placeholder="Apartment, suite, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="City name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="State or province" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal-code">Postal Code</Label>
                  <Input id="postal-code" placeholder="ZIP or postal code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card className="animate-in slide-in-from-bottom duration-500 delay-200">
              <CardHeader>
                <CardTitle>Customer Settings</CardTitle>
                <CardDescription>Configure customer preferences and settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="is-frozen" />
                  <Label htmlFor="is-frozen">Freeze customer account</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="is-internal" />
                  <Label htmlFor="is-internal">Internal customer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="allow-credit" />
                  <Label htmlFor="allow-credit">Allow credit transactions</Label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="credit-limit">Credit Limit</Label>
                    <Input id="credit-limit" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-terms">Payment Terms</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="net-30">Net 30</SelectItem>
                        <SelectItem value="net-60">Net 60</SelectItem>
                        <SelectItem value="cash">Cash on Delivery</SelectItem>
                        <SelectItem value="advance">Advance Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Form Footer */}
        <div className="flex justify-end gap-3 pt-6 border-t animate-in slide-in-from-bottom duration-500 delay-500">
          <Button variant="outline">Cancel</Button>
          <Button className="animate-pulse">
            <Save className="h-4 w-4 mr-2" />
            Save Customer
          </Button>
        </div>
      </div>
    </div>
  )
}
