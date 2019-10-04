import TaxReport from './pages/TaxReport.svelte';
import NotFound from './pages/notfound.svelte';

const routes = new Map();

// exact path
routes.set('/', TaxReport);

// allow children to also signal link activation
routes.set('/taxreport', TaxReport);
routes.set('/taxreport/*', TaxReport);

// using named parameters, with last being optional
// routes.set('/hello/:first/:last?', name)

// wildcard parameter
// routes.set('/wild', wild)
// routes.set('/wild/*', wild)

// regular expressions
// routes.set(/^\/regex\/(.*)?/i, regex)
// routes.set(/^\/(pattern|match)(\/[a-z0-9]+)?/i, regex)

// catch-all, must be last
routes.set('*', NotFound);

export default routes;
