/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const exampleText = "the raproducad bug"
  return <h1 style={{textAlign: "center", marginTop: "20vh", fontSize: "10rem"}}>{exampleText.replaceAll('a','e')}</h1>
}
