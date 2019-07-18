import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import {
    Card,
    Box,
    Heading,
    Button,
    Loader
} from "rimble-ui";

import ProfileHover from 'profile-hover';

const { AccountData } = newContextComponents;

export default () => (
    <DrizzleContext.Consumer>
        {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;
            if (!initialized) {
                return (
                    <Button mt={3}>
                        <Loader color="white" />
                    </Button>
                )
            }

            return (
                <Box mb={20}>
                    <Card bg="#fff">
                        <Heading.h4>3Box Profile Hover</Heading.h4>
                        <AccountData
                            drizzle={drizzle}
                            drizzleState={drizzleState}
                            accountIndex="0"
                            units="ether"
                            precision="3"
                            render={({ address }) => (
                                <Box
                                    mt={3}
                                    pb={55}
                                    width={[
                                        1,
                                        1,
                                        0.5
                                    ]}
                                >
                                    <ProfileHover 
                                        address={address}
                                        orientation="top"
                                        showName="true"
                                        tileStyle="true"
                                        url="https://develop.3box.io/hub"
                                    />
                                </Box>
                            )}
                        />
                    </Card>
                </Box>
            );
        }}
    </DrizzleContext.Consumer>
);
