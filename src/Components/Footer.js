import React from 'react';
import { Footer, Grommet, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

<<<<<<< HEAD
export const FooterComp = (props) => (
    <Grommet theme={hpe} themeMode="light" background={props.backgroundImage}>
        <Footer  justify="left" pad="xsmall"
                style={{position:"fixed",bottom:0, width:"100%"}}>
            <Text textAlign="center" size="small">
                Copyright © 2021. All rights reserved.
=======
export const FooterComp = () => (
    <Grommet theme={hpe} themeMode="light" background="background-back">
        <Footer background="light-4" justify="center" pad="xsmall">
            <Text textAlign="center" size="small">
                Copyright © 2021 - Present. All rights reserved.
>>>>>>> 9da6d4f1688dadac8e4434d189594a97bdb332a2
            </Text>
        </Footer>
    </Grommet>
);