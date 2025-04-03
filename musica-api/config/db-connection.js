import mongoose from "mongoose";

const dbUser = "joaokusaka27";
const dbPassword = "RqBmBXmmAifk7SWx";

const connect = () => {
  mongoose.connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.o1nu8.mongodb.net/api-musica?retryWrites=true&w=majority&appName=Cluster0`
  );
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("Erro ao conectar ao MongoDB");
  });
  connection.on("open", () => {
    console.log("Conectado ao MongoDB");
  });
};
connect();
export default mongoose;
