import React from 'react'
import styled from 'styled-components'
import { MainLayout } from '../style/Layouts';
function AboutPage() {
  return (
<MainLayout>
    <AboutStyled>
        <h1>Hello About pages</h1>
    </AboutStyled>
</MainLayout>

)
}

const AboutStyled =styled.section`

`;
export default AboutPage