import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import { BookIcon, RepoIcon } from "@primer/octicons-react";
import HeatMapProfile from "./HeatMap";
import { useAuth } from "../../authContext";

const styles = {
  pageRoot: {
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    minHeight: "100vh",
    fontFamily:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif",
  },

  navContainer: {
    borderBottom: "1px solid #30363d",
    backgroundColor: "#0d1117",
  },

  navTabs: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    padding: "0 32px",
  },

  tabActive: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "16px 0",
    borderBottom: "2px solid #f78166",
    fontWeight: "600",
    cursor: "pointer",
  },

  profileBanner: {
    height: "260px",
    background:
      "linear-gradient(135deg,#1f6feb,#238636,#0d1117)",
    borderBottom: "1px solid #30363d",
  },

  bannerOverlay: {
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.7))",
  },

  bannerContent: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "120px 32px 0",
  },

  bannerName: {
    fontSize: "42px",
    fontWeight: "700",
    margin: 0,
  },

  bannerBio: {
    color: "#c9d1d9",
    marginTop: "8px",
  },

  mainLayout: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "32px",
    padding: "32px",
    marginTop: "-80px",
  },

  sidebar: {
    position: "sticky",
    top: "90px",
    height: "fit-content",
  },

  avatarContainer: {
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid #0d1117",
    backgroundColor: "#21262d",
  },

  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  username: {
    fontSize: "30px",
    fontWeight: "700",
    marginTop: "18px",
    marginBottom: "10px",
  },

  bio: {
    color: "#8b949e",
    lineHeight: "1.6",
    marginBottom: "18px",
  },

  followBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #30363d",
    backgroundColor: "#21262d",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "18px",
  },

  stats: {
    display: "flex",
    gap: "8px",
    color: "#8b949e",
    marginBottom: "18px",
  },

  statsStrong: {
    color: "#fff",
    fontWeight: "700",
  },

  profileInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "#8b949e",
    marginBottom: "20px",
  },

  achievementCard: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "18px",
  },

  badges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "10px",
  },

  badge: {
    backgroundColor: "#21262d",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
  },

  content: {
    width: "100%",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: "16px",
    marginBottom: "30px",
  },

  statCard: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "24px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "16px",
    marginTop: "20px",
  },

  repoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "16px",
    marginBottom: "32px",
  },

  repoCard: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "20px",
  },

  heatmapWrapper: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "30px",
  },

  activityCard: {
    backgroundColor: "#161b22",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "12px",
  },

  floatingLogout: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    backgroundColor: "#da3633",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    zIndex: 1000,
  },
};

const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: "username" });
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(
            `http://100.31.237.183:3002/userProfile/${userId}`
          );
          setUserDetails(response.data);
        } catch (err) {
          console.error("Cannot fetch user details: ", err);
        }
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      <Navbar />

      <div style={styles.pageRoot}>
        <div style={styles.navContainer}>
          <div style={styles.navTabs}>
            <div 
              style={styles.tabActive} 
              onClick={() => navigate("/profile")}
            >
              <BookIcon size={16} /> Overview
            </div>
          </div>
        </div>

        <div style={styles.profileBanner}>
          <div style={styles.bannerOverlay}>
            <div style={styles.bannerContent}>
              <h1 style={styles.bannerName}>Welcome New User</h1>
              <p style={styles.bannerBio}>
                Full Stack Developer • React • Node.js • MongoDB
              </p>
            </div>
          </div>
        </div>

        <div style={styles.mainLayout}>
          <div style={styles.sidebar}>
            <div style={styles.avatarContainer}>
              <img
                src={`https://ui-avatars.com/api/?name=${userDetails.username}&background=21262d&color=c9d1d9&size=296`}
                alt="User Avatar"
                style={styles.avatarImg}
              />
            </div>

            <h2 style={styles.username}>New User</h2>

            <p style={styles.bio}>
              Passionate software developer building modern web applications.
            </p>

            <button style={styles.followBtn}>
              Follow
            </button>

            <div style={styles.stats}>
              <span>
                <span style={styles.statsStrong}>10</span> followers
              </span>
              <span>·</span>
              <span>
                <span style={styles.statsStrong}>3</span> following
              </span>
            </div>

            <div style={styles.profileInfo}>
              <div>💻 MERN Stack Developer</div>
              <div>💻 Software Engineer</div>
              <div>🚀 Open Source Enthusiast</div>
              <div>📅 Joined 2026, India</div>
            </div>

            <div style={styles.achievementCard}>
              <h4>Skill Badges</h4>
              <div style={styles.badges}>
                <span style={styles.badge}>🏆 HTML</span>
                <span style={styles.badge}>🔥 CSS</span>
                <span style={styles.badge}>⭐ Bootstrap</span>
                <span style={styles.badge}>⭐ JavaScript</span>
                <span style={styles.badge}>⭐ Node.js</span>
                <span style={styles.badge}>⭐ React.js</span>
                <span style={styles.badge}>⭐ Express.js</span>
                <span style={styles.badge}>⭐ MongoDB</span>
              </div>
            </div>
            <br />
            <div style={styles.achievementCard}>
              <h4>Achievements</h4>
              <div style={styles.badges}>
                <span style={styles.badge}>🏆 Top Developer</span>
                <span style={styles.badge}>🔥 Active</span>
                <span style={styles.badge}>⭐ Creator</span>
                <span style={styles.badge}>⭐ Programmer</span>
              </div>
            </div>
          </div>

          <div style={styles.content}>
            <div style={styles.statsGrid}>
              <div style={styles.statCard}>
                <h2>12</h2>
                <p>Repositories</p>
              </div>

              <div style={styles.statCard}>
                <h2>154</h2>
                <p>Commits</p>
              </div>

              <div style={styles.statCard}>
                <h2>23</h2>
                <p>Stars</p>
              </div>

              <div style={styles.statCard}>
                <h2>8</h2>
                <p>Projects</p>
              </div>
            </div>

            <div style={styles.sectionTitle}>
              Pinned Repositories
            </div>

            <div style={styles.repoGrid}>
              <div style={styles.repoCard}>
                <h3>SigmaGPT</h3>
                <p>
                  AI chat platform powered by modern LLMs.
                </p>
              </div>

              <div style={styles.repoCard}>
                <h3>ApnaVideo</h3>
                <p>
                  Video conferencing platform using WebRTC.
                </p>
              </div>
            </div>

            <div style={styles.sectionTitle}>
              Recent Contributions
            </div>

            <div style={styles.heatmapWrapper}>
              <HeatMapProfile />
            </div>

            <div style={styles.sectionTitle}>
              Recent Activity
            </div>

            <div style={styles.activityCard}>
              🚀 Created repository SigmaGPT
            </div>

            <div style={styles.activityCard}>
              🔥 Pushed commits to ApnaVideo
            </div>

            <div style={styles.activityCard}>
              ⭐ Received repository stars
            </div>

            <div style={styles.activityCard}>
              💬 Opened an issue in React.js 
            </div>
          </div>
        </div>

        <button
          style={styles.floatingLogout}
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            setCurrentUser(null);
            window.location.href = "/auth";
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;










