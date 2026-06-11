#!/bin/bash
# ==============================================================================
# IoTScript IDE - Startup Script
# ==============================================================================

echo "🚀 Starting IoTScript IDE..."

# Navigate to the directory where this script is located
cd "$(dirname "$0")"

# Store the path to the app bundle
APP_PATH="IDE-For-MACOS/Editor/bin/IoTScriptIDE.app"

# Function to build the app if it doesn't exist or if forced
build_app() {
    echo "🔨 Building the application (this may take a moment)..."
    cd IDE-For-MACOS/Editor
    
    # Try to find qmake (Homebrew path first, then checking system path)
    if [ -f "/opt/homebrew/opt/qt@5/bin/qmake" ]; then
        /opt/homebrew/opt/qt@5/bin/qmake Editor.pro
    else
        qmake Editor.pro || echo "⚠️  Warning: qmake not found. Build might fail."
    fi
    
    make -j$(sysctl -n hw.ncpu)
    cd ../../
}

# If the user passed '--build' (e.g. ./start.sh --build), force a recompile
if [ "$1" == "--build" ]; then
    build_app
fi

# Check if the app exists, build it if it doesn't
if [ ! -d "$APP_PATH" ]; then
    echo "📦 Application not found. Compiling first..."
    build_app
fi

# Final check if app exists and launch
if [ -d "$APP_PATH" ]; then
    echo "✅ Launching IDE..."
    open "$APP_PATH"
else
    echo "❌ Error: Could not start the application. Please ensure Qt 5 is installed (brew install qt@5)."
    exit 1
fi
