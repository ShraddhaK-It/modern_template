import frappe
import os
import json

def get_theme_color(name="primary"):
    """Get theme color from configuration"""
    colors = {
        "primary": "#4C78DD",
        "secondary": "#61AFEF",
        "success": "#98C379",
        "warning": "#E5C07B",
        "danger": "#E06C75",
        "info": "#56B6C2",
        "light": "#F8F9FA",
        "dark": "#282C34"
    }
    return colors.get(name, colors["primary"])

def format_date(date_str, format_str=None):
    """Format date string with optional format"""
    if not date_str:
        return ""
    
    if not format_str:
        format_str = frappe.db.get_default("date_format") or "yyyy-mm-dd"
    
    return frappe.utils.formatdate(date_str, format_str)

def format_currency(value, currency=None):
    """Format currency with proper symbol"""
    if not currency:
        currency = frappe.db.get_default("currency")
    
    return frappe.utils.fmt_money(value, currency=currency)

@frappe.whitelist()
def get_dashboard_data():
    """Get dashboard statistics and data"""
    return {
        "stats": [
            {
                "title": "Total Revenue",
                "value": 128745,
                "change": 12.5,
                "trend": "up"
            },
            {
                "title": "New Orders", 
                "value": 356,
                "change": 8.3,
                "trend": "up"
            },
            {
                "title": "New Customers",
                "value": 42,
                "change": -2.7,
                "trend": "down"
            },
            {
                "title": "Pending Tasks",
                "value": 17,
                "change": 0,
                "trend": "neutral"
            }
        ],
        "activities": [
            {
                "type": "sale",
                "title": "New Sale",
                "description": "Order #38294 was placed for $1,200",
                "time": "2 hours ago"
            },
            {
                "type": "customer",
                "title": "New Customer", 
                "description": "John Smith registered a new account",
                "time": "5 hours ago"
            },
            {
                "type": "task",
                "title": "Task Completed",
                "description": "Inventory check was completed by Jane",
                "time": "Yesterday"
            },
            {
                "type": "alert",
                "title": "Low Stock Alert",
                "description": "Product SKU-7829 is running low on stock",
                "time": "Yesterday"
            }
        ]
    }
