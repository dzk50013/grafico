import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/dzk50013/apidados/main/quantidade_de_pessoas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--color-graficos')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Plataformas com mais usuários',
           
            font: {
                color: getCSS('--color-graficos'),
                size: 30,
                font: getCSS('--font')
            }
        },
        
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Plataformas',
                font: {
                    color: getCSS('--color-graficos')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número em Milhões no Brasil',
                font: {
                    color: getCSS('--color-graficos')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()
