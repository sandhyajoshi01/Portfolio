import React from 'react';
import {
    Box,
    Card,
    CardBody,
    CardFooter, CardHeader,
    Grid,
    Grommet,
    Text,
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import workstation from "../Images/workstation.jpg"

const data=[
    {
        ID:1,
        title: 'BLOCKCHAIN-BASED SHOPPING CART',
        tech: [{ID:"ReactJS"},{ID:"NodeJS"},{ID:"Spring Boot"},{ID:"WebJS"},{ID:"MYSQL"},
            {ID:"Metamask as Wallet"},{ID:"Ethereum Blockchain"},{ID:"UI Libraries"}],
        focus:'Pay users cryptocurrency Ether in their wallet if they ' +
            'permit to use/sell their data to third party companies.'
    },
    {
        ID:2,
        title: 'PORTFOLIO',
        tech: [{ID:"ReactJS"},{ID:"NodeJS"},{ID:"UI Library Grommet IO"}],
        focus:'A brief introduction about me, my work history and what I am into as a professional.' +
            ' Also, gaining exposure and widening my network.'

    }
];

export const Projects = () =>(
    <Grommet theme={hpe} full themeMode="light-4" background="background-back"
           style={{backgroundImage:`url(${workstation})`,
           backgroundSize:"cover",backgroundRepeat: 'no-repeat',
               backgroundPosition:"center",minHeight:"100%",
               minWidth:"100%"}}
    >
        <Box pad="medium" style={{marginTop:100, marginLeft:25}}>
            <Grid gap="xxsmall" columns={{ count: 'fit', size: 'xxsmall'}}>
                {data.map(value => (
                    //Card for key and cardbody for the rest.
                    <Card key={value.ID} width="medium" background="light-4">
                        <CardHeader pad="xsmall" style={{marginLeft:15,marginTop:15}}>
                            <Text>{value.title}</Text>
                        </CardHeader>
                        <CardBody>
                            <Text>TECHNOLOGIES</Text>
                            {/*renders each card horizontally*/}
                            <Grid columns={{ count:3, size: "auto"}}  gap="small" >
                                {value.tech.map(techval => (

                                    <Card key={techval.ID}
                                          width="xsmall"
                                          pad="xxsmall"
                                          background="#777777"
                                    >
                                        <CardBody pad="xxsmall"
                                                  height="auto"
                                                  justify="center"

                                        >
                                            <Text color="black">{techval.ID}</Text>
                                        </CardBody>
                                    </Card>
                                ))}
                                </Grid>

                        </CardBody>
                        <CardFooter width="medium" >
                            <Text>{value.focus}</Text>
                        </CardFooter>
                    </Card>
                ))}
            </Grid>
        </Box>
    </Grommet>
);

