# IoTScript Studio & Web Simulator 💻🔌

An educational Compiler, Virtual Machine, and Integrated Development Environment (IDE) built in C++ (Qt 5) for desktop, alongside an **Interactive, Real-Time Web-Based IoT Simulator** powered by Next.js, React Flow, and a sandboxed Web Worker interpreter.

**IoTScript Studio** abstracts away the complexity of embedded C++ and physical hardware debugging by providing a simplified, custom grammar ("IoTScript") and in-memory execution runtimes that simulate hardware sensor states in real-time.

---

## 🚀 The Feature Showcase (Selling Points)

We built a complete end-to-end language pipeline that spans both C++ Desktop and modern Web architectures. **Key features to demo:**

1. **The Custom Language Pipeline:** A custom Lexer and Parser built from scratch. It parses custom methods like `readSensor("temperature", var)` and compiles them into a custom Intermediate Representation (IR) / Abstract Syntax Tree (AST).
2. **Web-Based Interactive Simulator:** A spatial, visual 2D smart grid built with React Flow, allowing users to drag and drop sensors and actuators (ACs, smart bulbs, speakers, buttons), wire them together visually, and see signals propagate live.
3. **Multi-Threaded Worker Sandboxing:** A background Web Worker runs the AST interpreter in a separate thread. This prevents infinite loops (like `while(true) {}`) from freezing the UI thread, enforcing a strict 100,000-instruction safety budget.
4. **Top-Down Ambient Syncing:** Environmental sliders (Room Temperature, Ambient Light, Motion) dynamically synchronize with placed canvas sensor nodes in real-time, matching physical IoT environmental responses.
5. **Tokyo Night Theme & Monaco Editor:** A beautifully integrated developer interface using Monaco Editor (the engine powering VS Code) styled in Tokyonight-dark with custom typography, responsive panel drawers, and a monospace console logging system.
6. **Sub-process Git Pipeline (Desktop):** Direct asynchronous `QProcess` pipes let desktop users run Git commands directly inside the IDE, forwarding outputs seamlessly to the console.

---

## 🛠️ How to Run

### 🖥️ Option A: Desktop IDE (C++ / Qt 5)

Running the desktop IDE on macOS is completely automated.

1. Open your terminal in the project root folder.
2. Ensure you have made the script executable: `chmod +x start.sh`
3. Hit run:
```bash
./start.sh
```

*(This wrapper script will automatically locate `IoTScriptIDE.app` and launch it. If the app is missing, it utilizes Homebrew's `qmake` to safely rebuild the `.app` bundle from the raw C++ code).*

---

### 🌐 Option B: Web-Based IoT Simulator (Next.js / React Flow)

The modern interactive web simulator runs entirely in the browser.

1. Navigate to the web simulator folder:
```bash
cd iot-web-simulator
```
2. Install dependencies:
```bash
npm install
```
3. Start the local development server:
```bash
npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 👥 Meet the Team & Architecture

**Team:** codeForge (Hemal Badola, Shristi Rawat, Saniya, Ansh Bhandari)

### 1. Core Architecture, VM Compiler, & Web Simulator (Hemal Badola - Lead)
* **Custom Lexer/Parser Engine:** Wrote the C++ loops and TypeScript equivalents to tokenize and parse custom grammar blocks.
* **Desktop & Web Interpreters:** Engineered the C++ Qt Virtual Machine and the TypeScript AST Evaluator executing isolated device scopes.
* **Web Worker & Canvas Sandbox:** Architected the Next.js visual workspace using React Flow, implementing dynamic wiring constraints and multi-threaded Web Worker execution.
* **QProcess Architecture:** Designed the multithreaded pipelines that bind native OS Git terminals to the desktop IDE.

### 2. File Systems & Persistent Data (Ansh Bhandari)
* **I/O Tree Model (`QFileSystemModel`):** Built the strict-scoping visual file explorer.
* **LRU Caching (`QSettings`):** Serialized caching protocols to handle the dynamic persistence of the "Recent Files History" array.
* **Background Watchdogs (`QTimer`):** Programmed the asynchronous 30s daemon thread responsible for silent disk-write operations (Auto-Save).

### 3. Editor Algorithms (Saniya)
* **Regex Engine (`QTextDocument::FindFlags`):** Engineered the non-blocking search algorithms to handle dynamic deep-string iteration and live memory replacements.
* **Memory Pointers (`QTextCursor`):** Wrote the coordinate mathematics locking the visual scrollbar viewport to precise integer offsets for desktop "Go-To-Line" features.
* **Viewport Mutators:** Captured raw keyboard intercept events (`Ctrl++`, `Ctrl+-`) to dynamically recompute application-wide font sizes.

### 4. Aesthetics & Event Tracking (Shristi Rawat)
* **Tokyo Night Engine:** Compiled desktop QSS stylesheets and Web glassmorphic CSS layers for premium aesthetics.
* **Regex Syntax Painting:** Configured `QRegularExpression` hooks directly connected to the deep document tree to paint IoT keywords neon green on the fly.
* **Real-time UX Metrics:** Bound calculation loops directly to the editor's Qt lifecycle hooks, mathematically calculating row/col offsets.
