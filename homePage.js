let query = "car";

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let page = false;
button1.addEventListener("click", function () {
  if (page === false) {
    fetch("https://api.pexels.com/v1/search?query=car", {
      headers: {
        Authorization:
          "ueAxwbxFTRqU1F5mtgGsMeWnV7RcCkLNVR18Il3IIoQy6ROO3CrQgYfD",
      },
    })
      .then((response) => {
        if (response.ok) {
          page = true;
          return response.json();
        } else {
          throw new Error("errore generico");
        }
      })
      .then((data) => {
        console.log(data);
        data.photos.forEach((foto, i) => {
          let url = foto.src.landscape;
          let photographer = foto.photographer;
          let photographer_url = foto.photographer_url;
          let photoID = foto.id;

          const container = document.getElementById("container");

          let col = document.createElement("div");

          col.classList.add("col-md-4");
          col.innerHTML = `<div class="card mb-4 shadow-sm">
              <img
                src=${url}
                class="bd-placeholder-img card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">${photographer}</h5>
                <p class="card-text">
                  <a href="${photographer_url}">${photographer_url}</a>
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary" id="${i}"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${photoID}</small>
                </div>
              </div>`;
          row.appendChild(col);
          deleteButton = document.getElementById(i);
          deleteButton.addEventListener("click", (i) => {
            i.closest(".card").remove();
          });
        });
      })
      .catch();
  } else {
    location.reload();
  }
});
button2.addEventListener("click", function () {
  if (page === false) {
    fetch("https://api.pexels.com/v1/search?query=dog", {
      headers: {
        Authorization:
          "ueAxwbxFTRqU1F5mtgGsMeWnV7RcCkLNVR18Il3IIoQy6ROO3CrQgYfD",
      },
    })
      .then((response) => {
        if (response.ok) {
          page = true;
          return response.json();
        } else {
          throw new Error("errore generico");
        }
      })
      .then((data) => {
        console.log(data);
        data.photos.forEach((foto) => {
          let url = foto.src.landscape;
          let photographer = foto.photographer;
          let photographer_url = foto.photographer_url;
          let photoID = foto.id;
          let row = document.getElementById("row");
          let col = document.createElement("div");

          col.classList.add("col-md-4");
          col.innerHTML = `<div class="card mb-4 shadow-sm">
              <img
                src=${url}
                class="bd-placeholder-img card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">${photographer}</h5>
                <p class="card-text">
                  <a href="${photographer_url}">${photographer_url}</a>
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">${photoID}</small>
                </div>
              </div>`;
          row.appendChild(col);
        });
      })
      .catch();
  } else {
    location.reload();
  }
});

let myURL = "https://api.pexels.com/v1/search?query=car";
