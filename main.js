const gatos = [
  {
    name: 'RODOLFO',
    shortDesc:
      'Tiene 4 años, le gusta perseguir mariposas, se lleva bien con niños y con otros gatos.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://animalrevista.com/wp-content/uploads/2016/07/gatas-calico-tricolor-animal-la-revista.jpg',
    colores: ['tricolor', 'negro', 'blanco', 'naranja', 'rayado'],
    sexo: 'm',
  },

  {
    name: 'Muzzarella',
    shortDesc:
      'Muy dulce y mimosa. Tiene seis dedos en una pata que asegura le dan superpoderes.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://www.imagenesdegatos.net/wp-content/uploads/2015/12/gato-gris-ojos-naranja-3.jpg',
    colores: ['gris'],
    sexo: 'f',
  },

  {
    name: 'Artilugia',
    shortDesc:
      'Muy activa y juguetona. Se lleva bien con perros. Ideal para casa con jardin amplio',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://image.freepik.com/foto-gratis/primer-plano-hermoso-gato-negro-blanco-marcas-sueno-cara-acostado-piso-concreto_44161-220.jpg',
    colores: ['negro', 'blanco'],
    sexo: 'f',
  },

  {
    name: 'Wosito',
    shortDesc:
      'Vivio toda su vida en la calle y todavia se asombra de cosas como estufas y escaleras.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqkcBuVxZdrxWFYiEhoR3SpIioYCMesijUKHfjh7pTz-ctaf5&s',
    colores: ['rayado'],
    sexo: 'm',
  },

  {
    name: 'Calamardo',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 2',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 3',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 4',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },

  {
    name: 'Calamardo 5',
    shortDesc:
      'Dicen que de noche, cuando nadie lo puede escuchar, invoca a Cthulu. Muy mimoso.',
    longDesc:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero dolorum aliquam error expedita distinctio porro ducimus ex repellendus laboriosam. Sequi, doloribus autem? Unde commodi assumenda consequatur ratione numquam distinctio nihil blanditiis quae debitis sed eligendi modi architecto omnis aspernatur officia molestiae, vero nemo a quibusdam? Voluptatum eveniet blanditiis impedit.',
    img:
      'https://misanimales.com/wp-content/uploads/2018/07/mito-del-gato-negro.jpg',
    colores: ['negro'],
    sexo: 'm',
  },
];

const contenedor = document.querySelector('.adopt');

const mostrarEnHTML = array => {
  contenedor.innerHTML = '';
  array.map(gato => {
    contenedor.innerHTML += `<div class="card" data-sexo="${gato.sexo}">
    <div class="card_img">
      <img src="${gato.img}" />
    </div>
    <div class="card_info">
      <h3>${gato.name}</h3>
      <p>
        ${gato.shortDesc}
      </p>
      <button data-name="${gato.name}" class="botonVerMas">Ver mas</button>
  
    <i id="corazon" class="fa fa-heart"></i> <p id="likes">0<p>
    </div>
  </div>`;
  });
};

// console.log(gatos)
mostrarEnHTML(gatos);



const corazones = document.querySelectorAll('#corazon');
const likes = document.querySelectorAll('#likes');

// console.log(corazones);

// forEach

corazones.forEach((corazon, indiceCorazon) => {
  corazon.onclick = () => {
    // console.log('me hicieron click', indiceCorazon);

    likes.forEach((like, indiceLike) => {
      if (indiceCorazon === indiceLike) {
        let cantidadDeLikes = Number(like.textContent);
        cantidadDeLikes++;
        like.textContent = cantidadDeLikes;
      }
    });

    // mega sugerencia de marian:
    // let cantidadDeLikes = Number(likes[indiceCorazon].textContent);
    // cantidadDeLikes++
    // likes[indiceCorazon].textContent = cantidadDeLikes
  };
});

const botones = document.querySelectorAll('.botonVerMas');
const modal = document.querySelector('.modal');
const modalContenido = document.querySelector('.modalContenido');
const cerrarModal = document.querySelector('#cerrarModal');

// console.log(botones);

botones.forEach(boton => {
  boton.onclick = () => {
    gatos.map(gato => {
      if (gato.name === boton.dataset.name) {
        modalContenido.innerHTML = `
        Nombre: ${gato.name}
        Descripcion: ${gato.longDesc}
        `;
      }
    });
    modal.classList.remove('noMostrar');
  };
});

cerrarModal.onclick = () => {
  modal.classList.add('noMostrar');
};

const form = document.querySelector('form');

form.onsubmit = e => {
  e.preventDefault();

  const radios = document.querySelectorAll('input[type=radio]');

  const baneadas = ['Marian', 'Angie', 'Euge', 'Agus'];

  radios.forEach(radio => {
    if (radio.checked) {
      contenedor.innerHTML = '';

      if (radio.value === 'i') {
        return mostrarEnHTML(gatos);
      }

      const gatosFiltrados = gatos.filter(gato => {
        return gato.sexo === radio.value;
      });

      mostrarEnHTML(gatosFiltrados);
    }
  });
};

// LECCION DE ESTA CLASE:
// primero dejo la data en javascript tal como la quiero
// luego la paso a html 


// funciones puras y funciones impuras

// mala definicion: una funcion pura trabaja solo con informacion contenida dentro de si,
// sin modificar nada fuera de su scope

// buena: dados los mismos parametros de entrada, tendremos la misma info de salida
// no tiene efectos secundarios (o efectos colaterales)



// operaciones inmutables

const baneadas = ["Marian", "Angie"]


const persona = {
  nombre: "Ana", 
  edad: 28,
  apodo: "La NO dictadora"
}

const personaActualizada = persona

personaActualizada.apodo = "Nani"

console.log(personaActualizada)
