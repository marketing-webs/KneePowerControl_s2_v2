import React from 'react'
import styled from 'styled-components'

const StyledBold = styled.div`
display: inline-block;
`

const Bold = ({ children }, ...props) => {
    return (
        <StyledBold as={props.spanItem}>
            {children}
        </StyledBold>
    )
}

export default Bold
