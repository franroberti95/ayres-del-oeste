import React from 'react';
import styled from "styled-components";
import Grid from '@mui/material/Grid';

const Comment = () =>
    <CommentContainer container spacing={2}>
        <Grid item xs={4}>
           
        </Grid>

        <ImageContainer item xs={3}>

        </ImageContainer>

        <InmobiliariaConteiner item xs={5}>  

        </InmobiliariaConteiner>

    </CommentContainer>;


const CommentContainer = styled(Grid)`
  
`;
const ImageContainer = styled(Grid)`
  
`;
const InmobiliariaConteiner = styled(Grid)`
 
`;



export default Comment