import TaxReport from './pages/TaxReport.svelte';
import NotFound from './pages/notfound.svelte';

const routes = {
  '/': TaxReport,
  '/taxreport/*': TaxReport,
  '*': NotFound
};

export default routes;
