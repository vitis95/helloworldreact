import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;   
// }

// const user = {
//     firstName: 'Ivan',
//     lastName: 'De Vita'
// };

// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );



//const name = "Ivan De Vita"
//const element = <h1> Hello, {name}</h1>
/*ReactDOM.render(
    element,
    document.getElementById('root')
)*/

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

//  function tick() {
//      const element = (
//          <div>
//              <h1>HELLO WORLD!</h1>
//              <h2>It is {new Date().toLocaleTimeString()}.</h2>
//          </div>
//      );
//      ReactDOM.render(element, document.getElementById('root'));
//  }

// setInterval(tick, 1000); // ogni secondo viene chiamata la callback tick - che a sua volta chiama la funzione ReactDOM.render()



// function ComponenteEsempio(props) {
//     return <h1> CIAO, {props.nome}</h1>;
// }

// // const elemento = <Ciao nome="Ivan" />;
// // ReactDOM.render(
// //     elemento,
// //     document.getElementById('root')
// // );



// function Funzione() {
//     return (
//         <div>
//             <ComponenteEsempio nome="Ivan" />
//             <ComponenteEsempio nome="Luca" />
//             <ComponenteEsempio nome="Mirko" />
//         </div>
//     );
// }

// ReactDOM.render(
//     <Funzione />,
//     document.getElementById('root')
// );


// function formatDate(date) {
//     return date.toLocaleDateString();
// }

// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img
//                     className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">{props.text}</div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'https://placekitten.com/g/64/64',
//     },
// };


// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );



//  function tick() {
//      const element = (
//          <div>
//              <h1>HELLO WORLD!</h1>
//              <h2>It is {new Date().toLocaleTimeString()}.</h2>
//          </div>
//      );
//      ReactDOM.render(
//         element, 
//         document.getElementById('root')
//     );
//  }

// setInterval(tick, 1000); // ogni secondo viene chiamata la callback tick - che a sua volta chiama la funzione ReactDOM.render()

// function Clock(props) {
//     return (
//         <div>
//             <h1>Ciao, mondo!</h1>
//             <h2>Sono le {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     )
// }

// function tick() {
//     ReactDOM.render(
//         <Clock />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // 3. Quando l'output viene renderizzato, React invoca questo metodo - al suo intorno viene impostato un timer con cui invocare il metodo tick()
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // 5. Se il componente Clock dovesse essere rimosso dal DOM, React invocherebbe questo metodo ed il timer verrebbe cancellato
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // 4. Ogni secondo quindi viene invocato questo metodo - ogni secondo viene cambiato lo stato e quindi React invoca ogni volta il metodo render per sapere cosa mostrare a schermo - ogni volta this.state.date avrà un valore differente e quindi verrà mostrato un output differente
    tick() {
        this.setState({
            date: new Date()
        });
    }

    // 2. React invoca il metodo render - lo fa per capire cosa visualizzare a schermo - React si occupa di aggiornare il DOM in modo da farlo corrispondere all'output della renderizzazione di Clock 
    render() {
        return (
            <div>
                <h1>Ciao, mondo!</h1>
                <h2>Sono le {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// 1. Clocl viene passato a ReactDOM.render() - React invoca il costruttore di Clock - Clock ha bisogno di mostrare l'ora corrente, per cui inizializziamo lo stato con l'ora corrente - aggiorneremo in seguito lo stato 
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);





class Interruttore extends React.Component {
    constructor(props) {
        super(props);
        this.state = { acceso: true };
        // Necessario per accedere al corretto valore di `this` all'interno della callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            acceso: !state.acceso
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.acceso ? 'Acceso' : 'Spento'}
            </button>
        );
    }
}

ReactDOM.render(
    <Interruttore />,
    document.getElementById('root-6')
);


function BenvenutoUtente(props) {
    return <h1>Bentornato/a!</h1>;
}

function BenvenutoOspite(props) {
    return <h1>Autenticati, per favore</h1>;
}

function Benvenuto(props) {
    const utenteAutenticato = props.utenteAutenticato;
    if (utenteAutenticato) {
        return <BenvenutoUtente />;
    }
    return <BenvenutoOspite />;
}

ReactDOM.render(
    // Prova a cambiare in utenteAutenticato={true}
    <Benvenuto utenteAutenticato={false} />,
    document.getElementById('root-7')
)

function BottoneLogin(props) {
    return <button onClick={props.onClick}>Login</button>;
}

function BottoneLogout(props) {
    return <button onClick={props.onClick}>Logout</button>;
}

class ControlloLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { utenteAutenticato: false };
    }

    handleLoginClick() {
        this.setState({ utenteAutenticato: true });
    }

    handleLogoutClick() {
        this.setState({ utenteAutenticato: false });
    }

    render() {
        const utenteAutenticato = this.state.utenteAutenticato;
        let bottone;

        if (utenteAutenticato) {
            bottone = (
                <BottoneLogout onClick={this.handleLogoutClick} />
            );
        } else {
            bottone = (
                <BottoneLogin onClick={this.handleLoginClick} />
            );
        }
        return (
            <div>
                <Benvenuto utenteAutenticato={utenteAutenticato} />
                {bottone}
            </div>
        );
    }
}

