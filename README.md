blog-app/│── backend/ # NestJS Backend (Microservices)│ ├── api-gateway/ # API Gateway Service│ │ ├── src/│ │ ├── main.ts│ │ ├── package.json│ ├── auth-service/ # Authentication Service (Google & Facebook Login)│ │ ├── src/│ │ ├── main.ts│ │ ├── package.json│ ├── user-service/ # User Service (Handles User Data)│ │ ├── src/│ │ ├── main.ts│ │ ├── package.json│ ├── post-service/ # Post Service (Handles Blog Posts)│ │ ├── src/│ │ ├── main.ts│ │ ├── package.json│ ├── .env # Environment Variables│ ├── package.json # Backend Dependencies│── frontend/ # React Frontend│ ├── src/ # Frontend Source Code│ ├── .env # Frontend Environment Variables│ ├── package.json # Frontend Dependencies│── README.md # Project Documentation│── .gitignore # Git Ignore File

### **3️⃣ Frontend Setup (React)**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ./frontend  npm install   `

#### **Setup Environment Variables**

Create a .env file inside the frontend/ folder:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   REACT_APP_API_URL=http://localhost:5000  REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id  REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id   `

#### **Run the Frontend**

> The frontend will run on **http://localhost:3000**

🔥 API Endpoints (Backend)
--------------------------

EndpointMethodDescription/auth/googleGETLogin with Google/auth/facebookGETLogin with Facebook/postsPOSTCreate a new post/posts/:idGETGet a single post by ID/postsGETGet all posts/posts/:idPUTUpdate a post by ID/posts/:idDELETEDelete a post by ID

🛠️ Technologies Used
---------------------

### **Backend (NestJS)**

*   **NestJS** (TypeScript)
    
*   **MongoDB & Mongoose**
    
*   **PassportJS** (Google & Facebook Authentication)
    
*   **JWT for Authentication**
    
*   **Microservices Architecture**
    
*   **API Gateway**
    

### **Frontend (React)**

*   **React 19** (TypeScript)
    
*   **React Router**
    
*   **Google & Facebook Login**
    
*   **Axios for API Calls**
    
*   **Tailwind CSS for Styling**
