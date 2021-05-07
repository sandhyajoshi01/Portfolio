import React from 'react';
import {
    Heading,
    Grommet,
    Text,
    Box
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';


function MainPage() {
    return (
        <Grommet theme={hpe} themeMode="light" background="background-back">
            <div>
                <Box pad="medium"  width="medium" height="medium" style={{position:'absolute', justifyContent:"center"}}>
                    <div style={{color:"#000000"}}>
                        <Heading level={2} alignSelf="center">SANDHYA JOSHI</Heading>
                        <Text size="xlarge">
                            Software Developer && Computer Engineer <br/>
                            #WomanInTechnology
                        </Text>
                    </div>
                </Box>
            </div>
        </Grommet>
    );
};
export default MainPage;