import { Hono } from 'hono'
import { renderer } from './renderer'
import { readFileSync } from 'fs'



const cfg_file = readFileSync('./config.json', 'utf8')
const CONFIG = JSON.parse(JSON.stringify(cfg_file))


const app = new Hono()

/*---------------------------------------------*\
  terms:
  - rdr     => redirect
  - lnk     => link
  - rtn     => return
  - qr      => QR code
  - mbd     => embed
  - c       => context

  URL Schema: 
  1. /              => Home Page
  2. /*             => rdr (1.)
  3. /[link]        => rdr link, else (1.)
  4. /[link]?qr     => rtn qr, else (1.)

  lnks rtn oEmbed, openGraph, and twitterCard data

                    




\*---------------------------------------------*/


interface Link {
  name: string,
  desc: string,
  url:  string,
}

const links: Link[] = [
  {
    name: 'test',
    desc: 'testing',
    url:  'https://youtu.be/dQw4w9WgXcQ',
  }
];

app.get('*', (c) => {

  const link = links.find((link) => link.name === c.req.path.slice(1))
  const qr = c.req.queries().qr ? true : false;

  if (c.req.path === '/') { return c.render(<h1>Test</h1>) }
  else if (link) { return handler(c, link, qr) }               
  else { return c.redirect('/') }

});



/**
 * Handles the link and generates a QR code if specified.
 * @param c Hono context.
 * @param link The link to be handled.
 * @param qr Whether to generate a QR code or not.
 */
async function handler(c: any, link: Link, qr: boolean) {
  const headers = {
    "og:title": link.name,
    "og:description": link.desc,
    "og:url": c.req.url,
  }
  if (!qr) { return c.redirect(link.url, 301, headers) }
  else { return c.render(c.req.url) }
}


export default app;
