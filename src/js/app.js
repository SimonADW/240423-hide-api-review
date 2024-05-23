console.log("Hello world");

const renderData = (data)=> {
	const container = document.querySelector("div");
	for(let currency in data) {
		const para = document.createElement("p");
		para.textContent = `${currency}: ${data[currency]}`;
		container.append(para);
	}
}

const fetchAndRender = async ()=> {
	try {
		const response = await fetch("http://localhost:4000/");
		const data = await response.json();
		renderData(data);
	} catch (error) {
		
	}
}

fetchAndRender()