import { Config } from "../../config/config.ts";
import type { APIContext } from "astro";
import type { LLLink } from "../types.ts";


/*
    if [link] is a link in config.ts, redirect to [link] 
    else, fall back to /public
*/

export async function GET({ params, request }: APIContext) {
    const { link } = params;

    let return_data = {
        status: 302,
        headers: new Headers({
            Location: "/",
        }),
        body: ""
    }

    const link_data = Config.links.find((l: LLLink) => l.link === link);
    if (link_data) {
        return_data.headers.set("Location", link_data.href);

        // add og meta tags if the link has an icon
        if (link_data.icon) {
            return_data.body = `
                <meta property="og:title" content="${link_data.name}" />
                <meta property="og:description" content="${link_data.desc}" />
                <meta property="og:image" content="${request.url + "/favicon.svg"}" />
                <meta property="og:url" content="${link_data.href}" />

                <meta name="twitter:title" content="${link_data.name}" />
                <meta name="twitter:description" content="${link_data.desc}" />
                <meta name="twitter:image" content="${request.url + "/favicon.svg"}" />
                <meta name="twitter:card" content="summary_large_image" />
            `;
        }
    }

    return return_data;
}