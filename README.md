# GitHub Issue Agent

An automated agent application that uses GitHub Actions workflows to implement and manage issues automatically.

## 🚀 Features

- **Automated Issue Implementation**: Uses GitHub Actions workflows to automatically process and implement issues
- **Universal Deployment**: Supports both web deployment (Netlify/GitHub Pages) and Android APK builds
- **CI/CD Integration**: Comprehensive deployment pipeline configured in `.github/workflows/deploy.yml`

## 📦 Deployment

This application is configured for automatic deployment:

- **Pull Requests**: Deployed to Netlify for preview
- **Main Branch**: Deployed to GitHub Pages for production
- **Android Projects**: Automatically builds and releases APK files

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Architecture

The application uses GitHub Actions workflows to:

1. Detect project type (web or Android)
2. Build the appropriate artifacts
3. Deploy to the right platform
4. Create releases for Android APKs

## 📚 Technology Stack

- **Frontend**: React + Vite
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify (PRs), GitHub Pages (Production)
- **Android**: Gradle-based APK builds