ReactDOM.render(
    <ControlloLogin />,
    document.getElementById('root-7')
);

function MessaggioAvviso(props) {
    if (!props.attenzione) {
        return null;
    }

    return <div className="warning">CIAO</div>;
}

class Pagina extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mostraAvviso: true };
        this.handleToggleClick = this.handleToggleClick.bind(
            this
        );
    }
    handleToggleClick() {
        this.setState(state => ({
            mostraAvviso: !state.mostraAvviso,
        }));
    }

    render() {
        return (
            <div>
                <MessaggioAvviso
                    attenzione={this.state.mostraAvviso}
                />
                <button onClick={this.handleToggleClick}>
                    {this.state.mostraAvviso ? 'Nascondi' : 'Mostra'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Pagina />,
    document.getElementById('root-8')
);


// const numeri = [1, 2, 3, 4, 5];
// const lista = numeri.map((numero) => numero  * 2);
// console.log('LISTA', lista);

// const numeri = [1, 2, 3, 4, 5];
// const lista = numeri.map((numero) =>
//     <li>{numero}</li>
// );

// ReactDOM.render(
//     <ul>{lista}</ul>,
//     document.getElementById('root-9')
// );


function ListaNumeri(props) {
    const numeri = props.numeri;
    const lista = numeri.map((numero) =>
        <li key={numero.toString()}>{numero}</li>
    );
    return (
        <ul>{lista}</ul>
    );
}


const numeri = [1, 2, 3, 4, 5];
const numeri2 = [10, 20, 30, 40, 50];
ReactDOM.render(
    <ListaNumeri numeri={numeri} />,
    document.getElementById('root-10')
);


// BLOG
function Blog(props) {
    const sidebar = (
        <ul>
            {props.articoli.map((articolo) =>
                <li key={articolo.id}>
                    {articolo.titolo}
                </li>
            )}
        </ul>
    );
    const contenuto = props.articoli.map((articolo) =>
        <div key={articolo.id}>
            <h3>{articolo.titolo}</h3>
            <p>{articolo.testo}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {contenuto}
        </div>
    );
}

const articoli = [
    { id: 1, titolo: 'Ciao Mondo', testo: 'Benvenuto in imparando React!' },
    { id: 2, titolo: 'Installazione', testo: 'Puoi installare React usando npm.' }
];
ReactDOM.render(
    <Blog articoli={articoli} />,
    document.getElementById('root-11')
);

// BRANCH 9-FORMS
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // this.setState({value: event.target.value});
        this.setState({ value: event.target.value.toUpperCase() });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault(); // cancels the event if it is cancelable
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> <hr />
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root-12')
);



class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> <hr />
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('root-13')
);




class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}> <hr />
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('root-14')
);


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    render() {
        return (
            <form> <hr />
                <label>
                    Is going:
                <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
                <br />
            </form>
        )
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('root-15')
);


// 10 - LIFTING STATE UP 

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil</p>
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }
    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <div>
                <br /><hr  size="1" color="red" align="center" /><br />
                <h1><center>CALCULATOR</center></h1>
                <fieldset>
                    <legend>Enter temperature in Celsius: PROVA</legend>
                    <input
                        value={temperature}
                        onChange={this.handleChange} />

                    <BoilingVerdict
                        celsius={parseFloat(temperature)} />
                </fieldset>
                <br /><hr  size="1" color="red" align="center" /><br />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root-16')
);


// ADDING A SECOND INPUT

const scalesNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scalesNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator2 extends React.Component {
    render() {
        return (
            <div>
                <br /><hr  size="1" color="red" align="center" /><br />
                <h1><center>CALCULATOR 2</center></h1>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
                <hr  size="1" color="red" align="center" />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator2 />,
    document.getElementById('root-17')
);


// WRITING CONVERSION FUNCTION

function toCelsius(fahrenheit) {
    return (fahrenheit - 30) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) { // accetta una temperatura e una delle due funzioni convert e restituisce una stringa - in sostanza restituisce i gradi convertiti  
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

// EXAMPLE
// tryConvert('abc', toCelsius) --> returns an empty string 
// tryConvert('10,22', toFahrenheit) -->  returns '50.396'.

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator3 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ state: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
               <h1>CALCULATOR 3</h1>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />

                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator2 />,
    document.getElementById('root-18')
);



// 12 - COMPOSITION VS INHERITANC

function BordoFigo(props) {
    return (
        <div className={'BordoFido BordoFigo-' + props.colore}>
            {props.children}
        </div>
    );
}


function FinestraBenvenuto() {
    return (
        <BordoFigo colore="blue">
            <h1 className="Finestra-titolo">Benvenuto/a!</h1>
            <p className="Finestra-messaggio">
                Ti ringraziamo per questa tua visita nella nostra nave spaziale!
            </p>
        </BordoFigo>
    )
}














































// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
