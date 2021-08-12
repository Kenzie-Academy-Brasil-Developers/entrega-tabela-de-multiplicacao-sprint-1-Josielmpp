            // Se preferir, utilize o script em um arquivo .js separado.
            function nomeDaSuaFuncao() { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
                // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
            
            
                let tabuada = []
                let resultado = 0

                for (let i = 0; i <= 10; i++) {//cria 11 array
                    
                    
                    let x = []
                    tabuada.push(x)
                        for(let contador = 0; contador <= 10 ; contador++){
                            resultado = contador * i
                            tabuada[i].splice(10,0,resultado)
                            // console.log(contador)
                            // console.log("i "+i+"x"+" "+contador+" = "+contador * i)

                        }    
                        
                   
                   
                
                }
               
                console.table(tabuada)
            }
            nomeDaSuaFuncao()