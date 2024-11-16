"use client"; 
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        cpf: '',
        telefone: '',
        cep: '',
        cidade: '',
        estado: ''
    });

    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: '',
        cpf: '',
        telefone: '',
        cep: '',
        cidade: '',
        estado: ''
    });

    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const router = useRouter();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexTelefone = /^\(\d{2}\)\d{5}-\d{4}$/;
    const regexCep = /^\d{5}-\d{3}$/;

    const validarCadastro = (e: React.FormEvent) => {
        e.preventDefault();
        let valido = true;
        const newErrors = { ...errors };

        if (formData.nome.trim() === '') {
            newErrors.nome = 'Por favor, preencha este campo.';
            valido = false;
        } else { newErrors.nome = ''; }

        if (!regexEmail.test(formData.email)) {
            newErrors.email = 'Por favor, insira um email válido.';
            valido = false;
        } else { newErrors.email = ''; }

        if (formData.senha.trim() === '') {
            newErrors.senha = 'Por favor, preencha este campo.';
            valido = false;
        } else { newErrors.senha = ''; }

        if (formData.confirmaSenha.trim() === '') {
            newErrors.confirmaSenha = 'Por favor, preencha este campo.';
            valido = false;
        } else if (formData.senha !== formData.confirmaSenha) {
            newErrors.confirmaSenha = 'As senhas não coincidem.';
            valido = false;
        } else { newErrors.confirmaSenha = ''; }

        if (!regexCpf.test(formData.cpf)) {
            newErrors.cpf = 'Por favor, insira um CPF válido (###.###.###-##).';
            valido = false;
        } else { newErrors.cpf = ''; }

        if (!regexTelefone.test(formData.telefone)) {
            newErrors.telefone = 'Por favor, insira um telefone válido ((##)#####-####).';
            valido = false;
        } else { newErrors.telefone = ''; }

        if (!regexCep.test(formData.cep)) {
            newErrors.cep = 'Por favor, insira um CEP válido (#####-###).';
            valido = false;
        } else { newErrors.cep = ''; }

        if (formData.cidade.trim() === '') {
            newErrors.cidade = 'Por favor, preencha este campo.';
            valido = false;
        } else { newErrors.cidade = ''; }

        if (formData.estado.trim() === '') {
            newErrors.estado = 'Por favor, preencha este campo.';
            valido = false;
        } else { newErrors.estado = ''; }

        setErrors(newErrors);

        if (valido) {

            const usuariosString = localStorage.getItem('usuarios');
            
            const usuarios = usuariosString ? JSON.parse(usuariosString) : [];
            
            const usuarioExistente = usuarios.find((usuario:any) => usuario.email === formData.email);
            
            if (usuarioExistente) {
                alert('Um usuário com este e-mail já está cadastrado.');
            } else {
                usuarios.push({ ...formData });
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
                setMensagemSucesso('Cadastro realizado com sucesso!');
        
                setFormData({
                    nome: '',
                    email: '',
                    senha: '',
                    confirmaSenha: '',
                    cpf: '',
                    telefone: '',
                    cep: '',
                    cidade: '',
                    estado: ''
                });
            }
        }
    }     

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <div className="relative">
                <Image
                    src="/img/voltz_Banner.png"
                    alt="Banner Image"
                    layout="responsive"
                    width={1920}
                    height={600}
                    objectFit="cover"
                    priority
                    className="w-full h-[600px] object-cover"
                />
                {/* Overlay preto */}
                <div className="absolute inset-0 bg-black opacity-80"></div>

                {/* Texto centralizado no banner */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
                    <h1 className="text-8xl font-bold mb-4">Cadastro</h1>
                    <p className="text-xl mb-6">Cadastre-se agora e descubra as vantagens de uma energia limpa e inteligente!</p>
                </div>
            </div>

            <form className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-8" onSubmit={validarCadastro}>
                <div className="form-group mb-4">
                    <label htmlFor="nome" className="block mb-1">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Insira seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.nome && <span className="text-red-500 text-sm">{errors.nome}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Insira seu email (ex: teste@email.com)"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="senha" className="block mb-1">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Insira sua senha"
                        value={formData.senha}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.senha && <span className="text-red-500 text-sm">{errors.senha}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="confirmaSenha" className="block mb-1">Confirme sua senha:</label>
                    <input
                        type="password"
                        id="confirmaSenha"
                        name="confirmaSenha"
                        placeholder="Confirme sua senha"
                        value={formData.confirmaSenha}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.confirmaSenha && <span className="text-red-500 text-sm">{errors.confirmaSenha}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="cpf" className="block mb-1">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="Insira seu CPF (ex: 123.456.789-10)"
                        value={formData.cpf}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.cpf && <span className="text-red-500 text-sm">{errors.cpf}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="telefone" className="block mb-1">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Insira seu telefone (ex: (12)34567-8910)"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.telefone && <span className="text-red-500 text-sm">{errors.telefone}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="cep" className="block mb-1">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="Insira seu CEP (ex: 12345-678)"
                        value={formData.cep}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.cep && <span className="text-red-500 text-sm">{errors.cep}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="cidade" className="block mb-1">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        placeholder="Insira sua cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.cidade && <span className="text-red-500 text-sm">{errors.cidade}</span>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="estado" className="block mb-1">Estado:</label>
                    <input
                        type="text"
                        id="estado"
                        name="estado"
                        placeholder="Insira seu estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.estado && <span className="text-red-500 text-sm">{errors.estado}</span>}
                </div>

                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                    Cadastrar
                </button>

                {mensagemSucesso && <p className="text-green-500 text-center mt-4">{mensagemSucesso}</p>}
            </form>
        </div>
    );
};

export default Cadastro;
