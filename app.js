var expos;
var viz;

// ############
// loading data
// ############
d3.json('data/expos.json').then((d) => {
  expos = _.values(d);

  // create viz
  viz = d3
    .select('#viz')
    .selectAll('div')
    .data(expos)
    .join('div')
    .classed('expo', true)
    .html(
      (d) => `
        <h2>${d.titulo}</h2>
        <span class='linguagens'>${d.linguagens}</span>
    `
    );

  //   console.log(expos);
});

function filterViz(query) {
  viz.style('display', 'none');
  viz.filter((d) => d.titulo.includes(query)).style('display', 'block');
}

function filterLinguagem(linguagem) {
  viz.style('display', 'none');
  viz
    .filter(function (d) {
      return d.linguagens.includes(linguagem);
    })
    .style('display', 'block');
}
