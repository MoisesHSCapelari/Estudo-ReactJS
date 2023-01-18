import React, { useState } from "react";
import Modal from "react-modal";
import "../../assets/styles/modalStyle.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

const CreatePeopleSchemma = yup.object().shape({
  typePeople: yup.string().required("Tipo da pessoa não informado"),
  bond: yup.string().required("Vinculo Não informado"),
  name: yup.string().required("Nome não Informado"),
  document: yup.string().required("Documento não informado"),
  phone: yup.string().required("Telefone não informado"),
  email: yup.string().email("E-mail invalido").required("E-mail não informado"),
  cep: yup.string().required("CEP não informado"),
  address: yup.string().required("Endereço não informado"),
  number: yup.string().required("Numero não informado"),
  complement: yup.string().optional(),
  district: yup.string().required("Bairro não informado"),
  city: yup.string().required("Cidade não informadoa"),
  uf: yup.string().required("Estado não informado"),
});
export default function UpdatePeople() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreatePeopleSchemma),
  });
  const onSubmit = (data) => console.log(data);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [typePeople, setTypePeople] = useState(false);
  function changeTypePeople(){
    setTypePeople(!typePeople);
  }


  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          <i className="fas fa-pencil-alt mr-1"></i>
          Atualizar 
        </button>
      </div>
      <div className="Container">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <div className="modalHeader">
            <h2>Atualizar <b>Pessoa</b></h2>
            <button type="button" onClick={closeModal} className="btnClose">
              X
            </button>
          </div>
          <br />
          <hr />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-center mb-3 font-bold text-red-500">
              <p className="mb-1 ">{errors.typePeople?.message}</p>
              <p className="mb-1 ">{errors.bond?.message}</p>
              <p className="mb-1 ">{errors.name?.message}</p>
              <p className="mb-1 ">{errors.document?.message}</p>
              <p className="mb-1 ">{errors.phone?.message}</p>
              <p className="mb-1 ">{errors.email?.message}</p>
              <p className="mb-1 ">{errors.cep?.message}</p>
              <p className="mb-1 ">{errors.address?.message}</p>
              <p className="mb-1 ">{errors.number?.message}</p>
              <p className="mb-1 ">{errors.complement?.message}</p>
              <p className="mb-1 ">{errors.district?.message}</p>
              <p className="mb-1 ">{errors.city?.message}</p>
              <p className="mb-1">{errors.uf?.message}</p>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Tipo da Pessoa: <b> {typePeople === false ? 'Fisica' : 'Juridica' } </b>
                </label>
                <input
                  {...register("typePeople")}
                  type="hidden"
                  value={typePeople === false ? "Fisica" : "Juridica" }
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                <button 
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
                type="button"
                onClick={changeTypePeople}> Mudar Tipo da Pessoa para <b> {typePeople ? 'Fisica' : 'Juridica' }</b></button> 
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Vinculo
                </label>
                <input
                  {...register("bond")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Cliente"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Nome
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Jhon Jones"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  CPF/CNPJ
                </label>
                <ReactInputMask
                  mask={typePeople ? "99.999.999/9999-99" : "999.999.999-99" }
                  {...register("document")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="CPF/CNPJ"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Telefone
                </label>
                <ReactInputMask
                  mask="+55 99 9 9999-9999"
                  {...register("phone")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="+551198940-8922"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="JhonJones@gmail.com"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  CEP
                </label>
                <ReactInputMask
                  mask="99999-999"
                  {...register("cep")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="07161-080"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Endereço
                </label>
                <input
                  {...register("address")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Rua boquira"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Número
                </label>
                <input
                  {...register("number")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="33"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  complemento
                </label>
                <input
                  {...register("complement")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="casa 1"
                />
              </div>
            </div>
            <div className="flex">
              <div className="mr-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Bairro
                </label>
                <input
                  {...register("district")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Jardim IV Centenário Lavras"
                />
              </div>
              <div className="mb-3 lg:w-6/12">
                <label
                  className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                  htmlFor="grid-password"
                >
                  Cidade
                </label>
                <input
                  {...register("city")}
                  type="text"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Guarulhos"
                />
              </div>
            </div>

              <div className="w-full">
              <label
                className=" uppercase text-blueGray-600 text-xs font-bold mb-2 "
                htmlFor="grid-password"
              >
                Estado
              </label>
              <input
                {...register("uf")}
                type="text"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="SP"
              />
            </div>

            <div>
              <br />
              <hr />
              <br />
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={closeModal}
                className="bg-blueGray-500 text-black active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Confirmar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
