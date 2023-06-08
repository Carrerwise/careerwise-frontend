import React from 'react';
import { Box, Text, Heading, Grid, GridItem, Center } from '@chakra-ui/react';
import '../styles/TestResults.css';

type ResultItemProps = {
    prop: any;
    label: string;
}
 
const ResultItem = ({ prop, label }: ResultItemProps) => {
    return (
        <Box className="resultItem" _hover={{
            background: "#ededed",
            }}
        >
            <Heading as="h3" size="lg" mb={2} fontWeight={"normal"} color={"#3c3b3d"}>
              {label}
            </Heading>
            <Grid>
                <GridItem key={prop.name}>
                    <Center p={2} bg="gray.200" borderRadius="md">
                        <Text>{prop.aptitude}{prop.activity}{prop.name}</Text>
                        <Text>{prop.institution}</Text>
                        <Text>{prop.city}</Text>
                        <Text>{prop.type}</Text>
                        <Text>{prop.academy_level}</Text>
                    </Center>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default ResultItem;