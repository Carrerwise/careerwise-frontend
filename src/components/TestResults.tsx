import React from 'react';
import { Box, Text, Stack, Heading, Grid, GridItem, Center } from '@chakra-ui/react';
import { SurveyData } from '../interfaces/ResultData';
import '../styles/SurveyResults.css';

interface SurveyResultsProps {
  data: SurveyData[];
}

const SurveyResults: React.FC<SurveyResultsProps> = ({ data }) => {
    return (
        <Stack spacing={4}>
          {data.map((survey, index) => (
            <Box key={index} className="resultItem" _hover={{
              background: "#ededed",
              cursor: "pointer"
            }}
            >
              <Heading as="h3" size="lg" mb={2} fontWeight={"normal"} color={"#373030"}>
                {survey.career}
              </Heading>
              <Grid >
                {survey.options.map((option: { institution: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, optionIndex: React.Key | null | undefined) => (
                  <GridItem key={optionIndex}>
                    <Center p={2} bg="gray.200" borderRadius="md">
                      <Text>{option.institution}</Text>
                    </Center>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      );
};

export default SurveyResults;
