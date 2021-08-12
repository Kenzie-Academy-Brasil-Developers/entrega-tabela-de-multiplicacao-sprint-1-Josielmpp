            function tabuadaDoUmAoDez() {
            
                let tabuada = []
                let resultado = 0

                for (let i = 0; i <= 10; i++) {
                    
                    
                    let x = []
                    tabuada.push(x)
                        for(let contador = 0; contador <= 10 ; contador++){
                            resultado = contador * i
                            tabuada[i].splice(10,0,resultado)
                        }    
                        
                   
                   
                
                }
               
                console.table(tabuada)
            }
            tabuadaDoUmAoDez()

            //----------------------------------------------------------------

            function tabuadaComParametro(tamanhoTable) {
            
                let tabuada = []
                let resultado = 0

                for (let i = 0; i <= tamanhoTable; i++) {
                    
                    
                    let x = []
                    tabuada.push(x)
                        for(let contador = 0; contador <= tamanhoTable ; contador++){
                            resultado = contador * i
                            tabuada[i].splice(tamanhoTable,0,resultado)
                        }    
                        
                   
                   
                
                }
               
                console.table(tabuada)
            }
            tabuadaComParametro()