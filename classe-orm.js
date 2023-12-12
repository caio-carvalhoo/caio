//Classe pai ORM
class ORM {

    static criar(item){
        this.vetor.push(item)
    }

    static excluir(id){
        this.vetor = this.vetor.filter(item => item.id != id)
    }

    static listar(){
        console.table(this.vetor)
    }

    static alterar(novoItem) {
        const itemIndex = this.vetor.findIndex(item => item.id === novoItem.id)
        if (itemIndex !== -1) {
            this.vetor[itemIndex] = novoItem
        }
    }

   
}
//Classes que herdam a classe ORM
class Professor extends ORM {
    static vetor = []
}

class Animal extends ORM {
    static vetor = []
}
//criar
Professor.criar({id: 1, nome: "Caio", idade: 18})
Professor.criar({id: 2, nome: "Matheus", idade: 28})
Animal.criar({id: 1, raça: "Jumento", idade: 1})
Animal.criar({id: 2, raça: "Cavalo", idade: 2 })

//listar
Professor.listar()
Animal.listar()

//excluir
Professor.excluir(2)
Animal.excluir(2)
Professor.listar()
Animal.listar()


//alterar
Professor.alterar({id: 1, nome: "Caio Augusto", idade: 18})
Animal.alterar({id: 1, raça: "Jumento Baixotinho", idade: 1})
Professor.listar()
Animal.listar()