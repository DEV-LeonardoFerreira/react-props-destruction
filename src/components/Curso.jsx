

const Curso = (props) => {
  return (
    <>
      <h5>Curso</h5>  
      <p>Nome:{props.nome}</p>
      <p>Descrição:{props.descricao}</p>
      <p>Data:{props.data}</p>
    </>
  )
}

export default Curso
