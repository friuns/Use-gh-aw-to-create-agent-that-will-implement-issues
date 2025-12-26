import { useState } from 'react'
import './App.css'

function App() {
  const [selectedWorkflow, setSelectedWorkflow] = useState('auto-implement')

  const workflows = [
    {
      id: 'auto-implement',
      name: 'Auto-Implement Issues',
      description: 'Automatically implements issues using GitHub Copilot agent',
      icon: '🤖'
    },
    {
      id: 'deploy',
      name: 'Universal Deploy',
      description: 'Deploys web apps to Netlify/GitHub Pages or builds Android APKs',
      icon: '🚀'
    },
    {
      id: 'auto-approve',
      name: 'Auto-Approve PRs',
      description: 'Automatically approves pull requests from trusted sources',
      icon: '✅'
    },
    {
      id: 'pr-comment',
      name: 'PR Comments',
      description: 'Posts deployment status and build information on PRs',
      icon: '💬'
    }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>🤖 GitHub Issue Agent</h1>
        <p className="tagline">Automated Issue Implementation with GitHub Actions</p>
      </header>

      <main className="app-main">
        <section className="hero">
          <h2>Automate Your Workflow</h2>
          <p>
            This application demonstrates how to use GitHub Actions workflows 
            to create an intelligent agent that automatically implements issues, 
            deploys applications, and manages your CI/CD pipeline.
          </p>
        </section>

        <section className="workflows">
          <h3>Available Workflows</h3>
          <div className="workflow-grid">
            {workflows.map(workflow => (
              <div 
                key={workflow.id}
                className={`workflow-card ${selectedWorkflow === workflow.id ? 'selected' : ''}`}
                onClick={() => setSelectedWorkflow(workflow.id)}
              >
                <div className="workflow-icon">{workflow.icon}</div>
                <h4>{workflow.name}</h4>
                <p>{workflow.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <h3>Key Features</h3>
          <div className="feature-list">
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <div>
                <h4>Fast Deployment</h4>
                <p>Deploy to Netlify on PRs and GitHub Pages on main branch</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">📱</span>
              <div>
                <h4>Android Support</h4>
                <p>Automatically build and release Android APK files</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🔄</span>
              <div>
                <h4>Smart Detection</h4>
                <p>Automatically detects project type and chooses the right workflow</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">🛡️</span>
              <div>
                <h4>Secure & Reliable</h4>
                <p>Built-in security checks and comprehensive error handling</p>
              </div>
            </div>
          </div>
        </section>

        <section className="getting-started">
          <h3>Getting Started</h3>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Create an Issue</h4>
                <p>Open a new issue in your GitHub repository</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Let the Agent Work</h4>
                <p>The GitHub Actions workflow automatically starts processing</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Review & Deploy</h4>
                <p>Review the PR and merge to deploy automatically</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Powered by GitHub Actions, React, and Vite</p>
      </footer>
    </div>
  )
}

export default App
