import React from 'react';
import { Box, Text, Heading, Grid, GridItem, Center,ListItem,UnorderedList} from '@chakra-ui/react';
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
                💡{label}
            </Heading>
            <Grid>
                <GridItem key={prop.name}>
                    <Center p={2} bg="gray.200" borderRadius="md">
                        <Text>{prop.aptitude}{prop.activity}{prop.name}</Text>
                        {
                            label == 'Carrera' &&
                            <>
                            <UnorderedList>
                                <ListItem><Text> {'🏫 ' + prop.institution}</Text></ListItem>
                                <ListItem><Text> {'📍 ' + prop.city}</Text></ListItem>
                                <ListItem><Text> {'⚡️ ' + prop.type}</Text></ListItem>
                                <ListItem><Text> {'📃 ' + prop.academy_level}</Text></ListItem>
                            </UnorderedList>
                            </>
                        }

                    </Center>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default ResultItem;