import React from 'react';
import { Box, Text, Heading, Grid, GridItem, Center, ListItem, UnorderedList, Divider } from '@chakra-ui/react';

type CareersItemProps = {
    prop: any;
    label: string;
}
 
const CareersItem = ({ prop, label }: CareersItemProps) => {
    return (
        <Box className="resultItem" _hover={{
            background: "#ededed",
            }}
        >
            <Heading as="h3" size="lg" mb={2} fontWeight={"normal"} color={"#3c3b3d"}>
            💡{label}
            </Heading>
            <Grid>
            {prop.map((item: any , idx: number) => (
                    <GridItem key={idx}>
                        <Center p={2} bg="gray.200" borderRadius="md">
                            <Text>{item.name}</Text>
                        </Center>
                        <Center p={2} bg="gray.200" borderRadius="md">
                            <UnorderedList>
                                <ListItem><Text> {'🏫 ' + item.institution}</Text></ListItem>
                                <ListItem><Text> {'📍 ' + item.city}</Text></ListItem>
                                <ListItem><Text> {'⚡️ ' + item.type}</Text></ListItem>
                                <ListItem><Text> {'📃 ' + item.academy_level}</Text></ListItem>
                            </UnorderedList>
                        </Center>
                        {idx < prop.length - 1 && <Divider mt={2} mb={2}/>}
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}

export default CareersItem;