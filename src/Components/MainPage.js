import React from 'react';
<<<<<<< HEAD
=======
import Sandhya from '../Images/MainPage.JPG';
import Logo from '../Images/Logo.png';
>>>>>>> 9da6d4f1688dadac8e4434d189594a97bdb332a2
import {
    Heading,
    Grommet,
    Text,
<<<<<<< HEAD
    Box
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';

=======
    Box,
    Header,
    Anchor,
    Image,
    Nav
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import {FooterComp} from "./Footer";

const items_nav = [
    { label: 'PROJECT', href: '#' },
    { label: 'TECHNOLOGY STACK', href: '#' },
    { label: 'ABOUT', href: '#' },
    { label: 'CONTACT', href: '#' },

];
>>>>>>> 9da6d4f1688dadac8e4434d189594a97bdb332a2

function MainPage() {
    return (
        <Grommet theme={hpe} themeMode="light" background="background-back">
<<<<<<< HEAD
            <div>
=======
            <div style={{
                // The background image to be responsive
                backgroundImage: `url(${Sandhya})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                minHeight:"100%",
                minWidth:"100%",
                position:"fixed"
            }}>
                <Header pad="small" height="xsmall" justify="center">

                    <Box direction="row" align="center" gap="small">
                        <Anchor href="/">
                        <Image src={Logo} style={{width:"80px", height:"60px"}}/>
                        </Anchor>
                    </Box>
                    <Nav direction="row">
                        {items_nav.map(item => (
                            <Anchor color="black" href={item.href} label={item.label} key={item.label} />
                        ))}
                    </Nav>

                </Header>

>>>>>>> 9da6d4f1688dadac8e4434d189594a97bdb332a2
                <Box pad="medium"  width="medium" height="medium" style={{position:'absolute', justifyContent:"center"}}>
                    <div style={{color:"#000000"}}>
                        <Heading level={2} alignSelf="center">SANDHYA JOSHI</Heading>
                        <Text size="xlarge">
                            Software Developer && Computer Engineer <br/>
                            #WomanInTechnology
                        </Text>
<<<<<<< HEAD
                    </div>
                </Box>
            </div>
        </Grommet>
    );
};
=======
                        {/*<Paragraph size="large">*/}
                        {/*    Born and brought-up in NEPAL, currently in CANADA.*/}
                        {/*</Paragraph>*/}
                    </div>
                </Box>
            </div>

        </Grommet>
    );
};



>>>>>>> 9da6d4f1688dadac8e4434d189594a97bdb332a2
export default MainPage;