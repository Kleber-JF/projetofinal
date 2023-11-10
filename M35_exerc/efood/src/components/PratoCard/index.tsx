import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BotaoAdicionar } from '../../styles'
import {
  CardContainer,
  CardText,
  Modal,
  ModalContent,
  ModalText
} from './styles'

import close from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import { PratoItem } from '../../pages/Home'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
  prato: PratoItem
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const PratoCard = ({ nome, descricao, foto, preco, porcao, prato }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  const getPratoDescription = (descricao: string) => {
    if (descricao.length > 175) {
      return descricao.slice(0, 172) + '...'
    }
    return descricao
  }
  return (
    <>
      <CardContainer>
        <img src={foto} alt={nome} />
        <CardText>
          <h4>{nome}</h4>
          <p>{getPratoDescription(descricao)}</p>
        </CardText>
        <BotaoAdicionar
          type="button"
          onClick={() => setModal({ isVisible: true })}
        >
          Mais detalhes
        </BotaoAdicionar>
      </CardContainer>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img
            src={close}
            alt="icone fechar"
            onClick={() => setModal({ isVisible: false })}
          />
          <ModalText>
            <img src={foto} />
            <div>
              <h4>{nome}</h4>
              <p>
                {descricao} <br />
                <br /> Serve: de {porcao}
              </p>
              <BotaoAdicionar type="button" onClick={() => addToCart()}>
                Adicionar ao carrinho - {formataPreco(preco)}
              </BotaoAdicionar>
            </div>
          </ModalText>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </Modal>
    </>
  )
}

export default PratoCard
