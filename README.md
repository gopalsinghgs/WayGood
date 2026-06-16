# WayGood – Study Abroad Programs App

A React Native mobile application that helps students discover and explore study abroad programs at top universities worldwide.

---

## Features

- Browse a list of international universities and study programs
- Search by university name or country
- View detailed information for each program (description, tuition, intake dates, available programs)
- Tap "Visit Official Website" to open the university's site
- Responsive layout that works on all screen sizes (iOS & Android)
- Clean, reusable component architecture

---

## Screenshots

| Home Screen | Details Screen |
|---|---|
| List of programs with search | Full program details with CTA |

---

## Tech Stack

- **React Native CLI** (v0.84.1)
- **React Navigation** – Native Stack Navigator
- **react-native-safe-area-context** – Safe area handling
- **react-native-screens** – Native screen optimization

---

## Project Structure

```
WayGood/
├── src/
│   ├── data/
│   │   └── programs.js        # Static JSON data for all programs
│   ├── components/
│   │   └── ProgramCard.js     # Reusable card component for the list
│   └── screens/
│       ├── HomeScreen.js      # Main list screen with search
│       └── DetailsScreen.js   # Full detail view for a program
├── App.js                     # Navigation setup (root)
└── index.js                   # App entry point
```

---

## Getting Started

### Prerequisites

- Node.js >= 22
- React Native development environment set up ([guide](https://reactnative.dev/docs/set-up-your-environment))
- For iOS: Xcode + CocoaPods
- For Android: Android Studio + Android SDK

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/WayGood.git
cd WayGood

# 2. Install JS dependencies
npm install

# 3. iOS only – install CocoaPods
bundle install
bundle exec pod install
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on Android (new terminal)
npm run android

# Run on iOS (new terminal)
npm run ios
```

---

## Sample Data Format

```json
[
  {
    "id": 1,
    "university": "University of Toronto",
    "country": "Canada",
    "flag": "🇨🇦",
    "description": "Top ranked university offering multiple international programs.",
    "fullDescription": "...",
    "programs": ["Computer Science", "Business Administration"],
    "tuitionRange": "CAD $30,000 – $55,000/year",
    "intake": "September & January",
    "website": "https://www.utoronto.ca"
  }
]
```

---

## License

MIT
