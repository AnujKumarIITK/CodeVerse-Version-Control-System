import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [repositories, setRepositories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepositories, setSuggestedRepositories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `100.31.237.183:3002/repo/user/${userId}`
        );
        const data = await response.json();
        setRepositories(data.repositories || []);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchSuggestedRepositories = async () => {
      try {
        const response = await fetch("100.31.237.183:3002/repo/all");
        const data = await response.json();
        setSuggestedRepositories(data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepositories();
    fetchSuggestedRepositories();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults(repositories);
    } else {
      setSearchResults(
        repositories.filter((repo) =>
          repo.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [repositories, searchQuery]);

  const changelogData = [
    { id: 1, title: "Staged publishing and new install-time controls for npm", date: "17 hours ago" },
    { id: 2, title: "GitHub Copilot for Eclipse is open source", date: "2 days ago" },
    { id: 3, title: "Issue fields are now in public preview for all organizations", date: "2 days ago" },
    { id: 4, title: "Copilot usage metrics reports now use GitHub-owned...", date: "3 days ago" }
  ];

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0d1117",
          minHeight: "calc(100vh - 72px)",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "280px 1fr 320px",
            gap: "24px",
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* LEFT SIDEBAR */}
          <aside
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="profile"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "#fff",
                }}
              />
            </div>

            <h2
              style={{
                color: "#f0f6fc",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Your Profile
            </h2>

            <p
              style={{
                color: "#8b949e",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Welcome to CodeVerse
            </p>

            <button
              onClick={() => navigate("/create")}
              style={{
                width: "100%",
                background: "#238636",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "12px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              New Repository
            </button>

            <hr
              style={{
                borderColor: "#30363d",
                margin: "24px 0",
              }}
            />

          <h3 style={{ color: "#f0f6fc", marginBottom: "12px", textAlign: "center" }}>
              Quick Stats
            </h3>
            
            {/* Centered Quick Stats */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <p style={{ color: "#8b949e", marginBottom: "8px" }}>
                Repositories: {repositories.length}
              </p>
              <p style={{ color: "#8b949e" }}>
                Suggestions: {suggestedRepositories.length}
              </p>
            </div>

            <div style={{ marginTop: "30px", border: "1px solid #30363d", borderRadius: "6px", padding: "16px" }}>
              <h4 style={{ color: "#f0f6fc", marginBottom: "16px" }}>Latest from our changelog</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {changelogData.map((item) => (
                  <li key={item.id} style={{ marginBottom: "16px", fontSize: "14px" }}>
                    <div style={{ color: "#8b949e", fontSize: "12px", marginBottom: "4px" }}>{item.date}</div>
                    <div style={{ color: "#58a6ff" }}>{item.title}</div>
                  </li>
                ))}
              </ul>
              <div style={{ color: "#58a6ff", fontSize: "14px", marginTop: "16px" }}>
                View changelog →
              </div>
            </div>
          </aside>

          <main>
            <section style={{ marginBottom: "40px" }}>
              <h2 style={{ color: "#f0f6fc", fontSize: "28px", marginBottom: "20px" }}>
                Top Repositories
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {suggestedRepositories.slice(3, 6).map((repo) => (
                  <div 
                    key={repo._id} 
                    style={{ 
                      background: "#161b22", 
                      border: "1px solid #30363d", 
                      borderRadius: "10px", 
                      padding: "20px" 
                    }}
                  >
                    <h3 style={{ color: "#58a6ff", margin: "0 0 8px 0" }}>
                      {repo.name}
                    </h3>
                    <p style={{ color: "#8b949e", fontSize: "14px", margin: 0 }}>
                      {repo.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <div
              style={{
                marginBottom: "24px",
              }}
            >
              <h1
                style={{
                  color: "#f0f6fc",
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                Your Repositories
              </h1>

              <input
                type="text"
                placeholder="Search repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: "6px",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {searchResults.map((repo) => (
                <div
                  key={repo._id}
                  style={{
                    background: "#161b22",
                    border: "1px solid #30363d",
                    borderRadius: "10px",
                    padding: "20px",
                    width: "100%",
                  }}
                >
                  <h2
                    style={{
                      color: "#58a6ff",
                      marginBottom: "10px",
                    }}
                  >
                    {repo.name}
                  </h2>

                  <p
                    style={{
                      color: "#8b949e",
                    }}
                  >
                    {repo.description}
                  </p>
                </div>
              ))}

              {searchResults.length === 0 && (
                <div
                  style={{
                    background: "#161b22",
                    border: "1px solid #30363d",
                    borderRadius: "10px",
                    padding: "30px",
                    textAlign: "center",
                    color: "#8b949e",
                  }}
                >
                  No repositories found.
                </div>
              )}
            </div>
          </main>

          <aside
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "12px",
              padding: "24px",
            }}
          >
            <h2
              style={{
                color: "#f0f6fc",
                marginBottom: "20px",
              }}
            >
              Suggested Repositories
            </h2>

            {suggestedRepositories.map((repo) => (
              <div
                key={repo._id}
                style={{
                  borderBottom: "1px solid #30363d",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                <h4
                  style={{
                    color: "#58a6ff",
                    marginBottom: "6px",
                  }}
                >
                  {repo.name}
                </h4>

                <p
                  style={{
                    color: "#8b949e",
                    fontSize: "14px",
                  }}
                >
                  {repo.description}
                </p>
              </div>
            ))}

            <h3
              style={{
                color: "#f0f6fc",
                marginTop: "24px",
                marginBottom: "16px",
              }}
            >
              Upcoming Events
            </h3>

            <p style={{ color: "#8b949e", marginBottom: "10px" }}>
              🚀 React Summit - Jan 5
            </p>

            <p style={{ color: "#8b949e", marginBottom: "10px" }}>
              💻 Developer Meetup - Dec 25
            </p>

            <p style={{ color: "#8b949e", marginBottom: "10px"  }}>
              🎯 Open Source Hackathon
            </p>

            <p style={{ color: "#8b949e", marginBottom: "10px" }}>
                🌐 Web Dev Workshop - Mar 10
            </p>

            <p style={{ color: "#8b949e", marginBottom: "10px" }}>
                ⚡ System Design Seminar - Apr 02
            </p>

          </aside>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

