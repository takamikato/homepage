$(function () {
  fetch('https://katotechblog.microcms.io/api/v1/newslist', {
    headers: {
      'Content-Type': 'application/json',
      'X-MICROCMS-API-KEY': 'c341e1b448c246d1a1540fa6da5caae94a22',
    },
  }).then((response) => {
    let res = response.json();
    res.then((data) => {
      console.log(data.contents[0].title);

      let list_html = '';
      data.contents.forEach((e) => {
        let date = new Date(e.date);
        const datestr = date.toLocaleString();
        list_html += `
        <li>
          <article>
            <a class="clearfix" href="#">
              <time datetime="2022-07-20">${formatDate(date)}</time>
              <h3 class="title">${e.title}</h3>
              <span class="arrow basic"></span>
            </a>
          </article>
        </li>`;
      });

      $('#news_list').append(list_html);
    });
  });
});

function formatDate(dt) {
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth() + 1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  return `${y}.${m}.${d}`;
}
