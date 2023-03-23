console.log("hello world")

async function getSpotifyData() {
    const token = "BQDCXKSjmisuqwcN1Zde6p5h5xBV1ficZCbaEwXPODNPJPAgJTwN_glQCJHrtufIqcjHebBXS1bI3za8lgDzieXx5yZErYL2iHKf5cXeLDhE7-pQLeDQrmgv2PCiVFAzU2UbNQYa_MIB0dc5s4nXuQm2sHLXX4u_htOd4HKEP9htrAObDsHLluE"
    
    const result = await fetch("https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50&offset=5", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}

async function main() {
    const data = await getSpotifyData()

    data.items.forEach((item: any, index: number) => {
        const img = document.createElement("img")
        img.src = item.album.images[0].url
        img.alt = item.name
        img.className = "d-block w-100"
        img.style.height = "300px"
        img.style.objectFit = "cover"
        img.style.objectPosition = "center"

        const div = document.createElement("div")
        div.className = "carousel-item flex flex-col-reverse"
        div.appendChild(img)

        const h5 = document.createElement("h5")
        h5.innerHTML = item.name
        h5.className = "mt-3"

        const p = document.createElement("p")
        p.innerHTML = item.artists[0].name

        const div2 = document.createElement("div")
        div2.className = "carousel-caption d-none d-md-block"
        div2.appendChild(h5)
        div2.appendChild(p)

        div.appendChild(div2)
        
        document.getElementById("carousel-inner")?.appendChild(div)
    })
}

main()

export{}