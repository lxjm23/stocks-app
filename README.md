# Stocks Tracking Web App

This web application allows users to track trending stocks. It provides information about the top 5 trending stocks and financial news based on real-time data.

## Features

- Displays the top 5 trending stocks.
- Displays financial news.
- Allows users to search for stock.
- Allows users to add/remove stocks from the watchlist.
- Real-time updates on stock trends.
- Simple and intuitive user interface.

## Technologies Used

- React.js
- JavaScript
- CSS
- MongoDB

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in your API keys and backend URL:
   ```
   REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
   REACT_APP_RAPIDAPI_HOST=yahoo-finance15.p.rapidapi.com
   REACT_APP_STOCKS_URL=https://yahoo-finance15.p.rapidapi.com/api/v1/
   REACT_APP_BACKEND_URL=your_backend_url_here
   ```

## Installation and Running

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This app is configured for deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Link to Backend
https://github.com/lxjm23/backend-stocks-app
