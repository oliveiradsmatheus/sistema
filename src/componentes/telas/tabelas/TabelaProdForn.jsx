import { Alert, Button, Container, Spinner, Table } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarProdutos } from "../../../redux/produtoReducer.js";
import { useNavigate } from "react-router-dom";
import ESTADO from "../../../redux/estados.js";

export default function TabelaProdForn(props) {
    const { estado, mensagem, listaDeProdutos } = useSelector(estado => estado.produto);
    const despachante = useDispatch();
    const navegar = useNavigate();
    var qtde = 0;

    function formatarData(data) {
        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    useEffect(() => {
        despachante(buscarProdutos());
    }, [despachante]);

    if (estado === ESTADO.PENDENTE) {
        return (
            <Container>
                <Spinner animation="border" role="status"></Spinner>
                <Alert variant="dark">{mensagem}</Alert>
            </Container>
        );
    } else if (estado === ESTADO.ERRO) {
        return (
            <Container>
                <Alert variant="danger">{mensagem}</Alert>
            </Container>
        );
    } else if (estado === ESTADO.OCIOSO) {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Preço de custo</th>
                            <th>Preço de venda</th>
                            <th>Qtd. em Estoque</th>
                            <th>Imagem</th>
                            <th>Validade</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaDeProdutos.map((produto) => {
                                if (produto.fornecedor.codigo === props.idUrl) {
                                    qtde++;
                                    return (
                                        <tr key={produto.codigo}>
                                            <td>{produto.codigo}</td>
                                            <td>{produto.descricao}</td>
                                            <td>{produto.precoCusto}</td>
                                            <td>{produto.precoVenda}</td>
                                            <td>{produto.qtdEstoque}</td>
                                            <td><img style={{
                                                "width": "40px",
                                                "height": "40px"
                                            }} src={produto.urlImagem} alt="foto do produto" /></td>
                                            <td>{formatarData(produto.dataValidade)}</td>
                                            <td>{produto.categoria.descricao}</td>
                                        </tr>
                                    );
                                }
                            })
                        }
                    </tbody>
                </Table>
                <Button className="auto" onClick={() => navegar("/fornecedores")}>
                    Voltar
                </Button>
                <p>Quantidade de produtos cadastrados: {qtde}</p>
            </Container >
        );
    }
}