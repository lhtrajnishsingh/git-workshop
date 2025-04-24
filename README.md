# Git Workshop

A simple Node.js application that serves "Hello World!" on port 3000.

## Deployment Instructions

### Local Deployment

1. Clone the repository:
   ```
   git clone https://github.com/lhtrajnishsingh/git-workshop.git
   cd git-workshop
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Access the application at http://localhost:3000

### Production Deployment

For production deployment, you can use services like:

- Heroku
- Vercel
- AWS Elastic Beanstalk
- Digital Ocean App Platform

#### Example: Deploying to Heroku

1. Install the Heroku CLI
2. Login to Heroku: `heroku login`
3. Create a new Heroku app: `heroku create`
4. Push to Heroku: `git push heroku main`
5. Open the app: `heroku open`

## Testing

You can test the application by:

1. Running it locally
2. Using curl: `curl http://localhost:3000`
3. Opening a browser and navigating to http://localhost:3000
