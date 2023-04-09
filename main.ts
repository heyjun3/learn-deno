console.log("HELLO DENO")

const bytes = await Deno.readFile("foo.txt")
console.log(new TextDecoder().decode(bytes)

