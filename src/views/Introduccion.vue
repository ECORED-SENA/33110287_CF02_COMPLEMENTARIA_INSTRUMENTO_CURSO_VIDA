<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.bg1          
      .col-lg-7
        .p-4
          p(data-aos="fade-down").mb-0 El objetivo de esta estrategia es el logro de un mejor nivel de salud de la población, una mejor experiencia de los usuarios durante el proceso de atención y con costos acordes a los resultados obtenidos en el curso de vida, la cual aborda el continuo de la vida y, reconoce que el desarrollo humano y los resultados en salud dependen de la interacción de diferentes factores a lo largo del trayecto vital: históricos, sociales, económicos, de experiencias acumulativas y las situaciones presentes de cada individuo, influenciadas por el contexto familiar, social, económico, ambiental y cultural, entendiendo que invertir en atenciones oportunas en cada generación repercutirá en las siguientes y que el mayor beneficio de un momento vital puede derivarse de intervenciones hechas en un período anterior.   
        p(data-aos="fade-down")    
      .col-lg-5.p-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='') 

    p(data-aos="fade-down").my-5 Desde el punto de vista epidemiológico, el curso de vida es el estudio a largo plazo de los efectos en la salud o la enfermedad, de la exposición a riesgos físicos o sociales durante la gestación, la infancia, la adolescencia, la juventud y la vida adulta de una persona en su contexto. Para dar mayor claridad se invita a revisar el siguiente video.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5IaYCP_IoRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Plan de cuidado en la atención integral

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
