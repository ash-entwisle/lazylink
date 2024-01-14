import { Config } from "../../config/config.ts";

import type { APIContext } from "astro";
import type { LLLink } from "../types.ts";

export async function GET({ params, request }: APIContext) {
    const link = params.link;
    const redir = Config.links.find((l: LLLink) => l.link === link);

    if (redir) return { status: 302,
        headers: new Headers({ Location: redir.href, })
    }
}