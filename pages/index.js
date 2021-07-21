import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
   background: #FFFFFF;
   border-radius: 8px;
   font-family: sans-serif;
`

export default function Home() {
  return (
  <Box>
    Amigos
  </Box>
  )
}
