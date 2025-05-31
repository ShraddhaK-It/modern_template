from . import __version__ as app_version

app_name = "modern_template"
app_title = "Modern Template"
app_publisher = "Your Company"
app_description = "Modern Business Template for Frappe"
app_email = "your.email@example.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = [
    "/assets/modern_template/css/modern_template.css",
    "/assets/modern_template/css/animations.css"
]
app_include_js = [
    "/assets/modern_template/js/modern_template.js"
]

# include js, css files in header of web template
web_include_css = [
    "/assets/modern_template/css/modern_template.css",
    "/assets/modern_template/css/animations.css"
]
web_include_js = [
    "/assets/modern_template/js/modern_template.js"
]

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "home"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "modern_template.utils.jinja_methods",
#	"filters": "modern_template.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "modern_template.install.before_install"
# after_install = "modern_template.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "modern_template.uninstall.before_uninstall"
# after_uninstall = "modern_template.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "modern_template.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"modern_template.tasks.all"
#	],
#	"daily": [
#		"modern_template.tasks.daily"
#	],
#	"hourly": [
#		"modern_template.tasks.hourly"
#	],
#	"weekly": [
#		"modern_template.tasks.weekly"
#	],
#	"monthly": [
#		"modern_template.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "modern_template.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "modern_template.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "modern_template.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["modern_template.utils.before_request"]
# after_request = ["modern_template.utils.after_request"]

# Job Events
# ----------
# before_job = ["modern_template.utils.before_job"]
# after_job = ["modern_template.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"modern_template.auth.validate"
# ]

# Translation
# --------------------------------

# Make link fields search translated document names for these DocTypes
# Recommended only for DocTypes which have limited documents with untranslated names
# For example: Role, Gender, etc.
# translated_search_doctypes = []
