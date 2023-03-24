function toggleMobileMenu() {
	var e = document.getElementById("m-menu-button"),
		o = document.getElementById("m-menu");
	e.children[1].classList.contains("block")
		? (e.children[1].classList.replace("block", "hidden"),
		  e.children[2].classList.replace("hidden", "block"),
		  o.classList.replace("hidden", "block"))
		: (e.children[1].classList.replace("hidden", "block"),
		  e.children[2].classList.replace("block", "hidden"),
		  o.classList.replace("block", "hidden"));
}
function loadLibrary() {
	document
		.getElementById("search-form")
		.addEventListener("submit", searchLibrary);
}
function searchLibrary(e) {
	e.preventDefault();
	let t = document.getElementById("search").value,
		d = document.getElementById("search-result"),
		m = ((d.innerHTML = ""), document.createElement("div"));
	(m.className = "my-6"),
		t && "" != t
			? (d.classList.remove("hidden"),
			  fetch("./data.json")
					.then((e) => e.json())
					.then((e) => {
						var o,
							e = e.books,
							e =
								(console.log(e),
								e.filter(
									(e) =>
										e.title.toLowerCase().includes(t) ||
										e.authors.join(", ").toLowerCase().includes(t) ||
										e.subjects.join(", ").toLowerCase().includes(t)
								));
						0 < e.length
							? (e.forEach((e) => {
									var o = document.createElement("a"),
										t =
											((o.href = "#"),
											(o.className =
												"flex flex-col items-center bg-white border border-gray-200 p-4 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"),
											document.createElement("img")),
										d =
											((t.className =
												"object-cover w-full rounded-lg h-96 md:h-auto md:w-24"),
											(t.src = e.image),
											(t.alt = e.title),
											document.createElement("div")),
										n =
											((d.className =
												"flex flex-col justify-between p-4 leading-normal text-gray-400"),
											document.createElement("h5")),
										r =
											((n.className = "mb-2 text-2xl font-bold tracking-tight"),
											(n.innerHTML = e.title),
											document.createElement("p")),
										a =
											((r.className = "mb-3 font-normal"),
											document.createElement("b")),
										c =
											((a.innerHTML = "Author(s): "),
											document.createTextNode(e.authors.join(", "))),
										r =
											(r.appendChild(a),
											r.appendChild(c),
											document.createElement("caption"));
									(r.innerHTML = e.subjects.join(", ")),
										d.appendChild(n),
										d.appendChild(a),
										d.appendChild(r),
										o.appendChild(t),
										o.appendChild(d),
										m.appendChild(o);
							  }),
							  d.appendChild(m))
							: (
							  ((o = document.createElement("h1")).className =
									"text-gray-400"),
							  (o.innerHTML =
									"No books found, please try with another keyword"),
							  e.appendChild(o),
							  d.appendChild(e));
					}))
			: d.classList.add("hidden");
}
function loadBooks() {
	var e = window.location.search;
	let o = new URLSearchParams(e).get("page");
	o = o ? Number(o) : 1;
	let c = document.getElementById("book-grid");
	(c.innerHTML = ""),
		fetch("./data.json")
			.then((e) => e.json())
			.then((e) => {
				e.books.slice(12 * (o - 1), 12 * o).forEach((e) => {
					var o = document.createElement("div"),
						t =
							((o.className =
								"w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"),
							document.createElement("a")),
						d = ((t.href = "#"), document.createElement("img")),
						d =
							((d.className = "h-72 mx-auto"),
							(d.src = e.image),
							(d.alt = e.title),
							t.appendChild(d),
							document.createElement("div")),
						n = ((d.className = "p-5"), document.createElement("a")),
						r = ((n.href = "#"), document.createElement("h5")),
						r =
							((r.className =
								"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),
							(r.innerHTML = e.title),
							n.appendChild(r),
							document.createElement("p")),
						a =
							((r.className =
								"mb-3 font-normal text-gray-700 dark:text-gray-400"),
							document.createElement("b")),
						e =
							((a.innerHTML = "Author(s): "),
							document.createTextNode(e.authors.join(", ")));
					r.appendChild(a),
						r.appendChild(e),
						d.appendChild(n),
						d.appendChild(r),
						o.appendChild(t),
						o.appendChild(d),
						c.appendChild(o);
				});
			});
}
function previousBooksPage() {
	var e = window.location.search,
		e = new URLSearchParams(e).get("page");
	e && "2" == e ? window.location.replace("?page=1") : window.location.reload();
}
function nextBooksPage() {
	var e = window.location.search,
		e = new URLSearchParams(e).get("page");
	e && "1" == e ? window.location.replace("?page=2") : window.location.reload();
}
