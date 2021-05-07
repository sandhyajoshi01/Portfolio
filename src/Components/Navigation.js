import React from 'react';
import Logo from '../Images/Logo.png';
import {Projects} from "./Projects";
import {
    Grommet,
    Box,
    Header,
    Anchor,
    Image,
    Nav,
    Menu,
    ResponsiveContext
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

const items_nav = [
    { label: 'PROJECT',href:'./projects'},
    { label: 'TECHNOLOGY STACK', href: '/tech' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
];


export const Navigation = (props) =>(
    <Grommet theme={hpe} themeMode="light" background={props.backgroundImage}>
        <Router>
            <div>
                <Switch>
                    <Route path='/projects' component={Projects}/>
                    {/*<Route path='/tech' component={Techstack}/>
                <Route path='/about' component={About}/>
                <Route path='/contact'component={Contact}/>*/}
                </Switch>
            </div>
        </Router>
        <div>
            <Header pad="small" height="xsmall" justify="center">
                <Box direction="row" align="center" gap="small">
                    <Anchor href="/">
                        <Image src={Logo} style={{width:"80px", height:"60px"}}/>
                    </Anchor>
                </Box>
                <ResponsiveContext.Consumer>
                    {responsive =>
                        responsive === 'small' ? (
                            <Box height="medium" justify="center" align="center" pad="large">
                                <Menu
                                    dropProps={{align: {top: 'bottom', left: 'left'}}}
                                    label="Menu"
                                    items={items_nav}
                                    href={items_nav.href}
                                />
                            </Box>
                        ) : (
                            <Nav direction="row">

                                {items_nav.map(item => (
                                    <Anchor color="black"
                                            href={item.href}
                                            label={item.label}
                                            key={item.label}
                                    />
                                ))}
                            </Nav>
                        )
                    }
                </ResponsiveContext.Consumer>
            </Header>
        </div>
    </Grommet>
)