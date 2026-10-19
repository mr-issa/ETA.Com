import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Ensure data directory exists
const dataDir = path.resolve(__dirname, 'data');
const inquiriesFile = path.resolve(dataDir, 'inquiries.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(inquiriesFile)) {
  fs.writeFileSync(inquiriesFile, JSON.stringify([], null, 2));
}

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    agency: 'ETA — E-Tactics Agency',
    founder: 'Aissa El Garram',
    contact: 'elgarram.aissa@outlook.com',
    timestamp: new Date().toISOString()
  });
});

// Robots and Sitemap routes
app.get('/robots.txt', (_req: Request, res: Response) => {
  const robotsPath = path.resolve(__dirname, 'public/robots.txt');
  if (fs.existsSync(robotsPath)) {
    res.type('text/plain').sendFile(robotsPath);
  } else {
    res.type('text/plain').send('User-agent: *\nAllow: /\n');
  }
});

app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const sitemapPath = path.resolve(__dirname, 'public/sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    res.type('application/xml').sendFile(sitemapPath);
  } else {
    res.status(404).send('Not found');
  }
});

// Contact / Project Inquiry submission endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const {
      fullName,
      email,
      company,
      website,
      country,
      service,
      budget,
      timeline,
      description
    } = req.body;

    // Strict validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid full name (at least 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid business email address.'
      });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a project description with at least 10 characters.'
      });
    }

    const inquiryId = `ETA-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    const newInquiry = {
      id: inquiryId,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      company: company ? String(company).trim() : 'Undisclosed',
      website: website ? String(website).trim() : '',
      country: country ? String(country).trim() : 'International / Unspecified',
      service: service || 'Comprehensive Digital Strategy',
      budget: budget || 'To be discussed',
      timeline: timeline || 'Standard',
      description: description.trim(),
      status: 'pending_review'
    };

    let inquiries: Array<typeof newInquiry> = [];
    try {
      if (fs.existsSync(inquiriesFile)) {
        const fileData = fs.readFileSync(inquiriesFile, 'utf-8');
        inquiries = JSON.parse(fileData);
      }
    } catch {
      inquiries = [];
    }

    inquiries.unshift(newInquiry);
    fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));

    console.log(`[ETA Inquiry Registered] ID: ${newInquiry.id} | From: ${newInquiry.fullName} (${newInquiry.email}) | Company: ${newInquiry.company}`);

    return res.status(201).json({
      success: true,
      inquiryId: newInquiry.id,
      message: 'Inquiry received successfully. Founder Aissa El Garram will review your requirements within 24 business hours.',
      inquiry: {
        id: newInquiry.id,
        fullName: newInquiry.fullName,
        service: newInquiry.service,
        timestamp: newInquiry.timestamp
      }
    });
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while saving your inquiry. Please reach out directly to elgarram.aissa@outlook.com.'
    });
  }
});

// Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[ETA Agency Server] Running on http://0.0.0.0:${port}`);
  });
}

startServer();
