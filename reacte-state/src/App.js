import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "Développeur Full Stack passionné par le JavaScript et React.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Ingénieur Logiciel"
      },
      show: false,
      elapsedTime: 0
    };
  }

  componentDidMount() {
    // Démarre un intervalle qui incrémente elapsedTime chaque seconde
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoie l'intervalle lorsque le composant est démonté
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  render() {
    const { Person, show, elapsedTime } = this.state;
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={this.toggleShow}>
          {show ? "Cacher le profil" : "Afficher le profil"}
        </button>
        
        {show && (
          <div style={{ marginTop: '20px' }}>
            <img src={Person.imgSrc} alt="Profil" style={{ borderRadius: '50%' }} />
            <h1>{Person.fullName}</h1>
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
          </div>
        )}
        
        <p>Temps écoulé depuis le montage du composant : {elapsedTime} seconde(s)</p>
      </div>
    );
  }
}

export default App;
