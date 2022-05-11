import {gql} from "@apollo/client"

export const GET_ID_COMMERCES = gql`{
    commerces {
        edges {
            node {
                id
            }
        }
    }
}`;

export const GET_COMMERCES = gql`{
    commerces {
        edges {
            node {
                id
                name
                description
            }
        }
    }
}`;

export const GET_DATA_COMMERCE = gql`
    query commerce($id: ID!) {
        commerce(id: $id) {
            id
            description
            storekeeperWord
            address
            phone
            email
            businessHours {
                monday {
                    opening
                    closing
                }
                tuesday {
                    opening
                    closing
                }
                wednesday {
                    opening
                    closing
                }
                thursday {
                    opening
                    closing
                }
                friday {
                    opening
                    closing
                }
                saturday {
                    opening
                    closing
                }
                sunday {
                    opening
                    closing
                }
            }
            products {
                edges {
                    node {
                        id
                        name
                        price
                        unit
                        isBreton
                    }
                }
            }
        }
    }
`;