import { useState } from "react"
import {Link} from "react-router-dom"

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState("personal")
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Navigation Header */}
      <nav
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          padding: "1rem 0",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Link
              to="/dashboard"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                textDecoration: "none",
                color: "#1e293b",
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              <span style={{ fontSize: "1.5rem" }}>📸</span>
              <span
                style={{
                  background: "linear-gradient(135deg, #10b981, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                GatherCam
              </span>
            </Link>
            <span style={{ color: "#64748b", fontSize: "1.5rem" }}>→</span>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e293b", margin: 0 }}>Profile Settings</h1>
          </div>
          <Link
            to="/dashboard"
            style={{
              background: "linear-gradient(135deg, #10b981, #06b6d4)",
              color: "white",
              textDecoration: "none",
              padding: "0.5rem 1.5rem",
              borderRadius: "25px",
              fontWeight: "600",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            ← Back to Dashboard
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Profile Hero Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #10b981, #06b6d4)",
            borderRadius: "24px",
            padding: "3rem",
            marginBottom: "3rem",
            position: "relative",
            overflow: "hidden",
            animation: "slideInDown 0.8s ease-out",
          }}
        >
          {/* Animated Background Elements */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "300px",
              height: "300px",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              animation: "float 8s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-5%",
              width: "200px",
              height: "200px",
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "50%",
              animation: "float 10s ease-in-out infinite reverse",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "20%",
              width: "100px",
              height: "100px",
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: "50%",
              animation: "float 6s ease-in-out infinite 2s",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                flexWrap: "wrap",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              {/* Profile Avatar */}
              <div
                style={{
                  position: "relative",
                  animation: "slideInLeft 0.8s ease-out 0.2s both",
                }}
              >
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    background: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4rem",
                    color: "white",
                    border: "6px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    animation: "profilePulse 4s ease-in-out infinite",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)"
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  👤
                </div>
                <button
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    width: "40px",
                    height: "40px",
                    background: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                    e.currentTarget.style.background = "white"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)"
                  }}
                >
                  📷
                </button>
              </div>

              {/* Profile Info */}
              <div style={{ flex: 1, minWidth: "300px", textAlign: "left" }}>
                <h1
                  style={{
                    fontSize: "3rem",
                    fontWeight: "800",
                    color: "white",
                    marginBottom: "1rem",
                    animation: "slideInRight 0.8s ease-out 0.4s both",
                  }}
                >
                  John Doe
                </h1>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.3rem",
                    marginBottom: "2rem",
                    animation: "slideInRight 0.8s ease-out 0.6s both",
                  }}
                >
                  Event Organizer & Photography Enthusiast
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                    gap: "2rem",
                    animation: "slideInRight 0.8s ease-out 0.8s both",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "700", color: "white", marginBottom: "0.5rem" }}>
                      24
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>Events Created</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "700", color: "white", marginBottom: "0.5rem" }}>
                      3.2K
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>Photos Managed</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "700", color: "white", marginBottom: "0.5rem" }}>
                      1.5K
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>Happy Guests</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "2rem", fontWeight: "700", color: "white", marginBottom: "0.5rem" }}>
                      98%
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.8)" }}>Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
            animation: "slideInUp 0.8s ease-out 0.4s both",
          }}
        >
          {[
            { id: "personal", label: "Personal Info", icon: "👤" },
            { id: "account", label: "Account Settings", icon: "⚙️" },
            { id: "preferences", label: "Preferences", icon: "🎨" },
            { id: "security", label: "Security", icon: "🔒" },
          ].map((tab) => (
            <button
              key={tab.id}
              style={{
                background: activeSection === tab.id ? "white" : "rgba(255, 255, 255, 0.7)",
                color: activeSection === tab.id ? "#1e293b" : "#64748b",
                border: activeSection === tab.id ? "2px solid #10b981" : "2px solid transparent",
                padding: "1rem 2rem",
                borderRadius: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                boxShadow:
                  activeSection === tab.id ? "0 8px 25px rgba(16, 185, 129, 0.2)" : "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => setActiveSection(tab.id)}
              onMouseEnter={(e) => {
                if (activeSection !== tab.id) {
                  e.currentTarget.style.background = "white"
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)"
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== tab.id) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)"
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)"
                }
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "3rem",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.1)",
            animation: "slideInUp 0.8s ease-out 0.6s both",
            minHeight: "600px",
          }}
        >
          {activeSection === "personal" && (
            <div>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}
              >
                <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b", margin: 0 }}>
                  Personal Information
                </h2>
                <button
                  style={{
                    background: isEditing
                      ? "linear-gradient(135deg, #ef4444, #dc2626)"
                      : "linear-gradient(135deg, #10b981, #06b6d4)",
                    color: "white",
                    border: "none",
                    padding: "0.75rem 2rem",
                    borderRadius: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={() => setIsEditing(!isEditing)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.4)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "2rem",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.75rem",
                      color: "#1e293b",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value="John Doe"
                    disabled={!isEditing}
                    style={{
                      width: "100%",
                      padding: "1rem 1.5rem",
                      border: isEditing ? "2px solid #e2e8f0" : "2px solid #f1f5f9",
                      borderRadius: "16px",
                      background: isEditing ? "white" : "#f8fafc",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      if (isEditing) {
                        e.target.style.borderColor = "#10b981"
                        e.target.style.transform = "scale(1.02)"
                        e.target.style.boxShadow = "0 0 0 4px rgba(16, 185, 129, 0.1)"
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#e2e8f0"
                      e.target.style.transform = "scale(1)"
                      e.target.style.boxShadow = "none"
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "0.75rem",
                      color: "#1e293b",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    Email Address
                    <span style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: "400" }}> (from Google)</span>
                  </label>
                  <input
                    type="email"
                    value="john@example.com"
                    disabled={true}
                    style={{
                      width: "100%",
                      padding: "1rem 1.5rem",
                      border: "2px solid #f1f5f9",
                      borderRadius: "16px",
                      background: "#f8fafc",
                      fontSize: "1.1rem",
                      transition: "all 0.3s ease",
                      outline: "none",
                      color: "#64748b",
                    }}
                  />
                  <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem", margin: "0.5rem 0 0 0" }}>
                    Your email is managed by your Google account and cannot be changed here.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.75rem",
                    color: "#1e293b",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  Bio
                </label>
                <textarea
                  value="Passionate event organizer with 8+ years of experience creating memorable moments through photography and seamless event management. I specialize in weddings, corporate events, and private celebrations."
                  disabled={!isEditing}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "1rem 1.5rem",
                    border: isEditing ? "2px solid #e2e8f0" : "2px solid #f1f5f9",
                    borderRadius: "16px",
                    background: isEditing ? "white" : "#f8fafc",
                    fontSize: "1.1rem",
                    transition: "all 0.3s ease",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    if (isEditing) {
                      e.target.style.borderColor = "#10b981"
                      e.target.style.transform = "scale(1.02)"
                      e.target.style.boxShadow = "0 0 0 4px rgba(16, 185, 129, 0.1)"
                    }
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e2e8f0"
                    e.target.style.transform = "scale(1)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              {isEditing && (
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "flex-end",
                    marginTop: "3rem",
                    animation: "slideInUp 0.3s ease-out",
                  }}
                >
                  <button
                    style={{
                      background: "white",
                      color: "#64748b",
                      border: "2px solid #e2e8f0",
                      padding: "0.75rem 2rem",
                      borderRadius: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 2rem",
                      borderRadius: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)"
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.4)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)"
                      e.currentTarget.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.3)"
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          )}

          {activeSection === "account" && (
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b", marginBottom: "3rem" }}>
                Account Settings
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {/* Notification Settings */}
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                    borderRadius: "20px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#1e293b", marginBottom: "2rem" }}>
                    Notification Preferences
                  </h3>

                  {[
                    {
                      title: "Email Notifications",
                      desc: "Receive updates about your events via email",
                      enabled: true,
                    },
                    { title: "Push Notifications", desc: "Get notified about new photo uploads", enabled: false },
                    { title: "Event Reminders", desc: "Get reminded about upcoming events", enabled: true },
                    { title: "Weekly Summary", desc: "Get a weekly summary of your event activities", enabled: true },
                  ].map((setting, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.5rem 0",
                        borderBottom: index < 3 ? "1px solid #e2e8f0" : "none",
                      }}
                    >
                      <div>
                        <h4 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1e293b", marginBottom: "0.5rem" }}>
                          {setting.title}
                        </h4>
                        <p style={{ fontSize: "0.95rem", color: "#64748b", margin: 0 }}>{setting.desc}</p>
                      </div>
                      <label
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "60px",
                          height: "34px",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          defaultChecked={setting.enabled}
                          style={{ opacity: 0, width: 0, height: 0 }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            cursor: "pointer",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: setting.enabled ? "#10b981" : "#e2e8f0",
                            borderRadius: "34px",
                            transition: "0.4s",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              content: '""',
                              height: "26px",
                              width: "26px",
                              left: setting.enabled ? "30px" : "4px",
                              bottom: "4px",
                              background: "white",
                              borderRadius: "50%",
                              transition: "0.4s",
                              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            }}
                          />
                        </span>
                      </label>
                    </div>
                  ))}
                </div>

                {/* Privacy Settings */}
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                    borderRadius: "20px",
                    border: "1px solid #f59e0b",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#92400e", marginBottom: "2rem" }}>
                    Privacy & Data
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <button
                      style={{
                        background: "white",
                        color: "#92400e",
                        border: "2px solid #f59e0b",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                      }}
                    >
                      📥 Download My Data
                    </button>
                    <button
                      style={{
                        background: "white",
                        color: "#92400e",
                        border: "2px solid #f59e0b",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                      }}
                    >
                      🗑️ Request Data Deletion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "preferences" && (
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b", marginBottom: "3rem" }}>
                Preferences
              </h2>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}
              >
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                    borderRadius: "20px",
                    border: "1px solid #06b6d4",
                  }}
                >
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#0c4a6e", marginBottom: "1.5rem" }}>
                    🎨 Theme Settings
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="radio" name="theme" defaultChecked />
                      <span>Light Mode</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="radio" name="theme" />
                      <span>Dark Mode</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
                      <input type="radio" name="theme" />
                      <span>Auto (System)</span>
                    </label>
                  </div>
                </div>

                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
                    borderRadius: "20px",
                    border: "1px solid #10b981",
                  }}
                >
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#14532d", marginBottom: "1.5rem" }}>
                    🌍 Language & Region
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <select
                      style={{
                        padding: "0.75rem",
                        border: "1px solid #10b981",
                        borderRadius: "8px",
                        background: "white",
                        fontSize: "1rem",
                      }}
                    >
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                    <select
                      style={{
                        padding: "0.75rem",
                        border: "1px solid #10b981",
                        borderRadius: "8px",
                        background: "white",
                        fontSize: "1rem",
                      }}
                    >
                      <option>Pacific Time (PT)</option>
                      <option>Eastern Time (ET)</option>
                      <option>Central Time (CT)</option>
                      <option>Mountain Time (MT)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "security" && (
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#1e293b", marginBottom: "3rem" }}>
                Security Settings
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {/* Connected Accounts Section */}
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
                    borderRadius: "20px",
                    border: "1px solid #06b6d4",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#0c4a6e", marginBottom: "2rem" }}>
                    🔗 Connected Accounts
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1.5rem",
                        background: "white",
                        borderRadius: "12px",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            background: "#4285f4",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontSize: "1.2rem",
                          }}
                        >
                          G
                        </div>
                        <div>
                          <h4
                            style={{ fontSize: "1.1rem", fontWeight: "600", color: "#1e293b", marginBottom: "0.25rem" }}
                          >
                            Google Account
                          </h4>
                          <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0 }}>john@example.com</p>
                        </div>
                      </div>
                      <span
                        style={{
                          padding: "0.5rem 1rem",
                          background: "#dcfce7",
                          color: "#166534",
                          borderRadius: "20px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }}
                      >
                        Connected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Session Management */}
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                    borderRadius: "20px",
                    border: "1px solid #f59e0b",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#92400e", marginBottom: "2rem" }}>
                    🔐 Session Management
                  </h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <button
                      style={{
                        background: "white",
                        color: "#92400e",
                        border: "2px solid #f59e0b",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                      }}
                    >
                      📱 View Active Sessions
                    </button>
                    <button
                      style={{
                        background: "white",
                        color: "#92400e",
                        border: "2px solid #f59e0b",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.3s ease",
                        textAlign: "left",
                      }}
                    >
                      🚪 Sign Out All Devices
                    </button>
                  </div>
                </div>

                {/* Danger Zone */}
                <div
                  style={{
                    padding: "2rem",
                    background: "linear-gradient(135deg, #fef2f2, #fee2e2)",
                    borderRadius: "20px",
                    border: "2px solid #dc2626",
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#dc2626", marginBottom: "1rem" }}>
                    ⚠️ Danger Zone
                  </h3>
                  <p style={{ color: "#991b1b", marginBottom: "2rem" }}>
                    Once you delete your account, there is no going back. Please be certain.
                  </p>
                  <button
                    style={{
                      background: "transparent",
                      color: "#dc2626",
                      border: "2px solid #dc2626",
                      padding: "1rem 2rem",
                      borderRadius: "12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#dc2626"
                      e.currentTarget.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent"
                      e.currentTarget.style.color = "#dc2626"
                    }}
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes profilePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
