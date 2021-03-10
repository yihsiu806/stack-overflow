// Date: 2021/3/10
// url: https://stackoverflow.com/questions/66554032/how-to-execute-certain-statement-only-after-the-async-loop-execution-is-complete/
// codepen:
//    1. https://codepen.io/yihsiu806/pen/poNQqWW
//    2. https://codepen.io/yihsiu806/pen/GRNwPeq

cart = [1, 2, 3]

class Cat {

  constructor() {
    this.setState = (param) => {
      // console.log(param)
    }
  }

  doit = () => {
    const results = cart.map(async (i) => {
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
    })

    Promise.all(results).finally(() => {
      this.finalExecution();
    })
  }

  finalExecution = () => {
    console.log('finish finalExecution')
    document.body.insertAdjacentHTML('beforeend', `<div>finish finalExecution</div>`)
  }
}

const catA = new Cat()

const catA.doit()