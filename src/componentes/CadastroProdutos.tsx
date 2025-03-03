import {  ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from 'react-router-dom';
import './cadastroProduto.css'
import {Link} from 'react-router-dom'
function CadastroProduto(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")
    const [preco,setPreco] = useState("")
    const [imagem,setImagem] = useState("")
    const [cor,setCor] = useState("")
    const [composicao,setComposicao] = useState("")
    const [tamanhos,setTamanhos] = useState("")
    const [estoque,setEstoque] = useState("")
   


    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar produtos");
        const produto = {
            id: id,
            nome: nome,
            descricao: descricao,
            preco: preco,
            imagem: imagem,
            cor: cor,
            composicao: composicao,
            tamanhos: tamanhos,
            estoque: estoque
        }
        fetch("https://e-commerce-back-end-2.onrender.com/roupas",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if(response.status === 200){
                alert("Produto cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar produto")
            }
        })




    }
   function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handlePreco(event:ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value)
    }
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }
    function handleCor(event:ChangeEvent<HTMLInputElement>){
        setCor(event.target.value)
    }
    function handleComposicao(event:ChangeEvent<HTMLInputElement>){
        setComposicao(event.target.value)
    }
    function handleTamanhos(event:ChangeEvent<HTMLInputElement>){
        setTamanhos(event.target.value)
    }
    function handleEstoque(event:ChangeEvent<HTMLInputElement>){
        setEstoque(event.target.value)
    }
   


   
    return(
        <>
            <header className="cabecalho">
        <h1>Mundo Encantado</h1>
        <p>Adicione novos produtos ao sistema</p>


        <button className='buttonCAD'><Link to={"/"}>Voltar</Link></button>
    </header>
           
            <div className="cadastro">


                <div className="titulo"><span>Cadastro de Produtos</span></div>
                <div className="formulario">
                <form onSubmit={handleForm}>
                    <div>
                        <input placeholder="Id" type="text" name="id" id="id" onChange={handleId} />
                    </div>
                    <div>
                        <input placeholder="Nome" type="text" name="nome" id="nome" onChange={handleNome} />
                    </div>
                    <div>
                        <input placeholder="Descrição" type="text" name="descricao" id="descricao" onChange={handleDescricao} />
                    </div>
                    <div>
                        <input placeholder="Preço" type="text" name="preco" id="preco" onChange={handlePreco} />
                    </div>
                    <div>
                        <input placeholder="Cor" type="text" name="cor" id="cor" onChange={handleCor} />
                    </div>
                    <div>
                        <input placeholder="Composição" type="text" name="composicao" id="composicao" onChange={handleComposicao} />
                    </div>
                    <div>
                        <input placeholder="Tamanhos" type="text" name="tamanhos" id="tamanhos" onChange={handleTamanhos} />
                    </div>
                    <div>
                        <input placeholder="Estoque" type="text" name="estoque" id="estoque" onChange={handleEstoque} />
                    </div>
                    <div>
                        <input placeholder="URL Imagem" type="text" name="imagem" id="imagem" onChange={handleImagem} />
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}


export default CadastroProduto

