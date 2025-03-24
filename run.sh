#!/bin/bash

FRONTEND_ENV_URL="https://gist.githubusercontent.com/Cyanide334/f8a24bdf5ce5e668787b5935acbef925/raw/7fdc2a0ccfa8951309aa7eda1fdf36a076151524/.frontendEnv"
BACKEND_ENV_URL="https://gist.githubusercontent.com/Cyanide334/f8a24bdf5ce5e668787b5935acbef925/raw/7fdc2a0ccfa8951309aa7eda1fdf36a076151524/.backendEnv"

echo "🚀 Setting up the project..."

# Download and place .env files
echo "🌍 Downloading .env files..."
curl -o frontend/.env $FRONTEND_ENV_URL
curl -o backend/src/.env $BACKEND_ENV_URL
echo "✅ .env files downloaded!"

# Navigate to frontend, install dependencies, and start it
echo "📦 Installing frontend dependencies..."
cd frontend || exit
npm install --legacy-peer-deps || npm install --force
echo "🛠 Starting React frontend..."
npm start &

# Navigate to backend, install dependencies, and start it
cd ../backend || exit
echo "📦 Installing backend dependencies..."
npm install
echo "🛠 Starting Express backend..."
cd src
node index.js &

echo "✅ Both frontend and backend are running!"
