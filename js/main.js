var videos=[
    {
        video: 'https://www.youtube.com/embed/dDDHt9Tpgq0',
        nombre: 'Familia',
        foto:'familia1.jpg'
    },
    {
        video: 'https://www.youtube.com/embed/FA0ERap37os',
        nombre: 'Kela',
        foto:'kela.jpeg'
    },
    {
        video: 'https://www.youtube.com/embed/e7cRmsS-PPc',
        nombre: 'familia',
        foto:'familia.png'
    },
    {
        video: 'https://www.youtube.com/embed/e9QTYXg66Lo',
        nombre: 'karina',
        foto:'karina.png'
    },
    {
        video: 'https://www.youtube.com/embed/ydGdNwYW0bc',
        nombre: 'lorem',
        foto:'karina2.png'
    },
    {
        video: 'https://www.youtube.com/embed/7m8DDPh6ZTk',
        nombre: 'claudia',
        foto:'claudia.jpeg'
    },
    {
        video: 'https://www.youtube.com/embed/p_NyvJv0cuI',
        nombre: 'nosotros',
        foto:'nosotros.png'
    },
    {
        video: 'https://www.youtube.com/embed/hPJu-tP54l4',
        nombre: 'Saul',
        foto:'saul.jpeg'
    },
    {
        video: 'https://www.youtube.com/embed/lZ1Odzy72zs',
        nombre: 'mami',
        foto:'mami.jpeg'
    }
]


// https://www.youtube.com/embed/HM9z-y5u1r4&feature=youtu.be

const layer=document.getElementById('layer');
const reproductor=document.getElementById('reproductor');
const body=document.getElementById('body');

const regalos=document.getElementById('regalos');
const next=document.getElementById('next');
const sorpresa=document.getElementById('sorpresa');

function verVideo(video){

    body.style.overflow='hidden';
    layer.style.display='block';
    reproductor.innerHTML=`
    <iframe src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}

function cerrarLayer(){
    body.style.overflow='initial';
    layer.style.display='none';
    reproductor.innerHTML=''
}

function cargarRegalos(){
    videos.forEach(element => {
        console.log(element)
        regalos.innerHTML+=
        `
        <div class="card">
            <div class="picture" style="background-image:url('img/${element.foto}')">
            </div>
            <button onClick="verVideo('${element.video}')">Ver video</button>
            </div>
            `
            // <h4>${element.nombre}</h4>
    });
}

function cargarSorpresa(){
    sorpresa.innerHTML+=
        `
        <div class="card">
        <div class="picture" style="background-image:url('img/matias.png')">
        </div>
        <h4>Matias Dituro</h4>
        <button onClick="verVideo('https://www.youtube.com/embed/HM9z-y5u1r4')">Ver video</button>
        </div>
        <div class="card">
        <div class="picture" style="background-image:url('img/german.jpeg')">
        </div>
        <h4>German Lanaro</h4>
        <button onClick="verVideo('https://www.youtube.com/embed/oljaB5M8Hp8')">Ver video</button>
        </div>
        `;
}

next.addEventListener('click', function(){
    next.style.display='none';
    sorpresa.style.display='flex';
})

cargarRegalos();
cargarSorpresa();