/**
 * modern_template.js - Main JavaScript file for Modern Template Frappe App
 * Provides enhanced UI interactions and animations for a modern business application
 */

// Declare frappe variable
const frappe = window.frappe || {}

frappe.provide("modern_template")

// Declare modern_template variable
const modern_template = {
  // Initialize the Modern Template enhancements
  init: function () {
    // Apply on all pages
    this.setupGlobalEnhancements()

    // Apply page-specific enhancements
    this.setupPageSpecificEnhancements()

    // Initialize scroll animations
    this.initScrollAnimations()

    // Initialize interactive components
    this.initComponents()

    console.log("Modern Template UI enhancements initialized")
  },

  // Setup enhancements that apply to all pages
  setupGlobalEnhancements: function () {
    // Add modern styling to standard Frappe elements
    this.enhanceStandardElements()

    // Add smooth page transitions
    this.setupPageTransitions()

    // Enhance form interactions
    this.enhanceFormInteractions()

    // Add responsive behaviors
    this.setupResponsiveBehaviors()
  },

  // Apply page-specific enhancements based on current route
  setupPageSpecificEnhancements: function () {
    const route = frappe.get_route()

    if (!route || !route.length) return

    const pageType = route[0]

    switch (pageType) {
      case "List":
        this.enhanceListView()
        break
      case "Form":
        this.enhanceFormView()
        break
      case "Dashboard":
      case "dashboard":
        this.enhanceDashboard()
        break
      case "Report":
        this.enhanceReportView()
        break
      case "Workspaces":
      case "workspace":
        this.enhanceWorkspace()
        break
    }
  },

  // Add modern styling to standard Frappe elements
  enhanceStandardElements: () => {
    // Add shadow and hover effects to cards
    $(".widget").addClass("modern-temp-card")

    // Enhance buttons with hover animations
    $(".btn").addClass("modern-temp-btn")

    // Add subtle animations to dropdown menus
    $(".dropdown-menu").addClass("fade-in-down")

    // Enhance navigation with active state animations
    $(".nav-link").addClass("modern-temp-nav-link")
  },

  // Setup smooth page transitions
  setupPageTransitions: () => {
    // Add transition class to main content container
    $(".page-container").addClass("modern-temp-page-transition")

    // Listen for page changes
    $(document).on("page-change", () => {
      $(".page-container").removeClass("loaded").addClass("loading")

      setTimeout(() => {
        $(".page-container").removeClass("loading").addClass("loaded")
      }, 50)
    })
  },

  // Enhance form interactions with animations and feedback
  enhanceFormInteractions: () => {
    // Add focus animations to form fields
    $(document).on("focus", ".form-control", function () {
      $(this).closest(".frappe-control").addClass("focused")
    })

    $(document).on("blur", ".form-control", function () {
      $(this).closest(".frappe-control").removeClass("focused")
    })

    // Add subtle animation to form sections
    $(".form-section").addClass("fade-in-up")

    // Add animation to form save button
    $(".primary-action").addClass("btn-pulse-on-change")
  },

  // Setup responsive behaviors
  setupResponsiveBehaviors: function () {
    // Handle responsive menu
    this.setupResponsiveMenu()

    // Handle responsive tables
    this.setupResponsiveTables()

    // Handle responsive forms
    this.setupResponsiveForms()
  },

  // Setup responsive menu behavior
  setupResponsiveMenu: () => {
    // Add toggle functionality for mobile menu
    $(document).on("click", ".modern-temp-menu-toggle", () => {
      $(".modern-temp-sidebar").toggleClass("open")
    })

    // Close menu when clicking outside on mobile
    $(document).on("click", (e) => {
      if ($(window).width() < 768) {
        if (
          !$(e.target).closest(".modern-temp-sidebar").length &&
          !$(e.target).closest(".modern-temp-menu-toggle").length
        ) {
          $(".modern-temp-sidebar").removeClass("open")
        }
      }
    })
  },

  // Setup responsive tables
  setupResponsiveTables: () => {
    // Add horizontal scroll wrapper to wide tables on small screens
    $(".datatable").each(function () {
      if (!$(this).parent().hasClass("modern-temp-table-responsive")) {
        $(this).wrap('<div class="modern-temp-table-responsive"></div>')
      }
    })
  },

  // Setup responsive forms
  setupResponsiveForms: () => {
    // Adjust form layouts on smaller screens
    if ($(window).width() < 768) {
      $(".form-column").removeClass("col-sm-6").addClass("col-sm-12")
    }

    // Reapply on window resize
    $(window).resize(() => {
      if ($(window).width() < 768) {
        $(".form-column").removeClass("col-sm-6").addClass("col-sm-12")
      } else {
        // Restore original layout on larger screens
        $(".form-column.section-column").removeClass("col-sm-12").addClass("col-sm-6")
      }
    })
  },

  // Initialize scroll-triggered animations
  initScrollAnimations: () => {
    // Only initialize if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
      const animateElements = document.querySelectorAll(
        ".fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in",
      )

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate")
              // Unobserve after animation is triggered
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      animateElements.forEach((element) => {
        observer.observe(element)
      })
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      $(".fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in").addClass("animate")
    }
  },

  // Initialize interactive components
  initComponents: function () {
    this.initTooltips()
    this.initCounters()
    this.initCharts()
    this.initCustomDropdowns()
  },

  // Initialize enhanced tooltips
  initTooltips: () => {
    // Add custom tooltips with animations
    $('[data-toggle="tooltip"]').each(function () {
      $(this).tooltip({
        template:
          '<div class="tooltip modern-temp-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        animation: true,
      })
    })
  },

  // Initialize animated counters
  initCounters: () => {
    // Animate number counters on scroll
    $(".modern-temp-counter").each(function () {
      const $this = $(this)
      const countTo = $this.attr("data-count")

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                $({ countNum: 0 }).animate(
                  {
                    countNum: countTo,
                  },
                  {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                      $this.text(Math.floor(this.countNum))
                    },
                    complete: function () {
                      $this.text(this.countNum)
                    },
                  },
                )
                observer.unobserve(entry.target)
              }
            })
          },
          {
            threshold: 0.1,
          },
        )

        observer.observe(this)
      }
    })
  },

  // Initialize enhanced charts
  initCharts: () => {
    // Add animations to charts when they come into view
    $(".modern-temp-chart").each(function () {
      $(this).addClass("fade-in")
    })
  },

  // Initialize custom dropdown menus
  initCustomDropdowns: () => {
    // Add custom animation to dropdown menus
    $(".dropdown").on("show.bs.dropdown", function () {
      $(this).find(".dropdown-menu").first().addClass("showing")

      setTimeout(() => {
        $(this).find(".dropdown-menu").first().addClass("show")
      }, 10)
    })

    $(".dropdown").on("hide.bs.dropdown", function () {
      $(this).find(".dropdown-menu").first().removeClass("show")

      $(this)
        .find(".dropdown-menu")
        .first()
        .one("transitionend", function () {
          $(this).removeClass("showing")
        })
    })
  },

  // Enhance List View with modern UI elements
  enhanceListView: () => {
    // Add hover effects to list rows
    $(".list-row").addClass("modern-temp-list-row")

    // Add animation to list filters
    $(".filter-box").addClass("fade-in")

    // Add animation to list actions
    $(".list-row-action").addClass("fade-in-right")

    // Add staggered animation to list rows
    $(".list-row").each(function (index) {
      $(this)
        .addClass("fade-in-up")
        .css("animation-delay", index * 0.05 + "s")
    })
  },

  // Enhance Form View with modern UI elements
  enhanceFormView: () => {
    // Add animations to form sections
    $(".form-section").each(function (index) {
      $(this)
        .addClass("fade-in-up")
        .css("animation-delay", index * 0.1 + "s")
    })

    // Add subtle animation to field focus
    $(document).on("focus", ".form-control", function () {
      $(this).addClass("focused")
    })

    $(document).on("blur", ".form-control", function () {
      $(this).removeClass("focused")
    })

    // Add animation to form buttons
    $(".form-footer").addClass("fade-in")

    // Add animation to comments and timeline
    $(".timeline-item").addClass("fade-in-left")
  },

  // Enhance Dashboard with modern UI elements
  enhanceDashboard: () => {
    // Add animations to dashboard cards
    $(".dashboard-card").each(function (index) {
      $(this)
        .addClass("fade-in-up")
        .css("animation-delay", index * 0.1 + "s")
    })

    // Add hover effects to dashboard cards
    $(".dashboard-card").addClass("modern-temp-dashboard-card")

    // Add animations to charts
    $(".dashboard-chart").addClass("fade-in")

    // Add animations to number cards
    $(".dashboard-number-card").addClass("scale-in")
  },

  // Enhance Report View with modern UI elements
  enhanceReportView: () => {
    // Add animations to report filters
    $(".report-filter").addClass("fade-in-left")

    // Add animations to report charts
    $(".report-chart").addClass("fade-in")

    // Add animations to report tables
    $(".report-table").addClass("fade-in-up")
  },

  // Enhance Workspace with modern UI elements
  enhanceWorkspace: () => {
    // Add animations to shortcut cards
    $(".shortcut-card").each(function (index) {
      $(this)
        .addClass("fade-in-up")
        .css("animation-delay", index * 0.05 + "s")
    })

    // Add hover effects to shortcut cards
    $(".shortcut-card").addClass("modern-temp-shortcut-card")

    // Add animations to widgets
    $(".widget").each(function (index) {
      $(this)
        .addClass("fade-in-up")
        .css("animation-delay", (index + 5) * 0.05 + "s")
    })
  },
}

// Declare $ variable
const $ = window.jQuery || {}

// Initialize Modern Template enhancements when Frappe is ready
$(document).on("app_ready", () => {
  modern_template.init()
})

// Re-initialize on page change
$(document).on("page_loaded", () => {
  modern_template.setupPageSpecificEnhancements()
  modern_template.initScrollAnimations()
})
