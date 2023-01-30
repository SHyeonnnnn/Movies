
import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }//1

  componentDidMount(){//3
    setTimeout(() => {
      this.setState({isLoading:false})//isLoading을 false로 만드는데 5초걸려라
    }, 5000);
  }
  render() {//2
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    );
  }
}

export default App;