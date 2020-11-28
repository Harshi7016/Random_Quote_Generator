import "./styles.css";

function generateQuote() {
  async function asyncFunc() {
    try {
      // fetch data from a url endpoint
      const response = await fetch("https://type.fit/api/quotes");

      //To fetch image from the url endpoint
      //const image = await fetch("https://source.unsplash.com/1600x900/?nature");
      const data = await response.json();

      //return quote data
      return data;

      //return quote,image
      //return { data, image };
    } catch (error) {
      console.error(error); // catches both errors
    }
  }

  asyncFunc().then((result) => {
    let randomQuoteIndex = Math.floor(Math.random() * result.length);
    document.querySelector("#quote").innerHTML = `
    <p>${result[randomQuoteIndex].text}</p>
    `;

    // const { data, image } = result;
    // const randomQuoteIndex = Math.floor(Math.random() * data.length);
    // document.body.style.backgroundImage = `url("${image.url}")`;
    // document.querySelector("#quote").innerHTML = `
    // <p>${result?.data[randomQuoteIndex].text}</p>
    // `;
  });
}
generateQuote();

document.querySelector("#generateQuote").addEventListener("click", () => {
  document.querySelector("#generateQuote").innerHTML = "Loading";
  generateQuote();
  document.querySelector("#generateQuote").innerHTML = "Generate Quote";
});
