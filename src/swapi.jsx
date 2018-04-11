import React , { Component } from 'react';

function randerJSON(object, props){
    const keys = Object.keys(object);
    return (
        <div>
                {
                    keys.map((key) => {
                        if(!Array.isArray(object[key]))
                            return <p key={key}>{key + ': ' + object[key]}</p>
                        else{
                            return (<div key={key}>
                                        <p>{key}</p>
                                        <div>
                                            <ul className="list-group list-group-flush">
                                                {object[key].map( (item) => {
                                                    return (
                                                        <li key={item} className="list-group-item">
                                                            <span>{item}  </span>
                                                            { (item.includes('film') || item.includes('people')) && <button className="btn btn-info" onClick={ (e) => props.itemClick(item)}>Show</button>}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                            )
                        }
                    })
                }
            </div>
    )
}

export default class SWapi extends Component {

    constructor(props){
        super(props);
        this.state = {
            results: {}
        }
        this.search('https://swapi.co/api/people/1/?format=json');

        
    }

    search = (url) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            const results = JSON.parse(xhr.responseText)
            this.setState({results: results})
        })
        xhr.send();
    }

    render(){
        const { results } = this.state;
        const { url } = results;
        var isPerson = url && url.includes('people');
        var isFilm = url && url.includes('film');
        return isFilm ? <Film film={results} itemClick={this.search}/> : isPerson ? <Person person={results} itemClick={this.search}/> : null;
    }

}

class Person extends Component {

    render(){
        const { person } = this.props;
        return (
             randerJSON(person, this.props) 
        )
    }
}

class Film extends Component {
    
    render(){
        const { film }  = this.props;
        return (
            randerJSON(film, this.props) 
        )
    }
}