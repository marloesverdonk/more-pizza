import React from 'react'

export default class AddPizzaForm extends React.Component {
  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.name && this.state.description) {
      this.props.addPizza({
        name: this.state.name,
        description: this.state.description,
        ingredients: [this.state.ingredient1, this.state.ingredient2, this.state.ingredient3]
      })
    }
  }

  render() {
    return (
      <div>
        <h2> Add a pizza</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br></br>

          <label>
            Description:
          <input type="text" name="description" onChange={this.handleChange} />
          </label>
          <br></br>

          <label>
            Ingredients:
            <input type='text' name='ingredient1' onChange={this.handleChange} />
            <input type='text' name='ingredient2' onChange={this.handleChange} />
            <input type='text' name='ingredient3' onChange={this.handleChange} />
          </label>
          <br></br>


          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}