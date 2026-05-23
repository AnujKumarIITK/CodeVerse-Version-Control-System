import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext';
import './CreateRepo.css';
import Navbar from "../Navbar";

const CreateRepo = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth(); 

  const [repoData, setRepoData] = useState({
    name: '',
    description: '',
    visibility: 'public',
    addReadme: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRepoData({
      ...repoData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      alert("Please ensure you are logged in before creating a repository.");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      
      console.log("Sending data to backend...", repoData);

      const response = await fetch('http://100.31.237.183:3002/repo/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({
          ...repoData,
          visibility: repoData.visibility === 'public',
          owner: currentUser
        }),
      });

      if (response.ok) {
        const newRepo = await response.json();
        console.log('✅ Repository created in DB:', newRepo);
        alert('Success! Repo created.');
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('❌ Backend rejected the request:', errorData);
        alert(`Error: ${errorData.message || 'Failed to create'}`);
      }
    } catch (error) {
      console.error('🛑 Critical Network/CORS Error:', error);
      alert('Network/CORS error. Open your browser console (F12) to see the exact reason.');
    }
  };

  return (
    <>
    <Navbar />
      <div className="create-repo-container">
        <div className="create-repo-header">
          <h2>Create a new repository</h2>
          <p>A repository contains all project files, including the revision history.</p>
        </div>

        <hr className="divider" />

        <form onSubmit={handleSubmit} className="create-repo-form">
          <div className="form-group owner-name-group">
            <div className="owner-section">
              <label>Owner <span className="required">*</span></label>
              <select disabled className="github-select">
                <option>YourUsername</option>
              </select>
            </div>
            <span className="slash">/</span>
            <div className="name-section">
              <label>Repository name <span className="required">*</span></label>
              <input 
                type="text" 
                name="name"
                value={repoData.name}
                onChange={handleChange}
                className="github-input"
                required 
                />
            </div>
          </div>

          <div className="form-group">
            <label>Description <span className="optional">(optional)</span></label>
            <input 
              type="text" 
              name="description"
              value={repoData.description}
              onChange={handleChange}
              className="github-input description-input" 
              />
          </div>

          <hr className="divider" />

          <div className="form-group visibility-group">
            <label className="visibility-card">
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={repoData.visibility === "public"}
                  onChange={handleChange}
                />

                <div className="radio-icon">🌐</div>

                <strong>Public</strong>

              </div>
              <p style={{marginLeft:"32px",marginTop:"8px"}}>
                Anyone on the internet can see this repository.
                You choose who can commit.
              </p>
            </label>

            <label className="visibility-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "8px",
                  }}
                >
                  <input
                    type="radio"
                    name="visibility"
                    value="private"
                    checked={repoData.visibility === "private"}
                    onChange={handleChange}
                  />

                  <div className="radio-icon">🔒</div>

                  <strong>Private</strong>
                </div>

                <p style={{marginLeft:"32px",marginTop:"8px"}}>
                  You choose who can see and commit to this repository.
                </p>
            </label>
          </div>

          <hr className="divider" />

          <div className="form-group init-group">
            <label className="checkbox-label">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "8px",
                }}
              >
                <input
                  type="checkbox"
                  name="addReadme"
                  checked={repoData.addReadme}
                  onChange={handleChange}
                />

                <strong>Add a README file</strong>
              </div>

              <p style={{marginLeft:"32px",marginTop:"8px"}}>
                This is where you can write a long description for your project.
              </p>
            </label>
          </div>

          <hr className="divider" />

          <div className="form-actions">
            <button type="submit" className="btn-create" disabled={!repoData.name}>
              Create repository
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateRepo;




