"use client";

import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedEvent, setSelectedEvent] = useState("wedding-2024");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const events = [
    {
      id: "wedding-2024",
      name: "Sarah & Mike's Wedding",
      date: "2024-01-15",
      photos: 247,
      guests: 85,
      status: "active",
    },
    {
      id: "corp-event",
      name: "Annual Company Retreat",
      date: "2024-01-20",
      photos: 156,
      guests: 120,
      status: "active",
    },
    {
      id: "birthday-party",
      name: "Emma's 25th Birthday",
      date: "2024-01-10",
      photos: 89,
      guests: 35,
      status: "completed",
    },
  ];

  const currentEvent = events.find((e) => e.id === selectedEvent);

  const photos = [
    {
      id: 1,
      url: "/placeholder.svg?height=200&width=200",
      likes: 12,
      downloads: 5,
    },
    {
      id: 2,
      url: "/placeholder.svg?height=200&width=200",
      likes: 8,
      downloads: 3,
    },
    {
      id: 3,
      url: "/placeholder.svg?height=200&width=200",
      likes: 15,
      downloads: 7,
    },
    {
      id: 4,
      url: "/placeholder.svg?height=200&width=200",
      likes: 6,
      downloads: 2,
    },
    {
      id: 5,
      url: "/placeholder.svg?height=200&width=200",
      likes: 11,
      downloads: 4,
    },
    {
      id: 6,
      url: "/placeholder.svg?height=200&width=200",
      likes: 9,
      downloads: 6,
    },
    {
      id: 7,
      url: "/placeholder.svg?height=200&width=200",
      likes: 13,
      downloads: 8,
    },
    {
      id: 8,
      url: "/placeholder.svg?height=200&width=200",
      likes: 7,
      downloads: 3,
    },
  ];

  const sidebarStyle = {
    width: "280px",
    height: "100vh",
    background: "#1a1a1a",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
    transform:
      window.innerWidth < 1024
        ? sidebarOpen
          ? "translateX(0)"
          : "translateX(-100%)"
        : "translateX(0)",
    transition: "transform 0.3s ease",
  };

  const mainContentStyle = {
    marginLeft: window.innerWidth >= 1024 ? "280px" : "0",
    minHeight: "100vh",
    background: "#f8fafc",
    display: "flex",
    flexDirection: "column",
    width: window.innerWidth >= 1024 ? "calc(100% - 280px)" : "100%",
  };

  const headerStyle = {
    background: "white",
    padding: "1rem 2rem",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const contentStyle = {
    padding: "2rem",
    flex: 1,
    maxWidth: "100%",
    overflow: "hidden",
  };

  const statsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
    width: "100%",
  };

  const statCardStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "1.5rem",
    border: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  };

  const qrSectionStyle = {
    background: "white",
    borderRadius: "12px",
    padding: "2rem",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    marginBottom: "2rem",
  };

  return (
    <div
      style={{
        display: "flex",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={{ padding: "1.5rem", borderBottom: "1px solid #333" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <span style={{ fontSize: "1.5rem" }}>📸</span>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GatherCam
              </span>
            </div>
            <button
              style={{
                display: window.innerWidth < 1024 ? "block" : "none",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "1.25rem",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>

        <nav style={{ flex: 1, padding: "1rem" }}>
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              border: "none",
              background:
                activeTab === "overview"
                  ? "linear-gradient(135deg, #10b981, #06b6d4)"
                  : "transparent",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "0.5rem",
              color: activeTab === "overview" ? "white" : "#9ca3af",
              transition: "all 0.2s ease",
            }}
            onClick={() => setActiveTab("overview")}
          >
            <span style={{ fontSize: "1.25rem" }}>📊</span>
            <span style={{ fontWeight: "500" }}>Overview</span>
          </button>

          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              border: "none",
              background:
                activeTab === "photos"
                  ? "linear-gradient(135deg, #10b981, #06b6d4)"
                  : "transparent",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "0.5rem",
              color: activeTab === "photos" ? "white" : "#9ca3af",
              transition: "all 0.2s ease",
            }}
            onClick={() => setActiveTab("photos")}
          >
            <span style={{ fontSize: "1.25rem" }}>🖼️</span>
            <span style={{ fontWeight: "500" }}>Photos</span>
          </button>

          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              border: "none",
              background:
                activeTab === "events"
                  ? "linear-gradient(135deg, #10b981, #06b6d4)"
                  : "transparent",
              borderRadius: "8px",
              cursor: "pointer",
              marginBottom: "0.5rem",
              color: activeTab === "events" ? "white" : "#9ca3af",
              transition: "all 0.2s ease",
            }}
            onClick={() => setActiveTab("events")}
          >
            <span style={{ fontSize: "1.25rem" }}>🎉</span>
            <span style={{ fontWeight: "500" }}>Events</span>
          </button>
        </nav>

        <div style={{ padding: "1rem", borderTop: "1px solid #333" }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "600",
                fontSize: "0.875rem",
              }}
            >
              JD
            </div>
            <div>
              <div
                style={{
                  fontWeight: "600",
                  color: "white",
                  fontSize: "0.875rem",
                }}
              >
                John Doe
              </div>
              <div style={{ color: "#9ca3af", fontSize: "0.75rem" }}>
                john@example.com
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={mainContentStyle}>
        {/* Header */}
        <header style={headerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              style={{
                display: window.innerWidth < 1024 ? "block" : "none",
                background: "none",
                border: "none",
                fontSize: "1.25rem",
                cursor: "pointer",
                padding: "0.5rem",
                borderRadius: "8px",
              }}
              onClick={() => setSidebarOpen(true)}
            >
              ☰
            </button>
            <h1
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "#1e293b",
                margin: 0,
              }}
            >
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "photos" && "Photo Gallery"}
              {activeTab === "events" && "Event Management"}
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <select
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.target.value)}
              style={{
                padding: "0.5rem 1rem",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                background: "white",
                color: "#1e293b",
                fontWeight: "500",
                cursor: "pointer",
                minWidth: "200px",
              }}
            >
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
            <button
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                color: "white",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              + New Event
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div style={contentStyle}>
          {activeTab === "overview" && (
            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              {/* Stats Cards */}
              <div style={statsGridStyle}>
                <div
                  style={{
                    ...statCardStyle,
                    ":hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                  onClick={() => setActiveTab("photos")}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    📸
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                        lineHeight: 1,
                      }}
                    >
                      {currentEvent?.photos || 0}
                    </div>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Total Photos
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#10b981",
                      }}
                    >
                      +12 today • Click to view
                    </div>
                  </div>
                </div>

                <div style={statCardStyle}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    👥
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                        lineHeight: 1,
                      }}
                    >
                      {currentEvent?.guests || 0}
                    </div>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Active Guests
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#10b981",
                      }}
                    >
                      +5 online
                    </div>
                  </div>
                </div>

                <div style={statCardStyle}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #f59e0b, #f97316)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    ⬇️
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                        lineHeight: 1,
                      }}
                    >
                      1,234
                    </div>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Downloads
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#10b981",
                      }}
                    >
                      +89 today
                    </div>
                  </div>
                </div>

                <div style={statCardStyle}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #ef4444, #dc2626)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    💾
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "2rem",
                        fontWeight: "700",
                        color: "#1e293b",
                        lineHeight: 1,
                      }}
                    >
                      2.4 GB
                    </div>
                    <div
                      style={{
                        color: "#64748b",
                        fontSize: "0.875rem",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Storage Used
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#64748b",
                      }}
                    >
                      of 10 GB
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div style={{ ...qrSectionStyle, marginBottom: "2rem" }}>
                <h3
                  style={{
                    marginBottom: "1.5rem",
                    color: "#1e293b",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Quick Actions
                </h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <button
                    style={{
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onClick={() => setActiveTab("photos")}
                  >
                    🖼️ View All Photos
                  </button>
                  <button
                    style={{
                      background: "white",
                      color: "#64748b",
                      border: "1px solid #e2e8f0",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    ⬇️ Download All Photos
                  </button>
                  <button
                    style={{
                      background: "white",
                      color: "#64748b",
                      border: "1px solid #e2e8f0",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onClick={() => setActiveTab("events")}
                  >
                    🎉 Manage Events
                  </button>
                </div>
              </div>

              {/* QR Code Section */}
              <div style={qrSectionStyle}>
                <h3
                  style={{
                    marginBottom: "1.5rem",
                    color: "#1e293b",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Event QR Code
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    flexDirection: window.innerWidth < 768 ? "column" : "row",
                    textAlign: window.innerWidth < 768 ? "center" : "left",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "white",
                      border: "2px solid #e2e8f0",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "2px",
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          style={{
                            background: "#1e293b",
                            borderRadius: "2px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#64748b", marginBottom: "1rem" }}>
                      Share this QR code with your guests
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        justifyContent:
                          window.innerWidth < 768 ? "center" : "flex-start",
                      }}
                    >
                      <button
                        style={{
                          background: "white",
                          color: "#64748b",
                          border: "1px solid #e2e8f0",
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Download PNG
                      </button>
                      <button
                        style={{
                          background:
                            "linear-gradient(135deg, #10b981, #06b6d4)",
                          color: "white",
                          border: "none",
                          padding: "0.5rem 1rem",
                          borderRadius: "8px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div style={qrSectionStyle}>
                <h3
                  style={{
                    marginBottom: "1.5rem",
                    color: "#1e293b",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  Recent Activity
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      icon: "📤",
                      text: "Sarah uploaded 5 new photos",
                      time: "2 minutes ago",
                      bg: "linear-gradient(135deg, #10b981, #06b6d4)",
                    },
                    {
                      icon: "📥",
                      text: "Mike downloaded the full album",
                      time: "15 minutes ago",
                      bg: "linear-gradient(135deg, #f59e0b, #f97316)",
                    },
                    {
                      icon: "👋",
                      text: "Emma joined the event",
                      time: "1 hour ago",
                      bg: "linear-gradient(135deg, #8b5cf6, #a855f7)",
                    },
                    {
                      icon: "📤",
                      text: "Alex uploaded 12 new photos",
                      time: "2 hours ago",
                      bg: "linear-gradient(135deg, #10b981, #06b6d4)",
                    },
                  ].map((activity, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "1rem",
                        background: "#f8fafc",
                        borderRadius: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "2.5rem",
                          height: "2.5rem",
                          borderRadius: "8px",
                          background: activity.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1rem",
                          flexShrink: 0,
                        }}
                      >
                        {activity.icon}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            color: "#1e293b",
                            fontWeight: "500",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {activity.text}
                        </div>
                        <div style={{ color: "#64748b", fontSize: "0.875rem" }}>
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "photos" && (
            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    style={{
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Download All
                  </button>
                  <button
                    style={{
                      background: "white",
                      color: "#64748b",
                      border: "1px solid #e2e8f0",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Select Multiple
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search photos..."
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    background: "white",
                    maxWidth: "300px",
                    width: "100%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1rem",
                  width: "100%",
                }}
              >
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        aspectRatio: "1",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={photo.url || "/placeholder.svg"}
                        alt={`Photo ${photo.id}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        padding: "0.75rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#64748b", fontSize: "0.875rem" }}>
                        ❤️ {photo.likes}
                      </span>
                      <span style={{ color: "#64748b", fontSize: "0.875rem" }}>
                        ⬇️ {photo.downloads}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <div style={{ maxWidth: "100%", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "1.5rem",
                }}
              >
                <button
                  style={{
                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  + Create New Event
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {events.map((event) => (
                  <div
                    key={event.id}
                    style={{
                      background: "white",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      border: "1px solid #e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: "250px" }}>
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "600",
                          color: "#1e293b",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {event.name}
                      </h3>
                      <p style={{ color: "#64748b", marginBottom: "0.75rem" }}>
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{ color: "#64748b", fontSize: "0.875rem" }}
                        >
                          📸 {event.photos} photos
                        </span>
                        <span
                          style={{ color: "#64748b", fontSize: "0.875rem" }}
                        >
                          👥 {event.guests} guests
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          padding: "0.25rem 0.75rem",
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                          background:
                            event.status === "active" ? "#dcfce7" : "#f3f4f6",
                          color:
                            event.status === "active" ? "#166534" : "#374151",
                        }}
                      >
                        {event.status}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          style={{
                            background: "white",
                            color: "#64748b",
                            border: "1px solid #e2e8f0",
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          View
                        </button>
                        <button
                          style={{
                            background: "white",
                            color: "#64748b",
                            border: "1px solid #e2e8f0",
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            fontWeight: "600",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && window.innerWidth < 1024 && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
