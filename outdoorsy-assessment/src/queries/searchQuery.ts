import { useQuery, gql } from '@apollo/react-hooks'


const GET_GREETING = gql`
  query GetGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

export function searchRvsQuery() {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: 'english' }
  });
  
  return { loading, error, data } 
}