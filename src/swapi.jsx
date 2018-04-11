import React , { Component } from 'react';

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
            <div>
                <p>{person.name}</p>
                <p>{person.height}</p>
                <p>{person.mass}</p>
                <p>{person.hair_color}</p>
                <p>{person.skin_color}</p>
                <p>{person.birth_year}</p>
                <p>Films:</p>
                <div>
                    <ul>
                        {person.films.map( (film) => {
                            return (
                                <li key={film}>
                                    {film}
                                    <button onClick={ (e) => this.props.itemClick(film)}>Click</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

class Film extends Component {


    render(){
        return (
            <div>
                <p>{this.props.film.title}</p>
                <p>{this.props.film.episode_id}</p>
                <p>{this.props.film.opening_crawl}</p>
                <p>{this.props.film.director}</p>
                <p>{this.props.film.producer}</p>
                <p>{this.props.film.release_date}</p>
                <p>Characters:</p>
                <div>
                    <ul>
                        {this.props.film.characters.map(character => {
                            return (
                                <li key={character}>
                                    {character}
                                    <button onClick={ (e) => this.props.itemClick(character)}>Click</button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}