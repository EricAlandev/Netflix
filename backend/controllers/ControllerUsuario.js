import valueAssociate from "../models/index.js"; // importa todos os models
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

const { User } = valueAssociate;

export const criarUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Validações básicas
    if (!email) throw new Error("O email é obrigatório.");
    if (!senha) throw new Error("A senha é obrigatória.");

    // Verifica se o usuário já existe
    const usuarioExistente = await User.findOne({ where: { email } });
    if (usuarioExistente) throw new Error("Usuário já cadastrado.");

    const senhaHash = await bcrypt.hash(senha, 10);
    console.log(senhaHash)

    // Cria o usuário
    const novoUsuario = await User.create({ email, senha: senhaHash });

    // Retorna o usuário criado
    return res.status(201).json({ message: "Usuário cadastrado!" });
  } catch (error) {
    // Retorna erro
    return res.status(400).json({ error: error.message });
  }
};



export const loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // 🔎 validações iniciais
    if (!email) throw new Error("O email é obrigatório.");
    if (!senha) throw new Error("A senha é obrigatória.");

    // 🔎 verifica se o usuário existe
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) throw new Error("Usuário não encontrado.");

    // 🔎 compara a senha
    const comparaSenha = await bcrypt.compare(senha, usuario.senha);
    if (!comparaSenha) throw new Error("Senha incorreta.");

    // ✅ sucesso -> retorna só o email (ou mais dados se quiser)
    return res.status(200).json({
      message: "Login realizado com sucesso!",
      email: usuario.email,
    });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho absoluto até o PDF
const pdfPath = path.resolve(__dirname, "../../public/assets/manifesto.pdf");

//Codigo enviado pro email pos login
export const gerarCodigo = async (req, res) => {
  try {
    const { email } = req.body;

    // 1️⃣ valida email
    if (!email) throw new Error("O email é obrigatório.");

    // 2️⃣ busca usuário
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) throw new Error("Usuário não encontrado.");

    // 3️⃣ gera código aleatório (6 dígitos)
    const codigo = Math.floor(100000 + Math.random() * 900000);
    const expiration = new Date(Date.now() + 10 * 60 * 1000); // 10 minutos


    // 5️⃣ atualiza usuário com código e data
    await User.update(
      { codigo: codigo, codigoExpiracao: expiration },
      { where: { email } }
    );

    // 6️⃣ envia email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Avaliação faculdade",
      html: `<p>Olá, Aluno! <br>
              Chegamos ao fim de mais um semestre. E com isso gostariamos de 
              saber a sua opinião para planejarmos o próximo semestre com base 
              na sua experiência. Preencha a avaliação rápida em apenas 2 minutos! <br> <br>

              Acesse este PDF para baixar a sua avaliação e dar inicio a sua 
              avaliação institucional! <br> <br>

              Ao realizar a avaliação, você ganhará um desconto de 40% na sua 
              próxima mensalidade! <br>
              Atenciosamente, Faculdade CDL.   

            </p>`,
      attachments: [
        {
          filename: "avaliacao.pdf",
          path: pdfPath,       // ← aqui!
          contentType: "application/pdf"
        }
      ]
    });
    

    return res.status(200).json({ message: "Código enviado com sucesso!" });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Verifica o código para efetuar o login.
export const verificarCodigo = async (req, res) => {
  try {
    const { email, codigo } = req.body;

    // 1️⃣ validações iniciais
    if (!email) throw new Error("O email é obrigatório.");
    if (!codigo) throw new Error("O código é obrigatório.");

    // 2️⃣ busca o usuário pelo email
    const usuario = await User.findOne({ where: { email } });
    if (!usuario) throw new Error("Usuário não encontrado.");

    // 3️⃣ verifica se o código e a data existem
    if (!usuario.codigo || !usuario.codigoExpiracao) {
      throw new Error("Código não gerado ou expirado.");
    }

    // 4️⃣ verifica se o código expirou
    const agora = new Date();
    const dataAntiga = new Date(usuario.codigoExpiracao);

    if (agora > dataAntiga) {
      throw new Error("Código expirado.");
    }

    // 5️⃣ verifica se o código bate
    if (parseInt(codigo) !== usuario.codigo) {
      throw new Error("Código incorreto.");
    }

    // 6️⃣ gera o payload e o token JWT
    const payload = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    // 7️⃣ retorna sucesso com token e payload
    return res.status(200).json({
      message: "Código verificado com sucesso!",
      token,
      usuario: payload,
    });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
