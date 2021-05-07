import React from 'react';
import { Footer, Grommet, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

export const FooterComp = (props) => (
    <Grommet theme={hpe} themeMode="light" background={props.backgroundImage}>
        <Footer  justify="left" pad="xsmall"
                style={{position:"fixed",bottom:0, width:"100%"}}>
            <Text textAlign="center" size="small">
                Copyright © 2021. All rights reserved.
            </Text>
        </Footer>
    </Grommet>
);