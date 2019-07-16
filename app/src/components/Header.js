import React from 'react';
import { Box, Card, Heading } from 'rimble-ui';

import logo from "../logo.png";

const Header = () => (
    <Box my={4}>
        <Card
            bg="salmon"
            color="white"
        >
            <img src={logo} alt="drizzle-logo" />
            <Heading.h1>
                Dappapotomous
            </Heading.h1>
            <Heading.h4>
                Drizzle + Rimble UI + Toastify + 3box Hover Profile
            </Heading.h4>
        </Card>
    </Box>
);

export default Header;