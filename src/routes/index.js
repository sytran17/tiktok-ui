import routeConfig from '~/config/routes';

//Layout
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// PublicRoutes
const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.fololowing, component: Following },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.search, component: Search, layout: null },
];

const privateroutes = [];

export { publicRoutes, privateroutes };
