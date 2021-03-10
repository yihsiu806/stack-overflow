cart = [1, 2, 3]

class Cat {

  constructor() {
    this.setState = (param) => {
      // console.log(param)
    }
  }

  doit = async () => {
    for (const i of cart) {
      await axios.get(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(({ data }) => {
          this.setState({ data })
        })
        .catch(() => {
          this.setState({ error: true })
        })
        .then(() => {
          console.log(`finish fetching ${i}`)
          document.body.insertAdjacentHTML('beforeend', `<div>finish fetching ${i}</div>`)
        })
    }

    this.finalExecution()
  }

  finalExecution = () => {
    console.log('finish finalExecution')
    document.body.insertAdjacentHTML('beforeend', `<div>finish finalExecution</div>`)
  }
}

catA = new Cat()

catA.doit()