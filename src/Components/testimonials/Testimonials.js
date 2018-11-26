import React, { Component } from 'react';
export default class Testimonials extends Component {
  render() {
    return (
        <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>letters of recommendation</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>We have been working with Rania MAALEJ for four years and are thrilled with the results! Rania is smart, responsive and easy to work with. She’s on top of current technologies, and regularly offers up recommendations that help us make a better solution.
                      </p>
                      <cite>Mr. Manar Hamami, PDG Lomachines, SFAX -Tunisia- </cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p> J'ai été superviseur de Mlle. Rania MAALEJ ces dernières années et cela a été un plaisir de l'avoir dans mon laboratoire.
                        Mlle. Rania MAALEJ est une chercheuse exceptionnelle, je l'ai d'abord connu 
                        comme son professeur dans ses années d'ingénierie. J'ai été particulièrement
                        séduit par sa personnalité enjouée et son esprit créatif.
                        Ensuite, je l'ai supervisé durant son projet de thèse qui porte sur la reconnaissance de l’écriture manuscrite arabe, et elle a abouti à des résultats intéressants qui ont donné lieu à des publications dans des revues et conférences internationales spécialisées. 
                        Au cours des dernières années, Mlle. Rania MAALEJ a démontré sa capacité 
                        à travailler de façon autonome avec beaucoup de créativité et d'enthousiasme.
                        Elle a aussi un trait de leadership. En outre, Mlle. Rania MAALEJ a une 
                        personnalité très attachante qui lui permet de travailler, 
                        dans une collectivité, de manière remarquable. </p>
                      <cite>Prof. Monji kherallah, Faculty of Sciences, SFAX -Tunisia- </cite>
                    </blockquote>
                  </li> {/* slide ends */}
                  <li>
                    <blockquote>
                      <p>Mlle, Rania MAALEJ a acquis une expérience pédagogique dans l’enseignement de l’Informatique. En effet, elle a participé à l’enseignement de plusieurs modules Informatiques en particulier au sein de la faculté de médecine de Sfax.
                        Elle a poursuit avec efficacité ses participations aux encadrements des projets et elle a
                         très bien animé des séminaires pédagogique dédies au corps enseignant de notre établissement.
                         En parallèle avec sa tâche d’enseignement Mlle. Rania participe à des projets de développement 
                         web pour notre faculté.
                      </p>
                      <cite>Prof. Nejmeddine Hentati, Faculty of medecine, SFAX -Tunisia-  </cite>
                    </blockquote>
                  </li> {/* slide ends */}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>   


       
    );
  }
}