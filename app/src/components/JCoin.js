import React from "react";
import { newContextComponents } from "drizzle-react-components";
import { DrizzleContext } from "drizzle-react";

import {
    Card,
    Box,
    Flex,
    Text,
    Heading,
    Input,
    Button,
    Loader
} from "rimble-ui";

const { ContractData, ContractForm } = newContextComponents;

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

            const { accounts } = drizzleState;
            return (
                <Box mb={20}>
                    <Card bg="#fff">
                        <Heading.h4>JCoin Contract</Heading.h4>
                        <Flex mt={2}>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    Total Supply:
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                    color="salmon"
                                >&nbsp;
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="JCoin"
                                        method="totalSupply"
                                        methodArgs={[{ from: accounts[0] }]}
                                    />{" "}
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="JCoin"
                                        method="symbol"
                                        hideIndicator
                                    />
                                </Text>
                            </Box>
                        </Flex>

                        <Flex mt={2}>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    My Balance:
                            </Text>
                            </Box>
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                    color="salmon"
                                >&nbsp;
                                    <ContractData
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="JCoin"
                                        method="balanceOf"
                                        methodArgs={[accounts[0]]}
                                    />
                                </Text>
                            </Box>
                        </Flex>

                        <Flex
                            mt={2}
                            pb={10}
                            flexBasis="auto"
                            flexDirection="column"
                        >
                            <Box>
                                <Text
                                    bold
                                    fontWeight="700"
                                >
                                    Send Tokens:
                            </Text>
                            </Box>
                            <Box>
                                <Text>
                                    <ContractForm
                                        drizzle={drizzle}
                                        drizzleState={drizzleState}
                                        contract="JCoin"
                                        method="transfer"
                                        render={({ inputs, inputTypes, state, handleInputChange, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>
                                                {inputs.map((input, index) => (
                                                    <Input
                                                        key={input.name}
                                                        type={inputTypes[index]}
                                                        name={input.name}
                                                        value={state[input.name]}
                                                        placeholder={input.name}
                                                        onChange={handleInputChange}
                                                        mr={10}
                                                    />
                                                ))}
                                                <Button
                                                    icon="Send"
                                                    iconOnly
                                                    key="submit"
                                                    type="button"
                                                    onClick={handleSubmit}
                                                    position="relative"
                                                    top={7}
                                                >Send</Button>
                                            </form>
                                        )}
                                    />
                                </Text>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            );
        }}
    </DrizzleContext.Consumer>
);
