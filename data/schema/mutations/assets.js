export default `
uploadAsset(id: Int!, files: [UploadedFile!]!, simulatorId: ID, containerId: ID): String
addAssetFolder(name: String!, folderPath: String! fullPath: String!): String
removeAssetFolder(id: ID!): String
addAssetContainer(name: String!, folderId: ID, folderPath: String, fullPath: String): String
removeAssetContainer(id: ID!): String
removeAssetObject(id: ID!): String
test: String
`;
