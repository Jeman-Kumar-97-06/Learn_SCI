require('dotenv').config();
const puppeteer = require('puppeteer');
const {McpServer,ResourceTemplate}
                = require('@modelcontextprotocol/sdk/server/mcp.js');
const {StreamableHTTPServerTransport}
                = require('@modelcontextprotocol/sdk/server/streamableHttp.js');
const cors      = require('cors');
const express   = require('express');
const mongoose  = require('mongoose');
const app       = express();
const {z}       = require('zod');
const NewsAPI   = require('newsapi');
const newapi    = new NewsAPI(process.env.NEWS_API)

// async function generatePdfFromHtml(htmlContent, outputPath = 'output.pdf') {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
//     await page.pdf({ path: outputPath, format: 'A4' });
//     await browser.close();
// }

// // Example usage:
// generatePdfFromHtml('<h1>Hello, Node.js PDF!</h1><p>This is a test.</p>');

app.use(express.json());
app.use(cors());

const mcpserver = new McpServer({
    name:"eduserver",
    version: "1.0.0"
});

mcpserver.registerTool(
    'news_articles',
    {
        title:"News Articles",
        description:"News articles about science and technology",
        inputSchema:{a:z.string()},
        outputSchema:{result:z.array(z.object())}
    },
    async (a=>{
        const output = [];
        const articles1 = await 
    })
)