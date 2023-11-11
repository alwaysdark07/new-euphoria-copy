import { useDisclosure } from '@mantine/hooks';
import React, { useEffect } from 'react'
import Header from './Header';
import { router } from '../routes/routes';
import { Outlet, useLocation } from 'react-router-dom';
import { AppShell } from '@mantine/core';

function Layout({ hideSidebar }) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);

    const location = useLocation()

    function* well() {
        console.log('invoked 1st time');
        yield 1;
        console.log('invoked 2nd time');
        yield 2;
    }

    const we = well()

    useEffect(() => {
        console.log(location)
        console.log("generator", we.next('test'))
        console.log("generator", we.next())
    }, [location?.pathname])

    return (
        <div>
            <AppShell
                // className="hidden"
                header={{ height: 111 }}
                {...(!hideSidebar && {
                    navbar: {
                        width: 300,
                        breakpoint: 'sm',
                        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened }
                    }
                })}
            // padding="md"
            >


                {/* header */}
                <AppShell.Header
                    // className="border border-rose-500"
                    withBorder={true}
                >
                    <Header
                        hideSidebar={hideSidebar}
                        mobileOpened={mobileOpened}
                        desktopOpened={desktopOpened}
                        toggleMobile={toggleMobile}
                        toggleDesktop={toggleDesktop}
                    />
                </AppShell.Header>


                {/* sidebar/navbar */}
                {
                    !hideSidebar
                    &&
                    <AppShell.Navbar p="md">
                        Navbar
                    </AppShell.Navbar>
                }



                {/* main content */}
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>


            </AppShell>
        </div>
    )
}

export default Layout 