import { NavLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const nfts = [
    { id: 1, name: 'JohnS' },
    { id: 2, name: 'Furk' },
];


const DynamicNftBreadcrumb = (match: any) => {
    return (
        <span>{nfts[match.params.userId]}</span>
    );
};

const routes = [
    { path: '/nfts/:nftId', breadcrumb: DynamicNftBreadcrumb },
    { path: '/bond', breadcrumb: 'Bond' },
    { path: '/', breadcrumb: 'Home' }
];

const UcBreadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">

                {breadcrumbs.map(({
                    match,
                    breadcrumb
                }) => (
                    <>
                        <Link
                            underline="hover"
                            color="text.primary"
                            href={match.pathname}
                            aria-current="page"
                        >
                            {breadcrumb}
                        </Link>
                    </>
                ))}
            </Breadcrumbs>

        </>
    );
};

export default UcBreadcrumbs;
