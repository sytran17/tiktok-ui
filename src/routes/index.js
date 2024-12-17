import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// PublicRoutes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.fololowing, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateroutes = [];

export { publicRoutes, privateroutes };
