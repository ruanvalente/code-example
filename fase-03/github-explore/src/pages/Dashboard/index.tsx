import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import LogoImage from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImage} alt="Github Explore" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Explorar um repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.NDhgfatRooahRhUzBIyMYQHaHa%26pid%3DApi&f=1"
            width="400"
            height="400"
            alt="Imagem do usuário"
          />
          <div>
            <strong>user/repository</strong>
            <p>description repository</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
