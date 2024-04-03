import expressJSDocSwagger from 'express-jsdoc-swagger';
import * as url from 'node:url';

// _dirname does not work in ESM modules
// use this constant instead of _dirname.
const dirname = url.fileURLToPath(new URL('..', import.meta.url));

const options = {
  info: {
    version: '1.0.0',
    title: 'O Bon Pain',
    description: "Documentation de l'API O Bon Pain",
  },
  // Base directory which we use to locate your JSDOC files
  baseDir: dirname,
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.js',
  // URL where SwaggerUI will be rendered - access road
  swaggerUIPath: '/api-docs',
  // active the web page of this documentation ?
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: false,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/',
  // Set non-required fields as nullable by default - required value may be null by default ?
  notRequiredAsNullable: false,
  // You can customize your UI options. - CSS option to customize the doc
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {},
};

export default (app) => expressJSDocSwagger(app)(options);
