import React, { useEffect, useState } from 'react';
//import repos from '../data/repos';
import Repo from './repo';

export default () => {

    const [repos, setRepos] = useState([]); // Se le da el valor inicial a repos (array vacio) y esto nos devuelve 
                                            // la constante repos y la función setRepos con la que se actualiza el 
                                            // valor de repos
    const [reposCount, setReposCount] = useState(0);

    useEffect(() => {

        const data = sessionStorage.getItem("repos");
        let myRepos;

        if(data){ // Si ya se hizo la consulta, entonces ha de entrar al condicional
          myRepos = JSON.parse(data);  

          setReposCount(myRepos.length);

          myRepos = myRepos.slice(0,3); // Solo muestra una parte de los elementos
          return setRepos(myRepos); // Retorna la información de los repos y se sale de useEffect
        }
        

        async function fetchRepos () {
            const response = await fetch("https://api.github.com/users/joansolano/repos");
            myRepos = await response.json();

            setReposCount(myRepos.length);

            sessionStorage.setItem("repos", JSON.stringify(myRepos)); // Toda la información se guarda en la memoria
                                                                      // del navegador mientras este esté abiero y
                                                                      // una vez se cierra, la información se borra.
                                                                      // De esta manera solo se hace una petición
                                                                      // a la api o al servidor por cada vez que se 
                                                                      // inicie el navegador y de esta manera se 
                                                                      // superar el limite de peticiones (en este 
                                                                      // caso de la API  de GitHub).

            myRepos = myRepos.slice(0,3);
            setRepos(myRepos); // la variable repos se actualiza con el arreglo que se trajo de la petición
        } 
        
        fetchRepos();
        
    }, []);

    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo Open Source</h2>
                <p>Colaboración y contribución de código</p> 
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo) => {
                        return <Repo repo={repo} key={repo.id}/>
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/joansolano" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver más en GitHub ({reposCount})
                </a>
            </div>
        </div>
    );
};

