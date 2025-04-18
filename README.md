# TMAVPN2 Client

Frontend React application for TMAVPN2, a Telegram Mini App VPN service.

## Overview

This is the frontend part of a VPN service Telegram Mini App, allowing users to:

- Browse different VPN tariffs and plans
- Purchase VPN services through Telegram Payments (using YooKassa)
- Receive and manage VPN access keys

## Features

- React with TypeScript
- Telegram Mini App integration using @twa-dev/sdk
- UI designed specifically for Telegram Mini Apps
- API integration with the backend server
- Payment flow integration with Telegram Payments

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
cd client
npm install
```

3. Start the development server:

```bash
npm start
```

This will open the app in development mode at [http://localhost:3000](http://localhost:3000).

## App Structure

The app is structured as follows:

- `/src/pages` - Contains all the main screen components
- `/src/api` - API integration with the backend
- `/src/styles` - Global CSS styles
- `/src/components` - Reusable UI components

## Pages

- `SplashScreen` - Initial loading screen with logo
- `WelcomeScreen` - Introductory screen explaining the service
- `TariffSelection` - Selection of different VPN tariffs
- `PlanSelection` - Selection of subscription duration
- `PaymentScreen` - Payment processing screen
- `PaymentSuccessScreen` - Confirmation of successful payment
- `AccessKeyScreen` - Display and management of VPN access key
- `DeviceTypeScreen` - Information about compatible devices

## Building for Production

To build the app for production:

```bash
npm run build
```

This creates optimized files in the `dist` directory.

## Deployment for Telegram Mini App

1. Build the project
2. Host the static files on a secure HTTPS server
3. Register your Mini App with BotFather and provide the hosted URL

## Integration with Telegram

This app uses the Telegram Mini App SDK (@twa-dev/sdk) to integrate with Telegram, including:

- Back button handling
- Theme adaptation
- Telegram Payments integration
- Popup messages
- MainButton usage

## License

MIT 