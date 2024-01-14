# lazylink

A link shortener and linktree alternative designed to run on cloudflare pages.

## Features

Here are some of the current and planned features of lazylink:

- [x] Link shortening
- [x] Linktree alternative
- [x] fontawesome icons
- [ ] qr code generation for links

## Usage

1. Fork this repository
2. Edit the config file in [`./config/config.ts`](https://github.com/ash-entwisle/lazylink/blob/main/config/config.ts)
3. Create a cloudflare account (if you don't already have one)
4. Create a cloudflare pages project (under the workers and pages tab)
5. Connect your forked repository to your cloudflare pages project (youll need to connect your github account to cloudflare)
6. Bobs yr uncle, you're done!
7. (Optional) Add a CNAME record to your domain pointing to your cloudflare pages project

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 

## License

This project, like most of my other project is licenced under the [AGPL-3.0](https://choosealicense.com/licenses/agpl-3.0/) license. 
This means that you are free to use, modify and distribute this software as long as you make your changes available under the same license.

## Planned Features

- [ ] qr code generation for links
- [ ] make css less of a mess
- [ ] make a better guide for setting up
- [ ] docker container for ppl who want to self host
