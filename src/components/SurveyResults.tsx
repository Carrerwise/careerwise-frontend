import React from 'react';
import { SurveyData } from 'src/interfaces/SurveyData';

interface SurveyResultsProps {
  data: SurveyData[];
}

const SurveyResults: React.FC<SurveyResultsProps> = ({ data }) => {
    return (
        <div>
          {data.map((survey, index) => (
            <div key={index}>
              <h3>{survey.career}</h3>
              <ul>
                {survey.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option.institution}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
};

export default SurveyResults;
