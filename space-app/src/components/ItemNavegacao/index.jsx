import styled from "styled-components"

const ItemDeLista  = styled.li`
  
`

export const ItemNavegacao = ({children, iconeAtivo, iconeInativo, ativo}) => {
  return (
    <ItemDeLista>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
      {children}
    </ItemDeLista>
  )
}
