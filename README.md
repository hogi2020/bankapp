## 리액트 하이브리드 앱 프로젝트 생성 과정
### 1. Vite React 프로젝트 생성
npm create vite@latest account-manager -- --template react
cd account-manager
npm install

### 2. Capacitor 설치 및 초기화
npm install @capacitor/core @capacitor/cli
npx cap init
#### webDir: dist 입력

### 3. 플랫폼 추가
npm install @capacitor/android @capacitor/ios
npx cap add android
npx cap add ios  # macOS만

### 4. 필요한 플러그인 설치
npm install @capacitor/app @capacitor/haptics @capacitor/keyboard @capacitor/status-bar @capacitor/preferences

### 5. 첫 빌드 및 동기화
npm run build
npx cap sync

### 6. 네이티브 앱 실행
npx cap run android

## TailWind CSS 설정
### 1. TailWind 설치
npm install -D tailwindcss@3.4.1 postcss autoprefixer
npx tailwindcss init -p

### 2. tailwind.config.js 수정
module.exports = { 
content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}" ], 
theme: { extend: {}, }, 
plugins: [], 
};

### 3. index.css 수정
@tailwind base; 
@tailwind components; 
@tailwind utilities;
main.tsx에 index.css import