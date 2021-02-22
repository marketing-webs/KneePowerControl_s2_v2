import React from 'react'
import styled from 'styled-components'

const StyledBold = styled.div`
display: inline-block;
`

const Bold = ({ children }) => {
    return (
        <StyledBold>
            {children}
        </StyledBold>
    )
}

export default Bold
