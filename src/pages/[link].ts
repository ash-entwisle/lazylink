import { Config } from "../../config/config.ts";

import type { APIContext } from "astro";
import type { LLLink } from "../types.ts";

export async function GET({ params, request }: APIContext) {
    const link = params.link;
    const redir = Config.links.find((l: LLLink) => l.link === link);

    if (redir) {
        let headers = new Headers();
        
        headers.set("og:title", Config.title);
        headers.set("og:description", Config.about);
        headers.set("og:url", request.url);
        headers.set("Location", redir.href);

        return { headers, status: 302 }
    }

}