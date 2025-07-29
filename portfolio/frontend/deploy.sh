#!/bin/bash

# Quick Deployment Script for Harish Kumar Portfolio
# This script helps deploy the portfolio to various platforms

echo "🚀 Harish Kumar Portfolio - Deployment Helper"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the frontend directory (/app/portfolio/frontend)"
    exit 1
fi

echo "✅ Building production version..."
yarn build

echo ""
echo "📦 Build completed! Choose your deployment option:"
echo ""
echo "1. 🌟 Vercel (Recommended - Free, Fast, Custom Domain)"
echo "2. 🔧 Netlify (Free, Great Features, Easy Setup)"  
echo "3. 📁 Local Serve (Test locally before deployment)"
echo "4. 📋 Show deployment URLs"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🌟 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm install -g vercel
        fi
        echo "Running: vercel --prod"
        echo "Follow the prompts to deploy!"
        vercel --prod
        ;;
    2)
        echo "🔧 For Netlify deployment:"
        echo "1. Go to https://app.netlify.com/drop"
        echo "2. Drag and drop the 'build' folder"
        echo "3. Your site will be live instantly!"
        echo ""
        echo "Or install Netlify CLI:"
        echo "npm install -g netlify-cli"
        echo "netlify deploy --prod --dir=build"
        ;;
    3)
        echo "📁 Starting local server..."
        if ! command -v serve &> /dev/null; then
            echo "Installing serve..."
            yarn global add serve
        fi
        echo "🌐 Portfolio will be available at: http://localhost:3000"
        serve -s build -l 3000
        ;;
    4)
        echo "📋 After deployment, your portfolio will be available at URLs like:"
        echo ""
        echo "🌟 Vercel: https://harish-portfolio-[random].vercel.app"
        echo "🔧 Netlify: https://[random]-harish-portfolio.netlify.app"  
        echo "📄 GitHub Pages: https://[username].github.io/harish-portfolio"
        echo ""
        echo "💡 You can also add a custom domain like www.harishkumar.com"
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✅ Deployment process initiated!"
echo "📱 Your portfolio will work perfectly on:"
echo "   • 💻 Desktop computers"
echo "   • 📱 Mobile phones"  
echo "   • 📟 Tablets"
echo "   • 🌐 All modern browsers"
echo ""
echo "🎉 Harish's professional portfolio is ready to impress!"