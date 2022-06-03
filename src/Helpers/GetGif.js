

export const GetGif = async (valorBusqueda) => {
    const resp = await fetch(url)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MZCCa2EcyaFCdXiWt9T7gbD3ZSyyOKie&q=simpsons&limit=5`
    const {data} = resp.json();
 
    const gifs = data.map(gif => {
        
    })
  
}
