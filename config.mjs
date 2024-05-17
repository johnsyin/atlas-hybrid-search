// schema variables
const schema = {
    // display fields in results
    descriptionField : "description", 
    titleField : "hightlight",
    imageField : "images[0]",
    // vector search field
    vectorField : "text-embedding-ada-002-v3",
    // source for embedding when using embed-data.mjs
    vectorSourceField: "plot"
}
// realestates_index_v2
export default schema;