import React from 'react';
import { Footer, Grommet, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

export const FooterComp = () => (
    <Grommet theme={hpe} themeMode="light" background="background-back">
        <Footer background="light-4" justify="center" pad="xsmall">
            <Text textAlign="center" size="small">
                Copyright © 2021 - Present. All rights reserved.
            </Text>
        </Footer>
    </Grommet>
);