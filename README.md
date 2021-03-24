# webpack-5-stats-no-exit

Run the following commands after cloning to reproduce:
* `yarn`
* `yarn repro`

You will see that webpack never prints out `webpack 5.28.0 compiled successfully` and does not pick up any further changes to `./index.js`.

If you run `yarn no-repro` instead everything works as expected.

### Other

Running `yarn serve` demonstrates how this can block `webpack-dev-server` from coming available.

Running `yarn build` demonstrates that this has no effect on normal builds.
