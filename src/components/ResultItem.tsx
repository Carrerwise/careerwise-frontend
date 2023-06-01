import React from 'react';
import { Box, Text, Heading, Grid, GridItem, Center } from '@chakra-ui/react';

type ResultItemProps = {
    idx: number;
    prop: any;
    label: string;
}
 
const ResultItem = ({ idx, prop, label }: ResultItemProps) => {
    return (
        <Box key={idx} className="resultItem" _hover={{
            background: "#ededed",
            }}
        >
            <Heading as="h3" size="lg" mb={2} fontWeight={"normal"} color={"#373030"}>
              {label}
            </Heading>
            <Grid>
                {prop.map((item: any , idx: number) => (
                    <GridItem key={idx}>
                        <Center p={2} bg="gray.200" borderRadius="md">
                            <Text>{item.aptitude}{item.interest}{item.career}{item.institution}</Text>
                        </Center>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default ResultItem;