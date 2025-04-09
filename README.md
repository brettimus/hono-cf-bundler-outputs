This is a repo that helps inspect bundled output from `wrangler` for Hono apps.

```sh
pnpm install
pnpm bundle
```

This will create a `dist` folder with the bundled output. (The bundle _will not_ be deployed, but this is the code what _would be_ deployed.)

I've saved the outputs of a few builds in the `bundle-*` folders.

Worth noting:

- Enabling a binding in `wrangler.jsonc` does not materially change the build output

## Outputs

### bundle-01_no-bindings

A basic Hono app (the starter template).

See: [bundle-01_no-bindings/README.md](./bundle-01_no-bindings/README.md)

### bundle-02_d1-binding

See: [bundle-02_d1-binding/README.md](./bundle-02_d1-binding/README.md)
