import Breadcrumbs from '@mui/material/Breadcrumbs';
import * as MuiLink from '@mui/material/Link';
import { Link, useNavigate } from 'react-router-dom';

import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useLocation } from 'react-router-dom'

const nfts = [
    { id: 1, name: 'JohnS' },
    { id: 2, name: 'Furk' },
];


const DynamicNftBreadcrumb = (match: any) => {
    return (
        <span>{nfts[match.params.userId]}</span>
    );
};
export const homePath = "/";

export const routes = [
    { path: homePath, breadcrumb: 'Home', navText: 'Home', hidden: true },
    { path: '/explore', breadcrumb: 'Explore', navText: 'Explore', subItems:[{title: "test1", path:'' }, { title: "test2", path:''}] },
    { path: '/earn', breadcrumb: 'Earn', navText: 'Earn' },
    { path: '/bond', breadcrumb: 'Bond', navText: 'Bond' },
    { path: '/craft', breadcrumb: 'Craft', navText: 'Craft' },
    { path: '/governance', breadcrumb: 'Governance', navText: 'Governance' }
    // { path: '/nfts/:nftId', breadcrumb: DynamicNftBreadcrumb } dynamic breadcrumb example
];


const UcBreadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    const location = useLocation();
    let navigate = useNavigate();

    const handleLinkClick = (pathname: string) => {
        navigate(pathname);
    }

    return (
        <>
            {location.pathname !== homePath &&
                <Breadcrumbs aria-label="breadcrumb">

                    {breadcrumbs.map(({
                        match,
                        breadcrumb
                    }, index) => (
                        <div key={index}>
                            {index === breadcrumbs.length - 1 ?
                                <MuiLink.default
                                    underline="none"
                                    color="text.primary"
                                    aria-current="page"
                                    key={index}
                                    sx={{cursor:"pointer"}}
                                >
                                    {breadcrumb}
                                </MuiLink.default>
                                :
                                
                                    <MuiLink.default
                                        underline="hover"
                                        color="text.primary"
                                        aria-current="page"
                                        key={index}
                                        onClick={() => handleLinkClick(match.pathname)}
                                        sx={{cursor:"pointer"}}
                                    >
                                        {breadcrumb}
                                    </MuiLink.default>
                                
                            }


                        </div>
                    ))}
                </Breadcrumbs>
            }
        </>
    );
};

export default UcBreadcrumbs;
